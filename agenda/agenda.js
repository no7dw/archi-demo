
'use strict'

const Agenda = require('agenda')

const mongoConnectionString = "mongodb://127.0.0.1/agenda";

const agenda = new Agenda({db: {address: mongoConnectionString}});

function run (job, done) {
  job()
    .then(() => done())
    .catch((e) => {
      logger.error(e)
      done(e)
    })
}

agenda.on('ready', ()=> {
  GetNewDataEOD()
  SellOrder()
  agenda.start()
});

function SellOrder (){
  agenda.every('30 15 0 * * *', 'isell order when Market Close')
}

function GetNewDataEOD (){
  agenda.every('40 15 0 * * *', 'input asset new daily data')
}

agenda.define('input asset new daily data', (job, done) => {
  const AssetEOD = require('./jobs/AssetEOD')
  run(AssetEOD.InputNewDayData, done)
})

agenda.define('sell order when Market Close', (job, done) => {
  const SellOrder = require('./jobs/SellOrderWhenMarketClose')
  run(SellOrder.Sell, done)
})




