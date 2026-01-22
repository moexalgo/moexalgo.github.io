---
title: Описание документации WebSocket
sidebar_label: Справочник (ru)
sidebar_position: 1
---

# Справочник по потокам WebSocket MOEX

Этот документ предоставляет всестороннюю справку по доступным потокам веб-сокетов из системы распределения данных MOEX ISS+ в реальном времени. Потоки предоставляют рыночные данные, книги заявок, данные свечей и информацию о различных финансовых инструментах.

## Обзор рынков и потоков

Через веб-сокеты доступны следующие рынки:

- **MONEY**: Инструменты денежного рынка
- **MXCX**: Московская биржа валюты
- **SRATES**: Ставки своп
- **SEARCH**: Поиск и справочная информация по инструментам
- **INDICES**: Индексы акций
- **CBRF**: Ставки Центрального банка России
- **FIXING**: Валютные фиксинги
- **OPTIONS**: Рынок опционов
- **FORTS**: FORTS производные инструменты
- **COMMON**: Общая справочная информация (новости, обороты, доски, движки, рынки)
- **MXSE**: Московская биржа ценных бумаг
- **MXSEBB**: Московская биржа ценных бумаг (доска облигаций)

Каждый рынок содержит перечисления (enums) и потоки с параметрами и выходными полями.

## Рынок MONEY

### Перечисления

#### Language
- `en`: Английский
- `ru`: Русский

#### TSecStatus (Статус финансового инструмента)
- `A`: Операции разрешены
- `S`: Операции запрещены
- `N`: Заблокировано для торгов, разрешено исполнение сделок

#### TSecType (Типы ценных бумаг)
- `1`: Акции обыкновенные
- `2`: Акции привилегированные
- `3`: Ценная бумага РФ
- `4`: Ценные бумаги субъектов РФ
- `5`: Ценные бумаги ЦБ РФ
- `6`: Корпоративные облигации
- `7`: Облигации МФО
- `8`: Биржевые облигации
- `9`: Паи открытых ПИФов
- `A`: Паи интервальных ПИФов
- `B`: Паи закрытых ПИФов
- `C`: Муниципальные ценные бумаги

#### TTradingStatus (Состояние торгов по инструменту)
- `N`: Недоступно для торгов
- `O`: Период открытия
- `C`: Торги закрыты
- `F`: Период закрытия
- `B`: Перерыв
- `T`: Торговая сессия

### Потоки

#### securities (Финансовые инструменты)
**Доступ:** general

**Параметры:**
- `TICKER` (string): Инструмент
- `LANGUAGE` (enum Language, optional): Язык

**Выходные поля:**
- `TICKER` (string, primary): Инструмент
- `CAPTION` (string): Инструмент
- `STATUS` (enum TSecStatus): Статус
- `TRADINGSTATUS` (enum TTradingStatus): Состояние
- `MARKETCODE` (string): Рынок
- `LOTSIZE` (integer): Размер лота
- `MINSTEP` (fixed): Мин. шаг цены
- `FACEVALUE` (fixed): Номинал
- `FACEUNIT` (string): Валюта номинала
- `PREVPRICE` (fixed): Последняя предыдущего дня
- `ISSUESIZE` (integer): Объем выпуска
- `PREVWAPRICE` (fixed): Оценка пред. дня
- `CURRENCYID` (string): Сопр. валюта инструмента
- `REGNUMBER` (string): Регистрационный номер
- `SECTYPE` (enum TSecType): Тип ценной бумаги
- `BID` (fixed): Спрос
- `BIDDEPTHT` (integer): Совокупный спрос
- `NUMBIDS` (integer): Заявок на покупку
- `OFFER` (fixed): Предложение
- `OFFERDEPTHT` (integer): Совокупное предложение
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `LAST` (fixed): Последняя
- `CHANGE` (fixed): К последней пред. дня
- `QTY` (integer): Лотов в последней
- `TIME` (time): Время последней
- `VOLTODAY` (integer): Количество за сегодня
- `VALTODAY` (integer): Объем за сегодня
- `VALUE` (fixed): Объем в последней
- `WAPRICE` (fixed): Оценка
- `HIGHBID` (fixed): Лучший спрос
- `LOWOFFER` (fixed): Лучшее предложение
- `NUMTRADES` (integer): Сделок за сегодня
- `PRICEMINUSPREVWAPRICE` (fixed): К оценке пред. дня
- `BASEPRICE` (fixed): Базовый курс
- `MARKETPRICE` (fixed): Рыночная цена предыдущего дня
- `REMARKS` (string): Примечание
- `SETTLECODE` (string): Код расчетов
- `SETTLEDATE1` (date): Дата расчетов 1
- `SETTLEDATE2` (date): Дата расчетов 2

**Полезные поля:** LAST, BID, OFFER, VOLTODAY, VALTODAY, CHANGE для данных реального времени.

## Рынок MXCX (Валютная биржа)

### Перечисления

#### Language
- `en`: Английский
- `ru`: Русский

#### TBuySell (Направленность заявки)
- `B`: Купля
- `S`: Продажа

#### TDPValIndicator (Индикатор наличия заявок)
- ` `: Нет заявок
- `Y`: Есть заявки

#### TSecStatus (Статус финансового инструмента)
- `A`: Операции разрешены
- `S`: Операции запрещены
- `N`: Заблокировано для торгов, разрешено исполнение сделок

#### TTradingStatus (Состояние торгов по инструменту)
- `N`: Недоступно для торгов
- `O`: Период открытия
- `C`: Торги закрыты
- `F`: Период закрытия
- `B`: Перерыв
- `T`: Торговая сессия
- `I`: Дискретный аукцион
- `S`: Аукцион Открытия
- `A`: Аукцион: Фаза сбора заявок
- `a`: Аукцион: Фаза заключения сделок
- `b`: Аукцион: Фаза формирования реестра. Заявки заблокированы.
- `p`: Аукцион: Фаза параллельного сбора и удовлетворения заявок

#### intervals (Ширина свечи)
- `M1`: 1 минута
- `M10`: 10 минут
- `H1`: 1 час
- `D1`: 1 день
- `W1`: 1 неделя
- `m1`: 1 месяц
- `m3`: 1 квартал
- `Q1`: 1 квартал

### Потоки

#### candles (Свечи)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `interval` (enum intervals, optional): Ширина свечи
- `quantity` (integer, optional): Количество свечей
- `till` (datetime, optional): Не старше

**Выходные поля:**
- `FROM` (datetime, primary): Время с
- `TILL` (datetime): Включая
- `OPEN` (fixed): Открытие
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `CLOSE` (fixed): Закрытие
- `VALUE` (fixed): Объем
- `VOLUME` (integer): Объем, шт.

**Полезные поля:** Все поля для данных OHLCV свечей.

#### orderbooks (Котировки по инструменту)
**Доступ:** general

**Параметры:**
- `TICKER` (string): Инструмент

**Выходные поля:**
- `BUYSELL` (enum TBuySell): К/П
- `PRICE` (fixed): Курс
- `QUANTITY` (integer): Лоты

**Полезные поля:** PRICE, QUANTITY, BUYSELL для уровней книги заявок.

#### securities (Финансовые инструменты)
**Доступ:** general

**Параметры:**
- `TICKER` (string): Инструмент
- `LANGUAGE` (enum Language, optional): Язык

**Выходные поля:**
- `TICKER` (string, primary): Инструмент
- `CAPTION` (string): Инструмент
- `LAST` (fixed): Последняя
- `CHANGE` (fixed): К последней пред. дня
- `BIDDEPTHT` (integer): Совокупный спрос
- `OFFERDEPTHT` (integer): Совокупное предложение
- `BID` (fixed): Спрос
- `OFFER` (fixed): Предложение
- `HIGHBID` (fixed): Лучший спрос
- `LOWOFFER` (fixed): Лучшее предложение
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `PREVPRICE` (fixed): Последняя предыдущего дня
- `MARKETPRICE` (fixed): Вчерашний фиксинг
- `QTY` (integer): Лотов в последней
- `VOLTODAY` (fixed): Объем в валюте инструмента
- `VALTODAY` (integer): Объем за сегодня
- `NUMTRADES` (integer): Сделок за сегодня
- `WAPRICE` (fixed): Оценка
- `PREVWAPRICE` (fixed): Оценка пред. дня
- `VALUE` (fixed): Объем в последней
- `TRADINGSTATUS` (enum TTradingStatus): Состояние
- `STATUS` (enum TSecStatus): Статус
- `LOTSIZE` (integer): Размер лота
- `FACEUNIT` (string): Валюта инструмента
- `BASEPRICE` (fixed): Базовый курс
- `SETTLECODE` (string): Код расчетов
- `SETTLEDATE1` (date): Дата расчетов 1
- `SETTLEDATE2` (date): Дата расчетов 2
- `MARKETCODE` (string): Рынок
- `CURRENCYID` (string): Валюта расчетов
- `TIME` (time): Время последней
- `DPVALINDICATORBUY` (enum TDPValIndicator): Заявки на покупку WAP
- `DPVALINDICATORSELL` (enum TDPValIndicator): Заявки на продажу WAP
- `MINSTEP` (fixed): Мин. шаг курса заявок
- `FACEVALUE` (fixed): Номинал
- `PRICEMINSTEP` (fixed): Мин. шаг курса
- `LOTDIVIDER` (integer): Коэффициент дробления
- `CLOSEPRICE` (fixed): Срвзв. курс за Расчетный период
- `LOPENPRICE` (fixed): Оценка в течение Расчетного периода

**Полезные поля:** LAST, BID, OFFER, CHANGE, VOLTODAY, VALTODAY для данных торгов.

## Рынок SRATES (Ставки своп)

### Перечисления

#### TTradingStatus (Состояние торгов по инструменту)
- `N`: Недоступно для торгов
- `O`: Период открытия
- `C`: Торги закрыты
- `F`: Период закрытия
- `B`: Перерыв
- `T`: Торговая сессия

#### intervals (Ширина свечи)
- `M1`: 1 минута
- `M10`: 10 минут
- `H1`: 1 час
- `D1`: 1 день
- `W1`: 1 неделя
- `m1`: 1 месяц
- `m3`: 1 квартал
- `Q1`: 1 квартал

### Потоки

#### candles (Свечи)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `interval` (enum intervals, optional): Ширина свечи
- `quantity` (integer, optional): Количество свечей
- `till` (datetime, optional): Не старше

**Выходные поля:**
- `FROM` (datetime, primary): Время с
- `TILL` (datetime): Включая
- `OPEN` (fixed): Открытие
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `CLOSE` (fixed): Закрытие
- `VALUE` (fixed): Объем
- `VOLUME` (integer): Объем, шт.

**Полезные поля:** OHLCV данные для ставок своп.

#### securities (Индикативные ставки по сделкам своп)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер

**Выходные поля:**
- `TICKER` (string, primary): Своп
- `CAPTION` (string): Наименование
- `LAST` (fixed): Значение
- `PREVPRICE` (fixed): Предыдущее закрытие
- `CHANGE` (fixed): Изменение к предыдущему закрытию
- `TRADEDATE` (date): Дата
- `TRADINGSTATUS` (enum TTradingStatus): Состояние

**Полезные поля:** LAST, CHANGE для текущих ставок своп.

## Рынок SEARCH

### Запросы

#### ticker (Поиск тикеров)
**Доступ:** general

**Параметры:**
- `pattern` (string, optional): Шаблон
- `ticker` (string, optional): Тикер
- `preset` (string, optional): Предустановка

**Выходные поля:**
- `ticker` (string): Тикер
- `secid` (string): ID инструмента
- `boardid` (string): ID доски
- `board_name` (string): Название доски
- `marketplace` (string): Торговая площадка
- `shortname` (string): Короткое название
- `latname` (string): Латинское название
- `name` (string): Название
- `isin` (string): ISIN
- `regnumber` (string): Регистрационный номер
- `primary_boardid` (string): Основной ID доски
- `emitent_id` (integer): ID эмитента
- `emitent_title` (string): Название эмитента
- `emitent_inn` (string): ИНН эмитента
- `emitent_okpo` (string): ОКПО эмитента

**Полезные поля:** ticker, shortname, isin для идентификации инструментов.

## Рынок INDICES

### Перечисления

#### TTradingStatus (Состояние торгов по инструменту)
- `N`: Недоступно для торгов
- `O`: Период открытия
- `C`: Торги закрыты
- `F`: Период закрытия
- `B`: Перерыв
- `T`: Торговая сессия

#### intervals (Ширина свечи)
- `M1`: 1 минута
- `M10`: 10 минут
- `H1`: 1 час
- `D1`: 1 день
- `W1`: 1 неделя
- `m1`: 1 месяц
- `m3`: 1 квартал
- `Q1`: 1 квартал

#### languages (Язык)
- `en`: Английский
- `ru`: Русский

### Потоки

#### candles (Свечи)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `interval` (enum intervals, optional): Ширина свечи
- `quantity` (integer, optional): Количество свечей
- `till` (datetime, optional): Не старше

**Выходные поля:**
- `FROM` (datetime, primary): Время с
- `TILL` (datetime): Включая
- `OPEN` (fixed): Открытие
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `CLOSE` (fixed): Закрытие
- `VALUE` (fixed): Объем
- `VOLUME` (integer): Объем, шт.

**Полезные поля:** OHLCV для индексов.

#### securities (Индексы)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `language` (enum languages, optional): Язык

**Выходные поля:**
- `TICKER` (string, primary): Тикер
- `CAPTION` (string): Наименование
- `BIDDEPTHT` (integer): Общий спрос
- `OFFERDEPTHT` (integer): Общее предложение
- `LAST` (fixed): Текущее значение
- `CHANGE` (fixed): Изменение текущего значения к значению предыдущего торгового дня, пунктов
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `PREVPRICE` (fixed): Последнее значение индекса предыдущего торгового дня
- `OPENVALUE` (fixed): Открытие текущего торгового дня, пунктов
- `LASTCHANGETOOPENPRC` (fixed): Изменение к открытию текущего торгового дня, %
- `LASTCHANGETOOPEN` (fixed): Изменение к открытию текущего торгового дня, пунктов
- `MONTHCHANGEPRC` (fixed): Изменение с начала календарного месяца, %
- `YEARCHANGEPRC` (fixed): Изменение с начала календарного года, %
- `MONTHCHANGEBP` (fixed): Изменение с начала календарного месяца, базисных пунктов
- `YEARCHANGEBP` (fixed): Изменение с начала календарного года, базисных пунктов
- `CAPITALIZATION` (integer): Капитализация бумаг, входящих в индекс, руб
- `VALTODAY` (integer): Объем за сегодня, рубли
- `VALTODAY_USD` (integer): Объем за сегодня, USD
- `CAPITALIZATION_USD` (integer): Капитализация бумаг, входящих в индекс, USD
- `TRADEDATE` (date): Дата торгов
- `TIME` (time): Время
- `TRADINGSTATUS` (enum TTradingStatus): Состояние

**Полезные поля:** LAST, CHANGE, LASTCHANGETOOPENPRC для значений индексов и производительности.

## Рынок CBRF (Ставки ЦБ РФ)

### Перечисления

#### TTradingStatus (Состояние торгов по инструменту)
- `N`: Недоступно для торгов
- `O`: Период открытия
- `C`: Торги закрыты
- `F`: Период закрытия
- `B`: Перерыв
- `T`: Торговая сессия

#### intervals (Ширина свечи)
- `M1`: 1 минута
- `M10`: 10 минут
- `H1`: 1 час
- `D1`: 1 день
- `W1`: 1 неделя
- `m1`: 1 месяц
- `m3`: 1 квартал
- `Q1`: 1 квартал

#### languages (Язык)
- `en`: Английский
- `ru`: Русский

### Потоки

#### candles (Свечи)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `interval` (enum intervals, optional): Ширина свечи
- `quantity` (integer, optional): Количество свечей
- `till` (datetime, optional): Не старше

**Выходные поля:**
- `FROM` (datetime, primary): Время с
- `TILL` (datetime): Включая
- `OPEN` (fixed): Открытие
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `CLOSE` (fixed): Закрытие
- `VALUE` (fixed): Объем
- `VOLUME` (integer): Объем, шт.

**Полезные поля:** OHLCV для ставок ЦБ.

#### securities (Ставки ЦБ РФ)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `language` (enum languages, optional): Язык

**Выходные поля:**
- `TICKER` (string, primary): Код валюты
- `CAPTION` (string): Код валюты
- `LAST` (fixed): Значение
- `PREVPRICE` (fixed): Предыдущее закрытие
- `CHANGE` (fixed): Изменение к предыдущему закрытию
- `NOMINAL` (integer): Номинал
- `BIDDEPTHT` (integer): Общий спрос
- `OFFERDEPTHT` (integer): Общее предложение
- `TRADEDATE` (date): Дата
- `TRADINGSTATUS` (enum TTradingStatus): Состояние

**Полезные поля:** LAST, CHANGE для ставок ЦБ.

## Рынок FIXING

### Перечисления

#### TTradingStatus (Состояние торгов по инструменту)
- `N`: Недоступно для торгов
- `O`: Период открытия
- `C`: Торги закрыты
- `F`: Период закрытия
- `B`: Перерыв
- `T`: Торговая сессия

#### intervals (Ширина свечи)
- `M1`: 1 минута
- `M10`: 10 минут
- `H1`: 1 час
- `D1`: 1 день
- `W1`: 1 неделя
- `m1`: 1 месяц
- `m3`: 1 квартал
- `Q1`: 1 квартал

#### languages (Язык)
- `en`: Английский
- `ru`: Русский

### Потоки

#### candles (Свечи)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `interval` (enum intervals, optional): Ширина свечи
- `quantity` (integer, optional): Количество свечей
- `till` (datetime, optional): Не старше

**Выходные поля:**
- `FROM` (datetime, primary): Время с
- `TILL` (datetime): Включая
- `OPEN` (fixed): Открытие
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `CLOSE` (fixed): Закрытие
- `VALUE` (fixed): Объем
- `VOLUME` (integer): Объем, шт.

**Полезные поля:** OHLCV для фиксингов.

#### securities (Котировки)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `language` (enum languages, optional): Язык

**Выходные поля:**
- `TICKER` (string, primary): Код фиксинга
- `CAPTION` (string): Наименование
- `LAST` (fixed): Значение
- `PREVPRICE` (fixed): Предыдущее закрытие
- `CHANGE` (fixed): Изменение к предыдущему закрытию
- `OPENVALUE` (fixed): Открытие
- `LOW` (fixed): Минимум
- `HIGH` (fixed): Максимум
- `TRADEDATE` (date): Дата торгов
- `TIME` (time): Время
- `UPDATETIME` (time): Время обновления
- `BIDDEPTHT` (integer): Общий спрос
- `OFFERDEPTHT` (integer): Общее предложение
- `TRADINGSTATUS` (enum TTradingStatus): Состояние

**Полезные поля:** LAST, CHANGE, HIGH, LOW для значений фиксингов.

## Рынок OPTIONS

### Перечисления

#### TTradingStatus (Состояние торгов по инструменту)
- `N`: Недоступно для торгов
- `O`: Период открытия
- `C`: Торги закрыты
- `F`: Период закрытия
- `B`: Перерыв
- `T`: Торговая сессия

#### intervals (Ширина свечи)
- `M1`: 1 минута
- `M10`: 10 минут
- `H1`: 1 час
- `D1`: 1 день
- `W1`: 1 неделя
- `m1`: 1 месяц
- `m3`: 1 квартал
- `Q1`: 1 квартал

#### languages (Язык)
- `en`: Английский
- `ru`: Русский

### Потоки

#### candles (Свечи)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `interval` (enum intervals, optional): Ширина свечи
- `quantity` (integer, optional): Количество свечей
- `till` (datetime, optional): Не старше

**Выходные поля:**
- `FROM` (datetime, primary): Время с
- `TILL` (datetime): Включая
- `OPEN` (fixed): Открытие
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `CLOSE` (fixed): Закрытие
- `VALUE` (fixed): Объем
- `VOLUME` (integer): Объем, шт.

**Полезные поля:** OHLCV для опционов.

#### securities (Котировки)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `language` (enum languages, optional): Язык

**Выходные поля:**
- `TICKER` (string, primary): Код инструмента
- `CAPTION` (string): Наименование
- `BID` (fixed): Спрос
- `OFFER` (fixed): Предложение
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `LAST` (fixed): Последнее
- `TIME` (time): Последняя сделка
- `NUMTRADES` (integer): Число сделок
- `PREVPRICE` (fixed): Цена закрытия предыдущего дня
- `CHANGE` (fixed): Изменение
- `BIDDEPTHT` (integer): Объём спроса
- `OFFERDEPTHT` (integer): Объём предложения
- `TRADINGSTATUS` (enum TTradingStatus): Состояние
- `VALTODAY` (float): Объём торгов
- `VOLTODAY` (integer): Объём торгов (в бумагах)
- `MINSTEP` (fixed): minstep

**Полезные поля:** BID, OFFER, LAST, CHANGE, VALTODAY для торгов опционами.

## Рынок FORTS

### Перечисления

#### TTradingStatus (Состояние торгов по инструменту)
- `N`: Недоступно для торгов
- `O`: Период открытия
- `C`: Торги закрыты
- `F`: Период закрытия
- `B`: Перерыв
- `T`: Торговая сессия

#### intervals (Ширина свечи)
- `M1`: 1 минута
- `M10`: 10 минут
- `H1`: 1 час
- `D1`: 1 день
- `W1`: 1 неделя
- `m1`: 1 месяц
- `m3`: 1 квартал
- `Q1`: 1 квартал

#### languages (Язык)
- `en`: Английский
- `ru`: Русский

### Потоки

#### candles (Свечи)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `interval` (enum intervals, optional): Ширина свечи
- `quantity` (integer, optional): Количество свечей
- `till` (datetime, optional): Не старше

**Выходные поля:**
- `FROM` (datetime, primary): Время с
- `TILL` (datetime): Включая
- `OPEN` (fixed): Открытие
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `CLOSE` (fixed): Закрытие
- `VALUE` (fixed): Объем
- `VOLUME` (integer): Объем, шт.

**Полезные поля:** OHLCV для инструментов FORTS.

#### securities (Котировки)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `language` (enum languages, optional): Язык

**Выходные поля:**
- `TICKER` (string, primary): Код инструмента
- `CAPTION` (string): Наименование
- `BID` (fixed): Спрос
- `OFFER` (fixed): Предложение
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `LAST` (fixed): Последнее
- `TIME` (time): Последняя сделка
- `NUMTRADES` (integer): Число сделок
- `PREVPRICE` (fixed): Цена закрытия предыдущего дня
- `CHANGE` (fixed): Изменение
- `BIDDEPTHT` (integer): Объём спроса
- `OFFERDEPTHT` (integer): Объём предложения
- `TRADINGSTATUS` (enum TTradingStatus): Состояние
- `VALTODAY` (float): Объём торгов
- `VOLTODAY` (integer): Объём торгов (в бумагах)
- `MINSTEP` (fixed): minstep

**Полезные поля:** BID, OFFER, LAST, CHANGE, VALTODAY для производных инструментов.

## Рынок COMMON

### Перечисления

#### cardnames (Имена карточек)
- `common`: Спецификация
- `constsituents`: База расчета
- `session`: Параметры сессии
- `boards`: Режимы торгов
- `indices`: Входит в индексы
- `issuer`: Описание эмитента
- `derivatives`: Производные инструменты
- `issuer_instruments`: Инструменты эмитента

#### languages (Язык)
- `en`: Английский
- `ru`: Русский

### Потоки

#### news (Новости)
**Доступ:** general

**Параметры:**
- `language` (enum languages, optional): Язык

**Выходные поля:**
- `ID` (integer, primary): Номер
- `CAPTION` (string): Заголовок
- `SHORTCUT` (string): Сокращение статьи
- `PUBLIC_TIME` (datetime): Время публикации

**Полезные поля:** CAPTION, PUBLIC_TIME для заголовков новостей.

#### turnovers (Обороты)
**Доступ:** general

**Параметры:**
- `engine` (string, optional): Система
- `market` (string, optional): Рынок
- `language` (enum languages, optional): Язык

**Выходные поля:**
- `ID` (string, primary): Номер
- `NAME` (string): Идентификатор
- `CAPTION` (string): Название
- `VALTODAY` (float): Объем сделок, в рублях
- `VALTODAY_USD` (float): Объем сделок, в USD
- `NUMTRADES` (float): Количество сделок, штук
- `UPDATETIME` (datetime): Время обновления

**Полезные поля:** VALTODAY, NUMTRADES для статистики оборотов рынка.

### Запросы

#### boards (Справочники ИСС)
**Доступ:** general

**Параметры:**
- `language` (enum languages, optional): Язык

**Выходные поля:**
- `ID` (integer, primary): Системный ID
- `NAME` (string): Идентификатор
- `CAPTION` (string): Название
- `ENGINEID` (integer): Идентификатор торговой системы
- `MARKETID` (integer): Идентификатор рынка
- `IS_TRADED` (bool): Текущее состояние режима
- `IS_PRIMARY` (bool): Режим является основным для рынка

**Полезные поля:** NAME, CAPTION, IS_TRADED для информации о досках.

#### engines (Справочники ИСС)
**Доступ:** general

**Параметры:**
- `language` (enum languages, optional): Язык

**Выходные поля:**
- `ID` (integer, primary): Системный ID
- `NAME` (string): Идентификатор
- `CAPTION` (string): Название

**Полезные поля:** NAME, CAPTION для справочника систем.

#### markets (Справочники ИСС)
**Доступ:** general

**Параметры:**
- `language` (enum languages, optional): Язык

**Выходные поля:**
- `ID` (integer, primary): Системный ID
- `NAME` (string): Идентификатор
- `CAPTION` (string): Название
- `ENGINEID` (integer): Идентификатор торговой системы

**Полезные поля:** NAME, CAPTION для справочника рынков.

#### news.content (Новость)
**Доступ:** general

**Параметры:**
- `ID` (integer): Номер новости

**Выходные поля:**
- `ID` (integer, primary): Номер новости
- `CONTENT` (string): Содержание

**Полезные поля:** CONTENT для полного текста новости.

#### ticker.card (Карточка инструмента)
**Доступ:** general

**Параметры:**
- `ticker` (string, optional): Тикер
- `cardname` (enum cardnames, optional): Название карточки
- `language` (enum languages, optional): Язык
- `list` (bool, optional): Список карточек

**Выходные поля:**
- `CARDID` (string, primary): Идентификатор карточки
- `NAME` (string, primary): Имя
- `CAPTION` (string): Название
- `HINT` (string): Полное название
- `IS_HIDDEN` (bool): Видимость
- `SORT_ORDER` (integer): Сортировка
- `TYPE` (string): Тип
- `PRECISION` (integer): Точность
- `VALUE` (string): Значение
- `VALUE_INFO` (string): Примечание
- `TAG_ORDER` (string): Профиль карточки
- `TAG_CAPTION` (string): Имя профиля

**Полезные поля:** VALUE, CAPTION для детальной информации об инструменте.

## Рынок MXSE (Московская биржа ценных бумаг)

### Перечисления

#### Language
- `en`: Английский
- `ru`: Русский

#### TBuySell (Направленность заявки)
- `B`: Купля
- `S`: Продажа

#### TDPValIndicator (Индикатор наличия заявок)
- ` `: Нет заявок
- `S`: Мало
- `M`: Много
- `Y`: Есть

#### TSecStatus (Статус финансового инструмента)
- `A`: Операции разрешены
- `S`: Операции запрещены
- `N`: Заблокировано для торгов, разрешено исполнение сделок

#### TTradingStatus (Состояние торгов по инструменту)
- `N`: Недоступно для торгов
- `O`: Период открытия
- `C`: Торги закрыты
- `F`: Период закрытия
- `B`: Перерыв
- `T`: Торговая сессия
- `L`: Аукцион закрытия
- `D`: Аукцион крупными пакетами
- `I`: Дискретный аукцион
- `E`: Торги по цене Аукциона Закрытия
- `S`: Аукцион Открытия
- `A`: Аукцион: Фаза сбора заявок
- `a`: Аукцион: Фаза заключения сделок
- `b`: Аукцион: Фаза формирования реестра. Заявки заблокированы.
- `p`: Аукцион: Фаза параллельного сбора и удовлетворения заявок

#### intervals (Ширина свечи)
- `M1`: 1 минута
- `M10`: 10 минут
- `H1`: 1 час
- `D1`: 1 день
- `W1`: 1 неделя
- `m1`: 1 месяц
- `m3`: 1 квартал
- `Q1`: 1 квартал

### Потоки

#### candles (Свечи)
**Доступ:** general

**Параметры:**
- `ticker` (string): Тикер
- `interval` (enum intervals, optional): Ширина свечи
- `quantity` (integer, optional): Количество свечей
- `till` (datetime, optional): Не старше

**Выходные поля:**
- `FROM` (datetime, primary): Время с
- `TILL` (datetime): Включая
- `OPEN` (fixed): Открытие
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `CLOSE` (fixed): Закрытие
- `VALUE` (fixed): Объем
- `VOLUME` (integer): Объем, шт.

**Полезные поля:** OHLCV для ценных бумаг.

#### orderbooks (Котировки по инструменту)
**Доступ:** general

**Параметры:**
- `TICKER` (string): Инструмент

**Выходные поля:**
- `BUYSELL` (enum TBuySell): К/П
- `PRICE` (fixed): Цена
- `QUANTITY` (integer): Лоты
- `REPOVALUE` (fixed): Сумма РЕПО

**Полезные поля:** PRICE, QUANTITY, BUYSELL для книги заявок, REPOVALUE для сделок РЕПО.

#### securities (Финансовые инструменты)
**Доступ:** general

**Параметры:**
- `TICKER` (string): Инструмент
- `LANGUAGE` (enum Language, optional): Язык

**Выходные поля:**
- `TICKER` (string, primary): Инструмент
- `CAPTION` (string): Инструмент
- `LAST` (fixed): Последняя
- `CHANGE` (fixed): К последней пред. дня
- `BID` (fixed): Спрос
- `OFFER` (fixed): Предложение
- `HIGH` (fixed): Максимум
- `LOW` (fixed): Минимум
- `HIGHBID` (fixed): Лучший спрос
- `LOWOFFER` (fixed): Лучшее предложение
- `BIDDEPTHT` (integer): Совокупный спрос
- `OFFERDEPTHT` (integer): Совокупное предложение
- `VOLTODAY` (fixed): Количество за сегодня
- `VALTODAY` (integer): Объем за сегодня
- `NUMTRADES` (integer): Сделок за сегодня
- `LCLOSEPRICE` (fixed): Цена закрытия
- `LCURRENTPRICE` (fixed): Текущая цена
- `PREVPRICE` (fixed): Последняя предыдущего дня
- `WAPRICE` (fixed): Средневзвешенная цена
- `PREVWAPRICE` (fixed): Оценка пред. дня
- `PRICEMINUSPREVWAPRICE` (fixed): К оценке пред. дня
- `QTY` (integer): Лотов в последней
- `VALUE` (fixed): Объем в последней
- `BASEPRICE` (fixed): Базовый курс
- `MARKETPRICE` (fixed): Рыночная цена предыдущего дня
- `CURRENCYID` (string): Валюта расчетов
- `SETTLECODE` (string): Код расчетов
- `SETTLEDATE1` (date): Дата расчетов 1
- `SETTLEDATE2` (date): Дата расчетов 2
- `LOTSIZE` (integer): Размер лота
- `FACEUNIT` (string): Валюта номинала
- `FACEVALUE` (fixed): Номинал
- `ISSUESIZE` (integer): Объем выпуска
- `ADMITTEDQUOTE` (fixed): Признаваемая котировка
- `TRADINGSTATUS` (enum TTradingStatus): Состояние
- `STATUS` (enum TSecStatus): Статус
- `DPVALINDICATORBUY` (enum TDPValIndicator): Заявки на покупку (АКП)
- `DPVALINDICATORSELL` (enum TDPValIndicator): Заявки на продажу (АКП)
- `TIME` (time): Время последней
- `MINSTEP` (fixed): Мин. шаг цены заявки
- `PRICEMINSTEP` (fixed): Мин. шаг цены

**Полезные поля:** LAST, BID, OFFER, CHANGE, VOLTODAY, VALTODAY, NUMTRADES для всесторонних данных торгов.

## Рынок MXSEBB (Московская биржа ценных бумаг - доска облигаций)

### Перечисления

#### Language
- `en`: Английский
- `ru`: Русский

#### TBuySell (Направленность)
- `B`: Купля
- `S`: Продажа

### Потоки

#### orderbooks (Котировки)
**Доступ:** general

**Параметры:**
- `TICKER` (string): Инструмент

**Выходные поля:**
- `BUYSELL` (enum TBuySell): К/П
- `PRICE` (fixed): Ставка, %
- `QUANTITY` (integer): Лоты
- `VALUE` (fixed): Объем

**Полезные поля:** PRICE, QUANTITY, VALUE для книги заявок облигаций.

#### securities (Справочник бумаг)
**Доступ:** general

**Параметры:**
- `TICKER` (string): Инструмент
- `LANGUAGE` (enum Language, optional): Язык

**Выходные поля:**
- `TICKER` (string, primary): Инструмент
- `CAPTION` (string): Инструмент

**Полезные поля:** Базовая идентификация инструмента.

## Примеры использования

### Подписка на данные по инструментам
```
SUBSCRIBE
id: sub1
destination: MXSE.securities
selector: TICKER="SBER"
```

### Подписка на книгу заявок
```
SUBSCRIBE
id: sub2
destination: MXSE.orderbooks
selector: TICKER="SBER"
```

### Подписка на свечи
```
SUBSCRIBE
id: sub3
destination: MXSE.candles
selector: ticker="SBER" and interval="M1"
```

### Поиск инструментов
```
REQUEST
id: req1
destination: SEARCH.ticker
selector: pattern="SBER*"
```

## Замечания по полезным полям ответа

- **Реальное время торгов**: LAST, BID, OFFER, CHANGE, VOLUME, VALUE
- **Глубина рынка**: BIDDEPTHT, OFFERDEPTHT, уровни книги заявок
- **Исторический анализ**: HIGH, LOW, данные свечей
- **Анализ объема**: VOLTODAY, VALTODAY, NUMTRADES
- **Информация об инструменте**: LOTSIZE, MINSTEP, FACEVALUE
- **Мониторинг статуса**: TRADINGSTATUS, STATUS

Поле `properties.type` в ответах указывает тип обновления:
- `snapshot`: Полная замена данных
- `updates`: Инкрементные обновления
- `removal`: Удаление данных

Первичные ключевые поля используются для сопоставления данных и обновлений.
