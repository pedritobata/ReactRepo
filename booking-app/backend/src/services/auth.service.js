import User from "../models/User.js";
import bcrypt from "bcrypt";

export const login = async (userData) => {
    const {username, password} = userData;
    const user = await User.findOne({username});

    if(!user) return {};

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    return isPasswordCorrect && user;
}