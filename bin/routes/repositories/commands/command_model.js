const joi = require('joi');

const create = joi.object({
    email: joi.string().email({tlds: {allow: true}}).required(),
    title: joi.string().required(),
    date : joi.date().required(),
    desc : joi.string().required(),
    type : joi.string().required(),
    emailGuru : joi.string().email({tlds: {allow: true}}).required()     
})

const update = joi.object({
    id : joi.number().required(),
    email : joi.string().email({tlds: {allow: true}}).optional(),
    title: joi.string().optional(),
    date : joi.date().optional(),
    desc : joi.string().optional(),
    type : joi.string().optional(),
    emailGuru : joi.string().email({tlds: {allow: true}}).required()     
});

const find = joi.object({
    id : joi.number().optional(),
    email : joi.string().email({tlds: {allow: true}}).optional(),
    title: joi.string().optional(),
    date : joi.date().optional(),
    desc : joi.string().optional(),
    type : joi.string().optional(),
    emailGuru : joi.string().email({tlds: {allow: true}}).optional()     
})

const remove = joi.object({
    id : joi.number().required(),
})

module.exports = {
    create,
    update,
    find,
    remove
};
