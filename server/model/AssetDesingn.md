
=====Mongo

User

```
  Username
  Password
  RealName
  PayPassword
  IdCard
  Email
  Phone
  VerifyStatus //实名状态： -1 未填 0 填了 1 通过
  BankCards: {type: 'array'}
  Lock
  最后登录ip
  最后登录时间
```

UserLog 登录信息
```

```

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


一个用户多个账户
一个账户多个portfolios

UserAccount (Current) 代替 CustomerAccount

```
  UserAccount:{
     UserId
     AccountId
     Portfolios:[pid1,pid2,pid3] 
     Lock
     Profit //资产收益
     TotalProperty 总资产
     CommissionRate 佣金率
     TurnoverRate 换手率
     TotalAsset 持股市值
     AvaiProperty 可用资金 (余额)
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

UserPortfolioHolding 用户在持的资产(Portfolio) 设计1：不展开的设计
```
    {
        _id
        ProductID 
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


UserPortfolioHolding 用户在持的资产(Portfolio) 设计2：展开的设计
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


PortfolioProduct 投资组合产品
```
  - id
  - name string # 组合名称
  - intro string # 组合简介
  - desc string # 组合描述
  - type string # 组合类型 定期-活期
  - assets array # 资产配置
  - state integer # 投资组合状态 0: 未上架 1: 已上架 2:已下架
  - company string # 所属公司
  - created_at integer # 创建时间
  MinBuyPrice 最少购买份额
  MaxBuyPrice 最多购买份额
  Term
  LockDay
```

 AssetStateHistory
```
- id
- user_id ObjectID
- asset_id ObjectID
- from_state Object # 变更前的状态
- to_state Object # 变更后的状态
- operatior string # 操作者 system or 操作者
- created_at integer # 创建时间
```


UserAccountSummary  -- 替代CustomerAccountSummary

```
  UserPortfolioDailySummary:{
    Date:
    UserPortfolioStat - Portfolio
  }
```


UserAssetStateHistory

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
      TadId
    }

  ```


Order

```
  OrderId
  UserId
  AccountId
  UserPortfolioId //foreign key for UserPortfolioHolding
  ProductId //产品ID
  AssetId
  Symbol
  TradeTime
  TradeMoney
  Price
  Quantity
  TradeType //buy sell
  Status # 订单状态 pending: 未支付 paying: 正在支付 paid: 支付成功 refunding: 退款中 refund: 退款成功
  Payment
  Platform

```
OrderStateHistory


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

