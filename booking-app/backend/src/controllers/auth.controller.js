import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import {createError} from "../utils/error.js";
import { login as loginService } from "../services/auth.service.js";

dotenv.config();

export const login = async (req, res, next) => {

    const username = req.body?.username;
    const password = req.body?.password;
    if(!username || !password) return next(createError(400, 'Missing required fields'));

    try {
       const user = await loginService({username, password});

        if(!user) return next(createError(403, 'username or password invalid'));
        if(Object.keys(user).length === 0) return next(createError(400, 'Could not find username'));

        const { isAdmin, _id , ...restProps} = user._doc;
        const token = jwt.sign({isAdmin, id: _id}, process.env.JWT_SECRET);


        res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json(restProps);
    } catch (ex) {
        console.error(`Could not login user. ${ex}`);
        return next(createError(500, 'Could not login user'));
    }
}