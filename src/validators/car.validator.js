import Joi from "joi";

const carValidator=Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
       'string.pattern.base':'Тільки літери, від 1 до 20 символів.',
        'string.required': 'Поле обов\'язкове'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
    'number.min.pattern.base':'Від 0 до 1000000',
    'number.max.pattern.base':'Від 0 до 1000000',
    'string.required': 'Поле обов\'язкове'
}),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min.pattern.base':'Від 1990 року',
        'number.max.pattern.base':'До поточного року',
        'string.required': 'Поле обов\'язкове'
    }),})

export {carValidator}

