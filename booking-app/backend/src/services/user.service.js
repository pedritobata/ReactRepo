import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const register = async (data) => {
    const hashed = await bcrypt.hash(data.password, 10);
    data.password = hashed;
    const user = new User(data);

    return await user.save();
}

export const findAll = async () => {
    return User.find({}, 'username email');
}
