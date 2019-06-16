const Joi = require('@hapi/joi');

export const fieldSchema = Joi.object().keys({
	label: Joi.string().min(1),
	type: Joi.string().min(1),
	name: Joi.string().min(1),
});

export const buttonSchema = Joi.object().keys({
	title: Joi.string().min(1),
});

export const form_schema = Joi.object().keys({
	form_items: Joi.array().items(fieldSchema),
	form_title: Joi.string().min(1),
	form_buttons: Joi.array().items(buttonSchema),
});
