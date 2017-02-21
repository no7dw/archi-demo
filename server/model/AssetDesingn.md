
=====Mongo

User

Asset (单个资产的信息)

```
    Asset :{
        Type: {type: 'string'},//stock ,index ,fund
        Name:{type: 'string'},//天健集团
        Symbol:{type: 'string'},//000090
        Style: {
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

AssetDaily(AssetHistory) (单个资产的每日信息)

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
    Profit //单个资产收益
    Income: {
      ERate: //绝对收益率
      RRate: //相对收益率
    }
  }
```


一个用户有多个账户
UserAccountVirtual(虚拟)账户

一个用户多个账户，一个账户多个portfolios

UserAccount (Current) 代替 CustomerAccount

```
  UserAccount:{
     UserId
     AccountId
     Portfolios:[pid1,pid2,pid3] 
     Profit //资产收益
     TotalProperty 总资产
     CommissionRate 佣金率
     TurnoverRate 换手率
     TotalAsset 持股市值
     AvaiProperty 可用资金
     AssetProportion 仓位(在持)
     Income: {
      ERate: //绝对收益率
      RRate: //相对收益率
    }
     Style: {
      InvestStyle:[{name, rate}]
      Concept:[{name, rate}]
      Industry:[{name, rate}]
     }
  }
```

UserAssetHolding 用户在持的资产(Portfolio) 设计1：不展开的设计
```
    {
        PortfolioID //即_id
        UserId
        AccountId
        PortfolioName
        PortfolioDetail: [{
            AssetId,
            AssetType //区分产品类别,非标 标准化产品
            PurchaseValue
            Quantity
            RateYear
            StartTime
            EndTime
        }]
    }
```


UserAssetHolding 用户在持的资产(Portfolio) 设计2：展开的设计
```
    {
        PortfolioID //即_id
        UserId
        AccountId
        AssetId,
        AssetType //区分产品类别,非标 标准化产品
        PurchaseValue
        Quantity
        RateYear
        StartTime
        EndTime
        
    }
```


UserAccountSummary  -- 替代CustomerAccountSummary

```
  UserPortfolioDailySummary:{
    Date:
    UserPortfolioStat - Portfolio
  }
```

UserAssetSummary
  ```
    UserAssetStat:{
      Date
      UserAssetStat

    }

  ```

UserTag

  ```
    UserTag:{
      UserID
      Date
      TagName
    }

  ```


Order

```
  OrderId
  UserId
  AccountId
  AssetId
  PortfolioId
  Symbol
  TradeTime
  TradeMoney
  Price
  Quantity
  TradeType //buy sell
  Status

```


//TBD
Cashflow

```

```

====MySQL Version

UserAssetHolding

 ```
   UserId
   AccountId
   Name
   AssetType
   AssetID
   PurchaseValue
   Quantity
   RateYear
   StartTime
   EndTime
 ```


UserAccount 用户账户 <-- UserPortfolioStat

 ```
   UserId
   AccountId
   AvaiProperty 可用资金
 ```


Order  -- the same as Mongo version

