/*
资产
*/

'use strict'

const mongoose = require('mongoose')
// const plugin = require('../lib/mongoosePlugin')
const Schema = mongoose.Schema


const schema = new Schema({
    symbol:{type: String,unique: true, index: true}, //例如：IBM
    type: {type: String},
    name:{type: String},
    tag:{type: String}
  })

// options

//By default, the name of two fields are createdAt and updatedAt, custom the field name by setting timestamps.createdAt and timestamps.updatedAt.
schema.set('timestamps', true) // createAt, updatedAt -> UTC 
schema.set('minimize', false) // true , by default, "minimize" schemas by removing empty object
// schema.set('collection', 'Asset')
schema.set('toJSON') //, {virtuals: true}

// plugin
// schema.plugin(plugin.crudByAny) //http://mongoosejs.com/docs/plugins.html


module.exports = db.main.model('Asset', schema)