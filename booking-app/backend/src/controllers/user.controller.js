import { register as registerUser, findAll } from '../services/user.service.js';
import {createError} from "../utils/error.js";

export const getAll = async (req, res, next) => {
    try {
        res.status(200).json(await findAll());
    } catch (ex) {
        next(createError(500, 'Could not found users list'));
    }
}

export const register = async (req, res, next) => {
    try {
        const { body: { username, email, password } } = req;
        if(!username || !email || !password) next(createError(400, 'Missing required fields'));

        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (ex) {
        next(createError(500, 'Could not register user', ex.stack));
    }
}