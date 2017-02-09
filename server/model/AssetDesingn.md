


=====Mongo

User

Asset

```
    Asset :{
        Type: {type: 'string'},//stock ,index ,fund
        Name:{type: 'string'},//天健集团
        Symbol:{type: 'string'},//000090
        StyleStatic: {
        Style: [{ //风格
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


UserPortfolioStat(Current)

```
  UserPortfolioStat:{
     UserId 
     PortfolioID
     TotalProperty 总资产
     CommissionRate 佣金
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
      Style:[{name, rate}]
      Concept:[{name, rate}]
      Industry:[{name, rate}]
     }
  }
```

UserPortfolioDailySummary  -- CustomerAccountSummary? -->UserHoldingDaily

```
  UserPortfolioDailySummary:{
    Date:
    UserPortfolioStat
  }
```

UserAssetStat
  ```
    UserAssetStat:{

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


UserAccount

```
  UserId
  AccountId
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

=====
Q?
CustomerAccountSummary? Done
AssetSummary? 用户单个股票的买卖收益统计？ Done --> UserAssetStat
CustomerAccount? UserAccount 标签，收益情况 Done --> UserPortfolioStat

CustomerAccountSummary? UserPortfolioDailySummary Done


cManagerAccountId ?
cCode ?



