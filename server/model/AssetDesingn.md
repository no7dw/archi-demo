


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

UserAccount (Current) 代替 CustomerAccount

```
  UserAccount:{
     UserId
     AccountId
     PortfolioID
     Profit //资产收益
     TotalProperty 总资产
     CommissionRate 佣金率
     TurnoverRate 换手率
     TotalAsset 持股市值
     AvaiProperty 可用资金
     AssetProportion 仓位(在持)
     PortfolioName
     Portfolio : [{
      AssetId
      Num //股数
     }]
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

UserPortfolioHolding 用户在持的资产统计
```
    {
        UserId
        UserAccountId
        PortfolioDetail: [{
            AssetId,
            PurchaseValue
            Quantity
        }]
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
====MySQL Version

 Portfolio

 ```
   UserId
   AccountId
   PortfolioId
   Name
   AssetID
   Quantity
 ```


 UserAccount < UserPortfolioStat

 ```
   UserId
   AccountId
   AvaiProperty 可用资金
 ```


Order

```
  OrderId
  UserId
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

