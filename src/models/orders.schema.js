import joi from 'joi';

export const orderSchema = joi.object({
	clientId: joi.number().required(),
	cakeId: joi.number().required(),
	quantity: joi.number().min(1).max(4).required(),
	totalPrice: joi.required(),
});

export const idSchema = joi.object({
	id: joi.number().required(),
});
