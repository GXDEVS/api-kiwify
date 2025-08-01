/* ---- Imports ---- */

import Joi from "joi";

/* ---- Schemas ---- */

const tokenSchema = Joi.object({
  token: Joi.string().required().min(1),
});

const dateRangeSchema = Joi.object({
  startDate: Joi.date().optional(),
  endDate: Joi.date().optional(),
});

/* ---- Methods ---- */

function validateToken(data) {
  return tokenSchema.validate(data);
}

function validateDateRange(data) {
  return dateRangeSchema.validate(data);
}

export default {
  validateToken,
  validateDateRange,
};
