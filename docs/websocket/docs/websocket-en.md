---
title: Описание документации WebSocket
sidebar_label: Справочник (en)
sidebar_position: 2
---

# MOEX Websocket Streams Reference

This document provides a comprehensive reference for available websocket streams from the MOEX ISS+ real-time data distribution system. The streams provide market data, order books, candlestick data, and various financial instruments information.

## Markets and Streams Overview

The following markets are available through websockets:

- **MONEY**: Money market instruments
- **MXCX**: Moscow Exchange Currency Exchange
- **SRATES**: Swap rates
- **SEARCH**: Security search and reference data
- **INDICES**: Stock indices
- **CBRF**: Central Bank of Russia rates
- **FIXING**: Currency fixings
- **OPTIONS**: Options market
- **FORTS**: FORTS derivatives market
- **COMMON**: Common reference data (news, turnovers, boards, engines, markets)
- **MXSE**: Moscow Exchange Securities
- **MXSEBB**: Moscow Exchange Securities (bond board)

Each market contains enums (enumerated values) and streams with parameters and output fields.

## MONEY Market

### Enums

#### Language
- `en`: English
- `ru`: Russian

#### TSecStatus (Security status)
- `A`: Operations are allowed
- `S`: Operations are suspended
- `N`: Blocked for trading, settlement is allowed

#### TSecType (Security type)
- `1`: Ordinary stocks
- `2`: Preferred stocks
- `3`: Government security
- `4`: Regional security
- `5`: Central bank's security
- `6`: Corporate bonds
- `7`: Bonds of international financial organizations
- `8`: On-exchange bonds
- `9`: Open mutual funds
- `A`: Interval mutual funds
- `B`: Closed mutual funds
- `C`: Municipal securities

#### TTradingStatus (Security trading status)
- `N`: Not traded at the moment
- `O`: Opening period
- `C`: Trading is closed
- `F`: Closing period
- `B`: Break
- `T`: Trading session

### Streams

#### securities (General market data)
**Access:** general

**Parameters:**
- `TICKER` (string): Ticker
- `LANGUAGE` (enum Language, optional): Language

**Output Fields:**
- `TICKER` (string, primary): Ticker
- `CAPTION` (string): Security
- `STATUS` (enum TSecStatus): Status
- `TRADINGSTATUS` (enum TTradingStatus): Trading status
- `MARKETCODE` (string): Market
- `LOTSIZE` (integer): Lot size
- `MINSTEP` (fixed): Minimum price step
- `FACEVALUE` (fixed): Face value
- `FACEUNIT` (string): Face value currency
- `PREVPRICE` (fixed): Last closing price
- `ISSUESIZE` (integer): Issued volume
- `PREVWAPRICE` (fixed): Previous WA price
- `CURRENCYID` (string): Related currency ID
- `REGNUMBER` (string): Registration number
- `SECTYPE` (enum TSecType): Type of security
- `BID` (fixed): Bid
- `BIDDEPTHT` (integer): Total bid depth
- `NUMBIDS` (integer): Buy orders
- `OFFER` (fixed): Offer
- `OFFERDEPTHT` (integer): Total offer depth
- `HIGH` (fixed): Maximum
- `LOW` (fixed): Minimum
- `LAST` (fixed): Last
- `CHANGE` (fixed): Last to Closing change
- `QTY` (integer): Lots in the last
- `TIME` (time): Time of the last
- `VOLTODAY` (integer): Today volume
- `VALTODAY` (integer): Today value
- `VALUE` (fixed): Value of the last
- `WAPRICE` (fixed): WA
- `HIGHBID` (fixed): Best bid
- `LOWOFFER` (fixed): Best offer
- `NUMTRADES` (integer): Trades today
- `PRICEMINUSPREVWAPRICE` (fixed): Last price to previous WA price
- `BASEPRICE` (fixed): Base price
- `MARKETPRICE` (fixed): Last day market price
- `REMARKS` (string): Remarks
- `SETTLECODE` (string): Settlement code
- `SETTLEDATE1` (date): Settlement date 1
- `SETTLEDATE2` (date): Settlement date 2

**Useful fields:** LAST, BID, OFFER, VOLTODAY, VALTODAY, CHANGE for real-time trading data.

## MXCX Market (Currency Exchange)

### Enums

#### Language
- `en`: English
- `ru`: Russian

#### TBuySell (Order direction)
- `B`: Buy
- `S`: Sell

#### TDPValIndicator (Order availability flag)
- ` `: No orders
- `Y`: There are orders

#### TSecStatus (Security status)
- `A`: Operations allowed
- `S`: Operations suspended
- `N`: Suspended for trading, settlement allowed

#### TTradingStatus (Security trading status)
- `N`: Not traded right now
- `O`: Opening period
- `C`: Trading is closed
- `F`: Closing period
- `B`: Break
- `T`: Trading session
- `I`: Discrete auction
- `S`: Opening Auction
- `A`: Auction: Order entry phase
- `a`: Auction: Trade conclusion phase
- `b`: Auction: Bookbuilding phase, orders locked
- `p`: Auction: After auction trade phase

#### intervals (Candle interval)
- `M1`: 1 minute
- `M10`: 10 minutes
- `H1`: 1 hour
- `D1`: 1 day
- `W1`: 1 week
- `m1`: 1 month
- `m3`: 1 quarter
- `Q1`: 1 quarter

### Streams

#### candles (Candles)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `interval` (enum intervals, optional): Interval
- `quantity` (integer, optional): Candles quantity
- `till` (datetime, optional): Datetime till

**Output Fields:**
- `FROM` (datetime, primary): From
- `TILL` (datetime): Till
- `OPEN` (fixed): Open
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `CLOSE` (fixed): Close
- `VALUE` (fixed): Value
- `VOLUME` (integer): Volume, units

**Useful fields:** All fields for OHLCV candlestick data.

#### orderbooks (Aggregate orderbook)
**Access:** general

**Parameters:**
- `TICKER` (string): Ticker

**Output Fields:**
- `BUYSELL` (enum TBuySell): Direction
- `PRICE` (fixed): Rate
- `QUANTITY` (integer): Lots

**Useful fields:** PRICE, QUANTITY, BUYSELL for order book levels.

#### securities (General market data)
**Access:** general

**Parameters:**
- `TICKER` (string): Ticker
- `LANGUAGE` (enum Language, optional): Language

**Output Fields:**
- `TICKER` (string, primary): Ticker
- `CAPTION` (string): Security
- `LAST` (fixed): Last
- `CHANGE` (fixed): Last to Closing change
- `BIDDEPTHT` (integer): Total bid depth
- `OFFERDEPTHT` (integer): Total offer depth
- `BID` (fixed): Bid
- `OFFER` (fixed): Offer
- `HIGHBID` (fixed): Best bid
- `LOWOFFER` (fixed): Best offer
- `HIGH` (fixed): Maximum
- `LOW` (fixed): Minimum
- `PREVPRICE` (fixed): Last Close Price
- `MARKETPRICE` (fixed): FX fixing Prev
- `QTY` (integer): Lots in the last
- `VOLTODAY` (fixed): Today volume
- `VALTODAY` (integer): Today value
- `NUMTRADES` (integer): Trades today
- `WAPRICE` (fixed): WA
- `PREVWAPRICE` (fixed): Previous WA price
- `VALUE` (fixed): Value of the last
- `TRADINGSTATUS` (enum TTradingStatus): Trading status
- `STATUS` (enum TSecStatus): Status
- `LOTSIZE` (integer): Lot size
- `FACEUNIT` (string): Currency of instrument
- `BASEPRICE` (fixed): Base price
- `SETTLECODE` (string): Settlement code
- `SETTLEDATE1` (date): Settlement date 1
- `SETTLEDATE2` (date): Settlement date 2
- `MARKETCODE` (string): Market
- `CURRENCYID` (string): Settlement currency
- `TIME` (time): Time of the last
- `DPVALINDICATORBUY` (enum TDPValIndicator): Bid flag (WAP)
- `DPVALINDICATORSELL` (enum TDPValIndicator): Sell flag (WAP)
- `MINSTEP` (fixed): Order's minimum price step
- `FACEVALUE` (fixed): Face value
- `PRICEMINSTEP` (fixed): Minimum price step
- `LOTDIVIDER` (integer): Lot divider
- `CLOSEPRICE` (fixed): Special period WAP
- `LOPENPRICE` (fixed): Current special period WAP

**Useful fields:** LAST, BID, OFFER, CHANGE, VOLTODAY, VALTODAY for trading data.

## SRATES Market (Swap Rates)

### Enums

#### TTradingStatus (Security trading status)
- `N`: Not traded at the moment
- `O`: Opening period
- `C`: Trading is closed
- `F`: Closing period
- `B`: Break
- `T`: Trading session

#### intervals (Candle interval)
- `M1`: 1 minute
- `M10`: 10 minutes
- `H1`: 1 hour
- `D1`: 1 day
- `W1`: 1 week
- `m1`: 1 month
- `m3`: 1 quarter
- `Q1`: 1 quarter

### Streams

#### candles (Candles)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `interval` (enum intervals, optional): Interval
- `quantity` (integer, optional): Candles quantity
- `till` (datetime, optional): Datetime till

**Output Fields:**
- `FROM` (datetime, primary): From
- `TILL` (datetime): Till
- `OPEN` (fixed): Open
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `CLOSE` (fixed): Close
- `VALUE` (fixed): Value
- `VOLUME` (integer): Volume, units

**Useful fields:** OHLCV data for swap rates.

#### securities (Indicative rate for swaps)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker

**Output Fields:**
- `TICKER` (string, primary): Swap
- `CAPTION` (string): Name
- `LAST` (fixed): Current Value
- `PREVPRICE` (fixed): Previous Close
- `CHANGE` (fixed): Change
- `TRADEDATE` (date): Date
- `TRADINGSTATUS` (enum TTradingStatus): Status

**Useful fields:** LAST, CHANGE for current swap rates.

## SEARCH Market

### Queries

#### ticker (ticker)
**Access:** general

**Parameters:**
- `pattern` (string, optional): pattern
- `ticker` (string, optional): ticker
- `preset` (string, optional): preset

**Output Fields:**
- `ticker` (string): ticker
- `secid` (string): secid
- `boardid` (string): boardid
- `board_name` (string): board_name
- `marketplace` (string): marketplace
- `shortname` (string): shortname
- `latname` (string): latname
- `name` (string): name
- `isin` (string): isin
- `regnumber` (string): regnumber
- `primary_boardid` (string): primary_boardid
- `emitent_id` (integer): emitent_id
- `emitent_title` (string): emitent_title
- `emitent_inn` (string): emitent_inn
- `emitent_okpo` (string): emitent_okpo

**Useful fields:** ticker, shortname, isin for security identification.

## INDICES Market

### Enums

#### TTradingStatus (Security trading status)
- `N`: Not traded at the moment
- `O`: Opening period
- `C`: Trading is closed
- `F`: Closing period
- `B`: Break
- `T`: Trading session

#### intervals (Candle interval)
- `M1`: 1 minute
- `M10`: 10 minutes
- `H1`: 1 hour
- `D1`: 1 day
- `W1`: 1 week
- `m1`: 1 month
- `m3`: 1 quarter
- `Q1`: 1 quarter

#### languages (Language)
- `en`: English
- `ru`: Russian

### Streams

#### candles (Candles)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `interval` (enum intervals, optional): Interval
- `quantity` (integer, optional): Candles quantity
- `till` (datetime, optional): Datetime till

**Output Fields:**
- `FROM` (datetime, primary): From
- `TILL` (datetime): Till
- `OPEN` (fixed): Open
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `CLOSE` (fixed): Close
- `VALUE` (fixed): Value
- `VOLUME` (integer): Volume, units

**Useful fields:** OHLCV for indices.

#### securities (Indices)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `language` (enum languages, optional): Language

**Output Fields:**
- `TICKER` (string, primary): Ticker
- `CAPTION` (string): Name
- `BIDDEPTHT` (integer): Total bid depth
- `OFFERDEPTHT` (integer): Total offer depth
- `LAST` (fixed): Current Value
- `CHANGE` (fixed): On previous day, points
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `PREVPRICE` (fixed): Index Last Value of Previous Trading Day
- `OPENVALUE` (fixed): Opening of Current Trading Day, points
- `LASTCHANGETOOPENPRC` (fixed): Change at current trading day opening, %
- `LASTCHANGETOOPEN` (fixed): Change at current trading day opening, points
- `MONTHCHANGEPRC` (fixed): Change since beginning of calendar month, %
- `YEARCHANGEPRC` (fixed): Change since beginning of calendar year, %
- `MONTHCHANGEBP` (fixed): Change since beginning of month
- `YEARCHANGEBP` (fixed): Change since beginning of year
- `CAPITALIZATION` (integer): Index securities capitalization, RUB
- `VALTODAY` (integer): Value today, RUR
- `VALTODAY_USD` (integer): Value today, USD
- `CAPITALIZATION_USD` (integer): Index securities capitalization, USD
- `TRADEDATE` (date): Trade date
- `TIME` (time): Time
- `TRADINGSTATUS` (enum TTradingStatus): Status

**Useful fields:** LAST, CHANGE, LASTCHANGETOOPENPRC for index values and performance.

## CBRF Market (CB RF rates)

### Enums

#### TTradingStatus (Security trading status)
- `N`: Not traded at the moment
- `O`: Opening period
- `C`: Trading is closed
- `F`: Closing period
- `B`: Break
- `T`: Trading session

#### intervals (Candle interval)
- `M1`: 1 minute
- `M10`: 10 minutes
- `H1`: 1 hour
- `D1`: 1 day
- `W1`: 1 week
- `m1`: 1 month
- `m3`: 1 quarter
- `Q1`: 1 quarter

#### languages (Language)
- `en`: English
- `ru`: Russian

### Streams

#### candles (Candles)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `interval` (enum intervals, optional): Interval
- `quantity` (integer, optional): Candles quantity
- `till` (datetime, optional): Datetime till

**Output Fields:**
- `FROM` (datetime, primary): From
- `TILL` (datetime): Till
- `OPEN` (fixed): Open
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `CLOSE` (fixed): Close
- `VALUE` (fixed): Value
- `VOLUME` (integer): Volume, units

**Useful fields:** OHLCV for CB rates.

#### securities (CB RF rates)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `language` (enum languages, optional): Language

**Output Fields:**
- `TICKER` (string, primary): Currency code
- `CAPTION` (string): Currency code
- `LAST` (fixed): Current Value
- `PREVPRICE` (fixed): Previous Close
- `CHANGE` (fixed): Change
- `NOMINAL` (integer): Nominal
- `BIDDEPTHT` (integer): Total bid depth
- `OFFERDEPTHT` (integer): Total offer depth
- `TRADEDATE` (date): Date
- `TRADINGSTATUS` (enum TTradingStatus): Status

**Useful fields:** LAST, CHANGE for CB rates.

## FIXING Market

### Enums

#### TTradingStatus (Security trading status)
- `N`: Not traded at the moment
- `O`: Opening period
- `C`: Trading is closed
- `F`: Closing period
- `B`: Break
- `T`: Trading session

#### intervals (Candle interval)
- `M1`: 1 minute
- `M10`: 10 minutes
- `H1`: 1 hour
- `D1`: 1 day
- `W1`: 1 week
- `m1`: 1 month
- `m3`: 1 quarter
- `Q1`: 1 quarter

#### languages (Language)
- `en`: English
- `ru`: Russian

### Streams

#### candles (Candles)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `interval` (enum intervals, optional): Interval
- `quantity` (integer, optional): Candles quantity
- `till` (datetime, optional): Datetime till

**Output Fields:**
- `FROM` (datetime, primary): From
- `TILL` (datetime): Till
- `OPEN` (fixed): Open
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `CLOSE` (fixed): Close
- `VALUE` (fixed): Value
- `VOLUME` (integer): Volume, units

**Useful fields:** OHLCV for fixings.

#### securities (Securities)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `language` (enum languages, optional): Language

**Output Fields:**
- `TICKER` (string, primary): Fixing code
- `CAPTION` (string): Name
- `LAST` (fixed): Current Value
- `PREVPRICE` (fixed): Previous Close
- `CHANGE` (fixed): Change
- `OPENVALUE` (fixed): Open
- `LOW` (fixed): Min
- `HIGH` (fixed): Max
- `TRADEDATE` (date): Trade date
- `TIME` (time): Time
- `UPDATETIME` (time): Update time
- `BIDDEPTHT` (integer): Total bid depth
- `OFFERDEPTHT` (integer): Total offer depth
- `TRADINGSTATUS` (enum TTradingStatus): Status

**Useful fields:** LAST, CHANGE, HIGH, LOW for fixing values.

## OPTIONS Market

### Enums

#### TTradingStatus (Security trading status)
- `N`: Not traded at the moment
- `O`: Opening period
- `C`: Trading is closed
- `F`: Closing period
- `B`: Break
- `T`: Trading session

#### intervals (Candle interval)
- `M1`: 1 minute
- `M10`: 10 minutes
- `H1`: 1 hour
- `D1`: 1 day
- `W1`: 1 week
- `m1`: 1 month
- `m3`: 1 quarter
- `Q1`: 1 quarter

#### languages (Language)
- `en`: English
- `ru`: Russian

### Streams

#### candles (Candles)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `interval` (enum intervals, optional): Interval
- `quantity` (integer, optional): Candles quantity
- `till` (datetime, optional): Datetime till

**Output Fields:**
- `FROM` (datetime, primary): From
- `TILL` (datetime): Till
- `OPEN` (fixed): Open
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `CLOSE` (fixed): Close
- `VALUE` (fixed): Value
- `VOLUME` (integer): Volume, units

**Useful fields:** OHLCV for options.

#### securities (Securities)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `language` (enum languages, optional): Language

**Output Fields:**
- `TICKER` (string, primary): Ticker
- `CAPTION` (string): Caption
- `BID` (fixed): Bid
- `OFFER` (fixed): Offer
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `LAST` (fixed): Last
- `TIME` (time): Time
- `NUMTRADES` (integer): Number of Trades
- `PREVPRICE` (fixed): Previous date price
- `CHANGE` (fixed): Change
- `BIDDEPTHT` (integer): Bid deptht
- `OFFERDEPTHT` (integer): Offer deptht
- `TRADINGSTATUS` (enum TTradingStatus): Status
- `VALTODAY` (float): Value
- `VOLTODAY` (integer): Volume
- `MINSTEP` (fixed): minstep

**Useful fields:** BID, OFFER, LAST, CHANGE, VALTODAY for options trading.

## FORTS Market

### Enums

#### TTradingStatus (Security trading status)
- `N`: Not traded at the moment
- `O`: Opening period
- `C`: Trading is closed
- `F`: Closing period
- `B`: Break
- `T`: Trading session

#### intervals (Candle interval)
- `M1`: 1 minute
- `M10`: 10 minutes
- `H1`: 1 hour
- `D1`: 1 day
- `W1`: 1 week
- `m1`: 1 month
- `m3`: 1 quarter
- `Q1`: 1 quarter

#### languages (Language)
- `en`: English
- `ru`: Russian

### Streams

#### candles (Candles)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `interval` (enum intervals, optional): Interval
- `quantity` (integer, optional): Candles quantity
- `till` (datetime, optional): Datetime till

**Output Fields:**
- `FROM` (datetime, primary): From
- `TILL` (datetime): Till
- `OPEN` (fixed): Open
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `CLOSE` (fixed): Close
- `VALUE` (fixed): Value
- `VOLUME` (integer): Volume, units

**Useful fields:** OHLCV for FORTS instruments.

#### securities (Securities)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `language` (enum languages, optional): Language

**Output Fields:**
- `TICKER` (string, primary): Ticker
- `CAPTION` (string): Caption
- `BID` (fixed): Bid
- `OFFER` (fixed): Offer
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `LAST` (fixed): Last
- `TIME` (time): Time
- `NUMTRADES` (integer): Number of Trades
- `PREVPRICE` (fixed): Previous date price
- `CHANGE` (fixed): Change
- `BIDDEPTHT` (integer): Bid deptht
- `OFFERDEPTHT` (integer): Offer deptht
- `TRADINGSTATUS` (enum TTradingStatus): Status
- `VALTODAY` (float): Value
- `VOLTODAY` (integer): Volume
- `MINSTEP` (fixed): minstep

**Useful fields:** BID, OFFER, LAST, CHANGE, VALTODAY for derivatives trading.

## COMMON Market

### Enums

#### cardnames (Card names)
- `common`: Description
- `constsituents`: Constituents
- `session`: Session specs
- `boards`: Trading boards
- `indices`: Indices include the ticker
- `issuer`: Issuer description
- `derivatives`: Derivatives
- `issuer_instruments`: Issuer instruments

#### languages (Language)
- `en`: English
- `ru`: Russian

### Streams

#### news (News)
**Access:** general

**Parameters:**
- `language` (enum languages, optional): Language

**Output Fields:**
- `ID` (integer, primary): ID
- `CAPTION` (string): Caption
- `SHORTCUT` (string): Short cut
- `PUBLIC_TIME` (datetime): Published at

**Useful fields:** CAPTION, PUBLIC_TIME for news headlines.

#### turnovers (Turnovers)
**Access:** general

**Parameters:**
- `engine` (string, optional): Engine
- `market` (string, optional): Market
- `language` (enum languages, optional): Language

**Output Fields:**
- `ID` (string, primary): ID
- `NAME` (string): Name
- `CAPTION` (string): Caption
- `VALTODAY` (float): Value of the last trading session, rub
- `VALTODAY_USD` (float): Value of the last trading session, USD
- `NUMTRADES` (float): Trades of the last trading session
- `UPDATETIME` (datetime): Update time

**Useful fields:** VALTODAY, NUMTRADES for market turnover statistics.

### Queries

#### boards (ISS reference)
**Access:** general

**Parameters:**
- `language` (enum languages, optional): Language

**Output Fields:**
- `ID` (integer, primary): System ID
- `NAME` (string): Name
- `CAPTION` (string): Caption
- `ENGINEID` (integer): Trade Engine system ID
- `MARKETID` (integer): Market system ID
- `IS_TRADED` (bool): Trading status the board
- `IS_PRIMARY` (bool): The board is primary

**Useful fields:** NAME, CAPTION, IS_TRADED for board information.

#### engines (ISS reference)
**Access:** general

**Parameters:**
- `language` (enum languages, optional): Language

**Output Fields:**
- `ID` (integer, primary): System ID
- `NAME` (string): Name
- `CAPTION` (string): Caption

**Useful fields:** NAME, CAPTION for engine reference.

#### markets (ISS reference)
**Access:** general

**Parameters:**
- `language` (enum languages, optional): Language

**Output Fields:**
- `ID` (integer, primary): System ID
- `NAME` (string): Name
- `CAPTION` (string): Caption
- `ENGINEID` (integer): Trade Engine system ID

**Useful fields:** NAME, CAPTION for market reference.

#### news.content (News content)
**Access:** general

**Parameters:**
- `ID` (integer): News id

**Output Fields:**
- `ID` (integer, primary): News id
- `CONTENT` (string): Content

**Useful fields:** CONTENT for full news text.

#### ticker.card (Ticker Card)
**Access:** general

**Parameters:**
- `ticker` (string, optional): Ticker
- `cardname` (enum cardnames, optional): Card name
- `language` (enum languages, optional): Language
- `list` (bool, optional): Card list

**Output Fields:**
- `CARDID` (string, primary): Card ID
- `NAME` (string, primary): Name
- `CAPTION` (string): Caption
- `HINT` (string): Hint
- `IS_HIDDEN` (bool): Is hidden
- `SORT_ORDER` (integer): Order
- `TYPE` (string): Type
- `PRECISION` (integer): Precision
- `VALUE` (string): Value
- `VALUE_INFO` (string): Value info
- `TAG_ORDER` (string): Tag
- `TAG_CAPTION` (string): Tag name

**Useful fields:** VALUE, CAPTION for detailed security information.

## MXSE Market (Moscow Exchange Securities)

### Enums

#### Language
- `en`: English
- `ru`: Russian

#### TBuySell (Order direction)
- `B`: Buy
- `S`: Sell

#### TDPValIndicator (Order availability flag)
- ` `: No orders
- `S`: Small
- `M`: Much
- `Y`: There are orders

#### TSecStatus (Security status)
- `A`: Operations allowed
- `S`: Operations suspended
- `N`: Suspended for trading, settlement allowed

#### TTradingStatus (Security trading status)
- `N`: Not traded right now
- `O`: Opening period
- `C`: Trading is closed
- `F`: Closing period
- `B`: Break
- `T`: Trading session
- `L`: Closing auction
- `D`: Dark pool
- `I`: Discrete auction
- `E`: Close Auction price trading
- `S`: Opening Auction
- `A`: Auction: Order entry phase
- `a`: Auction: Trade conclusion phase
- `b`: Auction: Bookbuilding phase, orders locked
- `p`: Auction: After auction trade phase

#### intervals (Candle interval)
- `M1`: 1 minute
- `M10`: 10 minutes
- `H1`: 1 hour
- `D1`: 1 day
- `W1`: 1 week
- `m1`: 1 month
- `m3`: 1 quarter
- `Q1`: 1 quarter

### Streams

#### candles (Candles)
**Access:** general

**Parameters:**
- `ticker` (string): Ticker
- `interval` (enum intervals, optional): Interval
- `quantity` (integer, optional): Candles quantity
- `till` (datetime, optional): Datetime till

**Output Fields:**
- `FROM` (datetime, primary): From
- `TILL` (datetime): Till
- `OPEN` (fixed): Open
- `HIGH` (fixed): High
- `LOW` (fixed): Low
- `CLOSE` (fixed): Close
- `VALUE` (fixed): Value
- `VOLUME` (integer): Volume, units

**Useful fields:** OHLCV for securities.

#### orderbooks (Aggregate orderbook)
**Access:** general

**Parameters:**
- `TICKER` (string): Ticker

**Output Fields:**
- `BUYSELL` (enum TBuySell): Direction
- `PRICE` (fixed): Price
- `QUANTITY` (integer): Lots
- `REPOVALUE` (fixed): REPO value

**Useful fields:** PRICE, QUANTITY, BUYSELL for order book, REPOVALUE for repo trades.

#### securities (General market data)
**Access:** general

**Parameters:**
- `TICKER` (string): Ticker
- `LANGUAGE` (enum Language, optional): Language

**Output Fields:**
- `TICKER` (string, primary): Ticker
- `CAPTION` (string): Security
- `LAST` (fixed): Last
- `CHANGE` (fixed): Last to Closing change
- `BID` (fixed): Bid
- `OFFER` (fixed): Offer
- `HIGH` (fixed): Maximum
- `LOW` (fixed): Minimum
- `HIGHBID` (fixed): Best bid
- `LOWOFFER` (fixed): Best offer
- `BIDDEPTHT` (integer): Total bid depth
- `OFFERDEPTHT` (integer): Total offer depth
- `VOLTODAY` (fixed): Today volume
- `VALTODAY` (integer): Today value
- `NUMTRADES` (integer): Trades today
- `LCLOSEPRICE` (fixed): Closing price
- `LCURRENTPRICE` (fixed): Current price
- `PREVPRICE` (fixed): Last closing price
- `WAPRICE` (fixed): WA
- `PREVWAPRICE` (fixed): Previous WA price
- `PRICEMINUSPREVWAPRICE` (fixed): Last price to previous WA price
- `QTY` (integer): Lots in the last
- `VALUE` (fixed): Value of the last
- `BASEPRICE` (fixed): Base price
- `MARKETPRICE` (fixed): Last day market price
- `CURRENCYID` (string): Settlement currency
- `SETTLECODE` (string): Settlement code
- `SETTLEDATE1` (date): Settlement date 1
- `SETTLEDATE2` (date): Settlement date 2
- `LOTSIZE` (integer): Lot size
- `FACEUNIT` (string): Face value currency
- `FACEVALUE` (fixed): Face value
- `ISSUESIZE` (integer): Issued volume
- `ADMITTEDQUOTE` (fixed): Admitted quote
- `TRADINGSTATUS` (enum TTradingStatus): Trading status
- `STATUS` (enum TSecStatus): Status
- `DPVALINDICATORBUY` (enum TDPValIndicator): Bid flag (dark pools)
- `DPVALINDICATORSELL` (enum TDPValIndicator): Sell flag (dark pools)
- `TIME` (time): Time of the last
- `MINSTEP` (fixed): Order's minimum price step
- `PRICEMINSTEP` (fixed): Minimum price step

**Useful fields:** LAST, BID, OFFER, CHANGE, VOLTODAY, VALTODAY, NUMTRADES for comprehensive trading data.

## MXSEBB Market (Moscow Exchange Securities - Bond Board)

### Enums

#### Language
- `en`: English
- `ru`: Russian

#### TBuySell (Direction)
- `B`: Buy
- `S`: Sell

### Streams

#### orderbooks (Orderbook)
**Access:** general

**Parameters:**
- `TICKER` (string): Ticker

**Output Fields:**
- `BUYSELL` (enum TBuySell): Direction
- `PRICE` (fixed): Rate, %
- `QUANTITY` (integer): Lots
- `VALUE` (fixed): Value

**Useful fields:** PRICE, QUANTITY, VALUE for bond order book.

#### securities (Securities)
**Access:** general

**Parameters:**
- `TICKER` (string): Ticker
- `LANGUAGE` (enum Language, optional): Language

**Output Fields:**
- `TICKER` (string, primary): Ticker
- `CAPTION` (string): Security

**Useful fields:** Basic security identification.

## Usage Examples

### Subscribing to Securities Data
```
SUBSCRIBE
id: sub1
destination: MXSE.securities
selector: TICKER="SBER"
```

### Subscribing to Order Book
```
SUBSCRIBE
id: sub2
destination: MXSE.orderbooks
selector: TICKER="SBER"
```

### Subscribing to Candles
```
SUBSCRIBE
id: sub3
destination: MXSE.candles
selector: ticker="SBER" and interval="M1"
```

### Searching for Securities
```
REQUEST
id: req1
destination: SEARCH.ticker
selector: pattern="SBER*"
```

## Notes on Useful Response Fields

- **Real-time trading**: LAST, BID, OFFER, CHANGE, VOLUME, VALUE
- **Market depth**: BIDDEPTHT, OFFERDEPTHT, orderbook levels
- **Historical analysis**: HIGH, LOW, candlestick data
- **Volume analysis**: VOLTODAY, VALTODAY, NUMTRADES
- **Security info**: LOTSIZE, MINSTEP, FACEVALUE
- **Status monitoring**: TRADINGSTATUS, STATUS

The `properties.type` in responses indicates update type:
- `snapshot`: Full data replacement
- `updates`: Incremental updates
- `removal`: Data removal

Primary key fields are used for data matching and updates.
