import Joi from "joi";

const userValidator=Joi.object({
    name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Тільки літери, від 1 до 20 символів.',
        'string.required': 'Поле обов\'язкове'
    }),
    username:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Тільки літери, від 1 до 20 символів.',
        'string.required': 'Поле обов\'язкове'
    }),
    email:Joi.string().regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/).required().messages({
        'string.pattern.base':'Приклад: foo@localhost.com',
        'string.required': 'Поле обов\'язкове'
    }),})

export {userValidator}