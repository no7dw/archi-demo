'use strict'

const Agenda = require('agenda')

const mongoConnectionString = "mongodb://127.0.0.1/agenda";

const agenda = new Agenda({db: {address: mongoConnectionString}});

agenda.on('ready', ()=> {
  agenda.every('40 15 0 * * *', 'input asset new daily data');

  agenda.start();
});

agenda.define('input asset new daily data', (job, done) => {
  const AssetEOD = require('./jobs/AssetEOD')
  run(AssetEOD.InputNewDayData, done)
})

agenda.define('input asset new daily data', (job, done) => {
  DataProvider.getInstance().get({assetID: 'IBM', currentDay }, done);
});