'use strict'

exports.InputNewDayData = co.wrap(function * () {
  yield DataProvider.getInstance().get({assetID: 'IBM', currentDay } );
}