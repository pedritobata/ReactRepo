import Hotel from '../models/Hotel.js';

export const create = async (data) => {
    const newHotel = new Hotel(data);

    const savedHotel = await newHotel.save();
    return savedHotel;
};