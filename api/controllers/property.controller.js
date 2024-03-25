import Property from "../models/property.model.js";
import { errorHandler } from "../utils/error.js";

export const createProperty = async (req, res, next) => {
  try {
    const property = await Property.create(req.body);
    return res.status(201).json(property);
  } catch (error) {
    next(error);
  }
};

export const deleteProperty = async (req, res, next) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    return next(errorHandler(404, "property not found!"));
  }

  if (req.user.id !== property.userRef) {
    return next(errorHandler(401, "You can only delete your own properties!"));
  }

  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Property has been deleted!");
  } catch (error) {
    next(error);
  }
};
