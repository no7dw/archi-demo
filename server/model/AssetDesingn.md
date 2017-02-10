


=====Mongo

User

Asset

```
    Asset :{
        Type: {type: 'string'},//stock ,index ,fund
        Name:{type: 'string'},//天健集团
        Symbol:{type: 'string'},//000090
        StyleStatic: {
        InvestStyle: [{ //风格
          name: // "小盘股",
          code: //"813"
        }],
        Industry: [{ //风格
          name: // "房地产",
          code: //813
        }]
        Concept: [{
        name:  //"前海概念"
        code  //5
        }]
        }
        //isInPool: {'type':'integer'} //荐股专用
    }
```

AssetDaily(AssetHistory)

```
  AssetDaily: {
    Name:{type: 'string'},//天健集团
    Symbol:{type: 'string'},//000090
    Open:{type: 'float'},
    Close
    High
    Low
    Buy
    Sell 
    Volume //交易量
    Date
  }
```


UserAssetStat(Current)

```
  UserAssetStat:{
    UserId,
    Symbol,
    Name,
    FirstBuyDate
    BuyQuantity
    AvgBuyPrice   
    FirstSellDate
    AvgSellPrice    
    SellQuantity
    Income: {
      ERate: //绝对收益率
      RRate: //相对收益率
      Profit //单个资产收益     
    }
  }
```


UserPortfolioStat(Current) 代替 CustomerAccount

```
  UserPortfolioStat:{
     UserId 
     PortfolioID
     TotalProperty 总资产
     CommissionRate 佣金率
     TurnoverRate 换手率
     TotalAsset 持股市值
     AvaiProperty 可用资金
     AssetProportion 仓位(在持)
     Income: {
      ERate: //绝对收益率
      RRate: //相对收益率
      Profit //单个资产收益     
    }
     StyleStatic: {
      InvestStyle:[{name, rate}]
      Concept:[{name, rate}]
      Industry:[{name, rate}]
     }
  }
```

UserPortfolioDailySummary  -- 替代CustomerAccountSummary  -->UserHoldingDaily

```
  UserPortfolioDailySummary:{
    Date:
    UserPortfolioStat
  }
```

UserAssetSummary
  ```
    UserAssetStat:{
      Date
      UserAssetStat

    }

  ```

UserTagging

====MySQL

Portfolio

```
  UserId
  AccountId
  PortfolioId
  AssetID
  Quantity
```


UserAccount <--- UserPortfolioStat

```
  UserId
  AccountId
  AvaiProperty
```

Order

```
  UserId
  AssetId
  portfolioId
  Symbol
  TradeTime
  TradeMoney
  Price
  Quantity
  TradeType //buy sell
  Status

```


