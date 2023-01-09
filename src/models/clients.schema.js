import joi from 'joi';

export const clientSchema = joi.object({
	name: joi.string().min(1).required(),
	address: joi.string().min(1).required(),
	phone: joi.string().min(10).required(),
});
