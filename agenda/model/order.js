'use strict'

const mongoose = require('mongoose')
const newKoala = require('../config/db.js').newKoala

const Schema = mongoose.Schema

const schema = new Schema({
  userId: {type: 'string'},
    portfolioId: {type: 'string'},
    symbol: {type: 'integer'},
    tradeTime: {type: 'integer'},
    share: {type: 'integer'},
    unitPrice: {type: 'float'},
    type: {type: 'integer'}, // -1卖出订单(历史订单), -2取消委托买入的订单
    balance: {type: 'boolean'}, // 卖出订单是否已结算
    tradeMoney: {type: 'float'},
    status: {type: 'integer'}
})

// options
schema.set('timestamps', true); // createAt, updatedAt -> UTC
schema.set('minimize', false)
schema.set('collection', 'Order')
schema.set('toObject', {virtuals: true})

module.exports = IRA.model('Order', schema)
