---
sidebar_position: 1
sidebar_label: Real-time market data
custom_edit_url: null
---
# Real-time market data
Онлайн данные по акциям и фьючерсам. Свечи, стаканы котировок и сделки

## Акции

### Candles (свечи) {#candles}

```
https://apim.moex.com/iss/engines/stock/markets/shares/boards/tqbr/securities/sber/candles
```

| Field          | Type          | Description               | Example values      |
|----------------|---------------|---------------------------|---------------------|
| open           | double        | Цена открытия свечки      | 85.54               |
| close          | double        | Цена закрытия свечки      | 85.76               |
| high           | double        | Максимальная цена свечки  | 86.17               |
| low            | double        | Минимальная цена свечки   | 85.54               |
| value          | int64         | Объем в рублях            | 424470125.4         |
| volume         | double        | Объем в лотах             | 4944070             |
| begin          | datetime:19   | Начало свечки             | 2011-12-08 10:00:00 |
| end            | datetime:19   | Конец свечки              | 2011-12-08 10:09:59 |


### Trades (сделки) {#trades}

```
https://apim.moex.com/iss/engines/stock/markets/shares/boards/tqbr/securities/sber/trades
```

| Field          | Type          | Description               | Example values      |
|----------------|---------------|---------------------------|---------------------|
| TRADENO        | int64         | Уникальный номер сделки   | 10107346050         |
| TRADETIME      | time:10       | Время совершения сделки   | 09:59:49            |
| BOARDID        | string:12     | Идентификатор рынка       | TQBR                |
| SECID          | string:36     | Идентификатор ценной бумаги | SBER              |
| PRICE          | double        | Цена сделки               | 307.4               |
| QUANTITY       | int32         | Количество акций          | 2                   |
| VALUE          | double        | Общая стоимость сделки    | 6148                |
| PERIOD         | string:3      | Период                    | S                   |
| TRADETIME_GRP  | int32         | Группа времени сделки     | 959                 |
| SYSTIME        | datetime:19   | Дата и время записи сделки| 2024-04-12 09:59:49|
| BUYSELL        | string:3      | Индикатор покупки/продажи| S                   |
| DECIMALS       | int32         | Десятичные знаки          | 2                   |
| TRADINGSESSION | string:3      | Торговая сессия           | 1                   |


### OrderBook (стакан) {#orderbook}

```
https://apim.moex.com/iss/engines/stock/markets/shares/boards/tqbr/securities/sber/orderbook
```

| Field       | Type       | Description               | Example values    |
|-------------|------------|---------------------------|-------------------|
| BOARDID     | string:12  | Идентификатор рынка       | TQBR              |
| SECID       | string:36  | Идентификатор ценной бумаги | SBER            |
| BUYSELL     | string:3   | Индикатор покупки/продажи| B                 |
| PRICE       | double     | Цена предложения или спроса | 306.93          |
| QUANTITY    | int32      | Количество товара         | 165               |
| SEQNUM      | int64      | Уникальный номер последовательности | 20240412142516 |
| UPDATETIME  | time:10    | Время обновления данных   | 14:25:16          |
| DECIMALS    | int32      | Количество десятичных знаков для округления цены | 2 |


### MarketStatistics {#marketstatistics}

```
https://apim.moex.com/iss/engines/stock/markets/shares/boards/tqbr/securities/sber?iss.only=securities
```
#### Securities {#securities}

| Field                       | Type         | Description                            | Example values       |
|-----------------------------|--------------|----------------------------------------|----------------------|
| SECID                       | string:36    | Идентификатор ценной бумаги            | SBER                 |
| BOARDID                     | string:12    | Идентификатор рынка                    | TQBR                 |
| SHORTNAME                   | string:30    | Краткое название ценной бумаги        | Сбербанк             |
| PREVPRICE                   | double       | Предыдущая цена                        | 306.95               |
| LOTSIZE                     | int32        | Размер лота                            | 10                   |
| FACEVALUE                   | double       | Номинал                               | 3                    |
| STATUS                      | string:3     | Статус                                | A                    |
| BOARDNAME                   | string:381   | Название рынка                         | Т+: Акции и ДР - безадрес. |
| DECIMALS                    | int32        | Десятичные знаки                       | 2                    |
| SECNAME                     | string:90    | Полное название ценной бумаги         | Сбербанк России ПАО ао |
| REMARKS                     | string:24    | Замечания                              | null                 |
| MARKETCODE                  | string:12    | Код рынка                             | FNDT                 |
| INSTRID                     | string:12    | Идентификатор инструмента              | EQIN                 |
| SECTORID                    | string:12    | Идентификатор сектора                  | null                 |
| MINSTEP                     | double       | Минимальный шаг изменения цены        | 0.01                 |
| PREVWAPRICE                 | double       | Предыдущая средневзвешенная цена      | 306.83               |
| FACEUNIT                    | string:12    | Единица номинала                      | SUR                  |
| PREVDATE                    | date:10      | Предыдущая дата                        | 2024-04-11           |
| ISSUESIZE                   | int64        | Объем выпуска                         | 21586948000          |
| ISIN                        | string:36    | ISIN                                   | RU0009029540         |
| LATNAME                     | string:90    | Латинское название ценной бумаги      | Sberbank             |
| REGNUMBER                   | string:90    | Регистрационный номер                  | 10301481B            |
| PREVLEGALCLOSEPRICE         | double       | Предыдущая юридическая закрытая цена   | 307.33               |
| CURRENCYID                  | string:12    | Идентификатор валюты                   | SUR                  |
| SECTYPE                     | string:3     | Тип ценной бумаги                     | 1                    |
| LISTLEVEL                   | int32        | Уровень листинга                       | 1                    |
| SETTLEDATE                  | date:10      | Дата закрытия                          | 2024-04-15           |


#### Marketdata {#marketdata}

```
https://apim.moex.com/iss/engines/stock/markets/shares/boards/tqbr/securities/sber?iss.only=marketdata
```

| Field                     | Type         | Description                                    | Example values       |
|---------------------------|--------------|------------------------------------------------|----------------------|
| SECID                     | string:36    | Идентификатор ценной бумаги                    | SBER                 |
| BOARDID                   | string:12    | Идентификатор рынка                            | TQBR                 |
| BID                       | double       | Цена предложения                               | 306.87               |
| BIDDEPTH                  | int32        | Глубина спроса                                 | null                 |
| OFFER                     | double       | Цена предложения                               | 306.88               |
| OFFERDEPTH                | int32        | Глубина предложений                            | null                 |
| SPREAD                    | double       | Разница между ценами предложения и спроса      | 0.01                 |
| BIDDEPTHT                 | int32        | Глубина спроса в тиках                         | 478147               |
| OFFERDEPTHT               | int32        | Глубина предложений в тиках                   | 516627               |
| OPEN                      | double       | Цена открытия                                  | 307.4                |
| LOW                       | double       | Минимальная цена                               | 306.3                |
| HIGH                      | double       | Максимальная цена                              | 307.87               |
| LAST                      | double       | Последняя цена                                 | 306.88               |
| LASTCHANGE                | double       | Изменение цены                                  | 0.01                 |
| LASTCHANGEPRCNT           | double       | Процентное изменение цены                       | 0                    |
| QTY                       | int32        | Количество                                      | 1                    |
| VALUE                     | double       | Объем                                           | 3068.80              |
| VALUE_USD                 | double       | Объем в USD                                     | 32.74                |
| WAPRICE                   | double       | Взвешенная средняя цена                         | 306.89               |
| LASTCNGTOLASTWAPRICE      | double       | Изменение последней цены к предыдущей взвешенной средней | 0.05          |
| WAPTOPREVWAPRICEPRCNT     | double       | Процентное изменение взвешенной средней цены к предыдущей | 0.02               |
| WAPTOPREVWAPRICE          | double       | Отношение взвешенной средней цены к предыдущей | 0.06                  |
| CLOSEPRICE                | double       | Цена закрытия                                   | null                 |
| MARKETPRICETODAY          | double       | Рыночная цена на сегодня                        | null                 |
| MARKETPRICE               | double       | Рыночная цена                                   | 306.83               |
| LASTTOPREVPRICE           | double       | Изменение последней цены от предыдущей          | -0.02                |
| NUMTRADES                 | int32        | Количество сделок                               | 29029                |
| VOLTODAY                  | int64        | Объем сделок на сегодня                         | 6824520              |
| VALTODAY                  | int64        | Объем сделок на сегодня в валюте рынка         | 2094371060           |
| VALTODAY_USD              | int64        | Объем сделок на сегодня в USD                   | 22347204             |
| ETFSETTLEPRICE            | double       | Цена закрытия ETF                               | null                 |
| TRADINGSTATUS             | string:3     | Текущий статус торгов                           | T                    |
| UPDATETIME                | time:10      | Время обновления данных                         | 14:35:18             |
| LASTBID                   | int32        | Последняя цена предложения                      | null                 |
| LASTOFFER                 | int32        | Последняя цена спроса                           | null                 |
| LCLOSEPRICE               | double       | Предыдущая цена закрытия                        | 306.97               |
| LCURRENTPRICE             | double       | Текущая цена                                    | null                 |
| MARKETPRICE2              | double       | Вторичная рыночная цена                         | null                 |
| NUMBIDS                   | int32        | Количество предложений на покупку              | null                 |
| NUMOFFERS                 | int32        | Количество предложений на продажу              | null                 |
| CHANGE                    | double       | Изменение                                       | -0.07                |
| TIME                      | time:10      | Время                                           | 14:35:18             |
| HIGHBID                   | int32        | Максимальная цена предложения                   | null                 |
| LOWOFFER                  | int32        | Минимальная цена спроса                         | null                 |
| PRICEMINUSPREVWAPRICE     | double       | Цена минус предыдущая средневзвешенная цена    | 0.05                 |
| OPENPERIODPRICE           | double       | Цена открытия за период                        | 307.4                |
| SEQNUM                    | int64        | Уникальный номер последовательности             | 20240412145018       |
| SYSTIME                   | datetime:19 | Время системы                                   | 2024-04-12 14:50:18 |
| CLOSINGAUCTIONPRICE       | double       | Цена закрытия аукциона                          | null                 |
| CLOSINGAUCTIONVOLUME      | double       | Объем закрытия аукциона                         | null                 |
| ISSUECAPITALIZATION       | double       | Капитализация                                   | 6627624774960        |
| ISSUECAPITALIZATION_UPDATETIME | time:10 | Время обновления капитализации                | 14:49:59             |
| ETFSETTLECURRENCY         | string:18    | Валюта закрытия ETF                             | null                 |
| VALTODAY_RUR              | int64        | Объем сделок на сегодня в RUR                  | 2094371060           |
| TRADINGSESSION            | string:3     | Торговая сессия                                 | 1                    |
| TRENDISSUECAPITALIZATION  | double       | Тренд капитализации                             | 1511086360           |


## Фьючерсы

### Candles (свечи) {#candles-1}

```
https://apim.moex.com/iss/engines/futures/markets/forts/boards/rfud/securities/mmm4/candles
```

| Field | Type | Description | Example values |
|--|--|--|--|
| open | double | Цена открытия свечки | 3403.4 |
| close | double | Цена закрытия свечки | 3398.95 |
| high | double | Максимальная цена свечки | 3403.4 |
| low | double | Минимальная цена свечки | 3398.95 |
| value | int64 | Объем в рублях | 0 |
| volume | double | Объем в лотах | 2 |
| begin | datetime:19 | Начало свечки | 2022-01-26 23:20:00 |
| end | datetime:19 | Конец свечки | 2022-01-26 23:27:01 |

### Trades (сделки) {#trades-1}

```
https://apim.moex.com/iss/engines/futures/markets/forts/boards/rfud/securities/mmm4/trades
```

| Field | Type | Description | Example values |
|--|--|--|--|
| TRADENO | int64 | Уникальный идентификатор сделки. | 20018802310101010 |
| BOARDNAME | string:12 | Название рынка, на котором была совершена сделка. | RFUD |
| SECID | string:36 | Идентификатор ценной бумаги | MMM4 |
| TRADEDATE | date:10 | Дата совершения сделки. | 2024-04-11 |
| TRADETIME | time:10 | Время совершения сделки. | 19:05:01 |
| PRICE | double | Цена сделки. | 1234.56 |
| QUANTITY | int32 | Количество товара, проданного или купленного в сделке. | 2 |
| SYSTIME | datetime:19 | Дата и время записи сделки в систему. | 2024-04-11 19:05:02 |
| RECNO | int64 | Уникальный номер записи. | 257357101010 |
| OPENPOSITION | int64 | Открытая позиция. | 76868 |
| OFFMARKETDEAL | int32 | Оффмаркетная сделка. | 0 |
| BUYSELL | string:3 | Индикатор покупки или продажи. | B or S |

### OrderBook (стакан) {#orderbook-1}

```
https://apim.moex.com/iss/engines/futures/markets/forts/boards/rfud/securities/mmm4/orderbook
```

| Field | Type | Description | Example values |
|--|--|--|--|
| BOARDID | string:12 | Идентификатор рынка. | RFUD |
| SECID | string:12 | Идентификатор ценной бумаги. | MMM4 |
| BUYSELL | string:3 | Индикатор покупки (B) или продажи (S). | B or S|
| PRICE | double | Цена предложения или спроса. | 1234.56 |
| QUANTITY | int64 | Количество товара, предлагаемого или запрошенного. | 2 |
| SEQNUM | int64 | Уникальный номер последовательности. | 20240412110944 |
| UPDATETIME | time:10 | Время обновления информации. | 11:00:00 |
| DECIMALS | int64 | Количество десятичных знаков для округления цены. | 2 |

### MarketStatistics {#marketstatistics-1}

```
https://apim.moex.com/iss/engines/futures/markets/forts/boards/rfud/securities/mmm4?iss.only=securities
```

#### Securities {#securities-1}

| Field | Type | Description | Example values | 
|--|--|--|--|
| SECID | string:36 | Идентификатор ценной бумаги. | MMM4 |
| BOARDID | string:12 | Идентификатор рынка. | RFUD |
| SHORTNAME | string:75 | Краткое название ценной бумаги. | MXI-6.24 |
| SECNAME | string:225 | Полное название ценной бумаги. | Фьючерсный контракт MXI-6.24 |
| PREVSETTLEPRICE | double | Предыдущая цена закрытия. | 3462.65 |
| DECIMALS | int | Количество десятичных знаков. | 2 |
| MINSTEP | double | Минимальный шаг изменения цены. | 0.05000 |
| LASTTRADEDATE | date:10 | Дата последней сделки. | 2024-06-20 |
| LASTDELDATE | date:10 | Дата последнего исполнения. | 2024-06-20 |
| SECTYPE | string:6 | Тип ценной бумаги. | MM |
| LATNAME | string:90 | Латинское название ценной бумаги. | MXI-6.24 |
| ASSETCODE | string:75 | Код актива. | MXI |
| PREVOPENPOSITION | int64 | Предыдущая открытая позиция. | 76868 |
| LOTVOLUME | int32 | Объем лота. | 1 |
| INITIALMARGIN | double | Начальная маржа. | 5804.59 |
| HIGHLIMIT | double | Верхний предел цены. | 3748.70000 |
| LOWLIMIT | double | Нижний предел цены. | 3176.60000 |
| STEPPRICE | double | Цена шага. | 0.50000 |
| LASTSETTLPRICE | double | Последняя цена закрытия. | 3462.2 |
| PREVPRICE | double | Предыдущая цена. | 3462.2 |
| IMTIME | datetime:19 | Время обновления начальной маржи. | 2024-04-11 18:58:42 |
| BUYSELLFEE | double | Комиссия за покупку/продажу. | 2.28 |
| SCALPERFEE | double | Комиссия за скальпирование. | 1.14 |
| NEGOTIATEDFEE | double | Комиссия за договоренность. | 0.76 |
| EXERCISEFEE | double | Комиссия за исполнение. | 0.76 |


#### Marketdata {#marketdata-1}

```
https://apim.moex.com/iss/engines/futures/markets/forts/boards/rfud/securities/mmm4?iss.only=marketdata
```

| Field | Type | Description | Example values | 
|--|--|--|--|
| SECID | string:36 | Идентификатор ценной бумаги. | MMM4|
| BOARDID |string:12 | Идентификатор рынка. | RFUD |
| BID | double | Цена предложения (покупки). | 3464.75|
| OFFER |double | Цена предложения (продажи). | 3465.3|
| SPREAD |double | Разница между ценами предложения и спроса. | 0.55|
| OPEN |double | Цена открытия. | 3462.65|
| HIGH |double | Максимальная цена за период. | 3472.55|
| LOW |double | Минимальная цена за период. | 3461.5|
| LAST |double | Последняя цена. | 3465.55 |
| QUANTITY | int32 | Количество товара. | 2 |
| LASTCHANGE | double | Изменение цены. | 0.3 |
| SETTLEPRICE | double | Цена закрытия. | 3464.9 |
| SETTLETOPREVSETTLE | double | Разница между ценой закрытия и предыдущей ценой закрытия. | 2.25 |
| OPENPOSITION | double | Открытая позиция. | 76230 |
| NUMTRADES | int32 | Количество сделок. | 5159 |
| VOLTODAY | int64 | Объем сделок. | 15966 |
| VALTODAY | int64 | Объем сделок в валюте рынка. | 553262996 |
| VALTODAY_USD | int64 | Объем сделок в долларах США. | 5935037 |
| UPDATETIME | time:10  | Время обновления данных. | 11:51:23 |
| LASTCHANGEPRCNT | double | Процентное изменение цены. | 0.01 |
| BIDDEPTH | int32 | Глубина спроса. | 1 |
| BIDDEPTHT | int32 | Глубина спроса в тиках. | 5329 |
| NUMBIDS | int32 | Количество предложений на покупку. | 709 |
| OFFERDEPTH | int32 | Глубина предложений. | 14 |
| OFFERDEPTHT | int32 | Глубина предложений в тиках. | 2879 |
| NUMOFFERS | int32 | Количество предложений на продажу. | 425 |
| TIME | time:10 | Время. | 11:51:02 |
| SETTLETOPREVSETTLEPRC | double | Процентное изменение цены закрытия. | 0.06 |
| SEQNUM | int64 | Уникальный номер последовательности. | 20240412115124 |
| SYSTIME | datetime:19 | Время системы. | 2024-04-12 11:51:24 |
| TRADEDATE | date:10 | Дата сделки. | 2024-04-12 11:51:24 |
| LASTTOPREVPRICE | double | Процентное изменение последней цены от предыдущей цены. | 0.1 |
| OICHANGE | int64 | Изменение открытых позиций. | -638 |
| OPENPERIODPRICE | double | Цена открытия за период. | 3462.75000 |
| SWAPRATE | double | Ставка свопа. | 0.00000 |
