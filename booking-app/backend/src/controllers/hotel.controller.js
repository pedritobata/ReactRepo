import { create as createHotel, update as updateHotel, deleteById as deleteByIdHotel, getAll } from "../services/hotel.service.js";
import {createError} from "../utils/error.js";

export const create = async (req, res, next) => {
    const hotelData = req.body;
    const hotel = await createHotel(hotelData);
    try {
        res.status(201).json(hotel);
    } catch (err) {
        next(createError(500, 'Could not create hotel', err.stack));
    }
};

export const update = async (req, res, next) => {
   const { query: {id}, body } = req;
   try {
       const updated = await updateHotel(id, body);
       res.status(200).json(updated);
   } catch (ex) {
       next(createError(500, 'Could not update hotel', err.stack));
   }
};

export const deleteById = async (req, res, next) => {
    const {query: {id}} = req;
    let deletedId;
    try {
        deletedId = await deleteByIdHotel(id);
        if(!deletedId) throw new Error();

        res.status(200).json({message: `Deleted hotel with id ${deletedId}`});
    } catch (ex) {
        const err = deletedId !== null ? createError(500, `Could not delete hotel with id ${id}`) :
            createError(404, `Could not find hotel with id ${id}`);
        err.stack = ex.stack;
        next(err);
    }
};

export const findAll = async (req, res, next) => {
    try {
        const hotels = await getAll();
        res.status(200).json(hotels);
    } catch (ex) {
        next(createError(500, 'Could not find hotels list', ex.stack));
    }
}


