import Hotel from '../models/Hotel.js';

export const create = async (data) => {
    const newHotel = new Hotel(data);
    const savedHotel = await newHotel.save();

    return savedHotel;
};

export const update = async (id, data) => {
    const updatedHotel = await Hotel.findByIdAndUpdate(id, {$set: data}, {new: true});
    console.log('updatedHotel =>', updatedHotel);
    return updatedHotel;
};

export const deleteById = async (id) => {
    const result = await Hotel.findByIdAndDelete(id);

    return result && id;
};

export const getAll = async () => {
    return Hotel.find();
}