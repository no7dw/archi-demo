'use strict'

const joi = require('../lib/joi')
const validate = joi.validate
const Joi = joi.Joi

exports.status = function * (next){
    const schema = {
        //_id: Joi.string().length(24)
        uid: Joi.string().length(24).required()
    }
    // console.log('0')
    yield validate(this.request.body, schema, {allowUnkown: true})
    yield next
}

