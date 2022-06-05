import { create as createHotel } from "../services/hotel.service.js";

export const create = async (req, res) => {
    const hotelData = req.body;
  try {
    const hotel = await createHotel(hotelData);
    res.status(201).json({hotel});
  } catch (err) {
    res.status(500).json(err);
  }
};
