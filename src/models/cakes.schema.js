import joi from 'joi';

export const cakeSchema = joi.object({
	name: joi.string().min(2).required(),
	price: joi.number().min(0).required(),
	description: joi.string(),
	image: joi.string().uri(),
	flavourId: joi.number().min(1).required(),
});
