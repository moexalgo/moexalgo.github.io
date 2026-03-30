---
sidebar_position: 6
sidebar_label: ISS Calendar
custom_edit_url: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Машиночитаемый календарь ИСС

Для всех методов работает фильтрация `from` и `till` — внутри одного года можно указать любую дату или период.
Для пагинации используйте параметр `start` (номер следующей строки).

---

## Все рынки

```
https://apim.moex.com/iss/calendars.json
```

### off_days

| Field                       | Type        | Description                                                     | Example value    |
|-----------------------------|-------------|-----------------------------------------------------------------|------------------|
| tradedate                   | date:10     | Календарная дата торгов                                         | 2025-01-01       |
| currency_workday            | int64       | Признак даты (торговый/неторговый день) по Валютному рынку      | 0                |
| currency_trade_session_date | date:30     | Дата торговой сессии ДСВД по Валютному рынку                    | null             |
| currency_reason             | string:3    | Расшифровка признака даты по Валютному рынку                    | H                |
| futures_workday             | int64       | Признак даты (торговый/неторговый день) по Срочному рынку       | 0                |
| futures_trade_session_date  | date:30     | Дата торговой сессии ДСВД по Срочному рынку                     | null             |
| futures_reason              | string:3    | Расшифровка признака даты по Срочному рынку                     | H                |
| stock_workday               | int64       | Признак даты (торговый/неторговый день) по Фондовому рынку      | 0                |
| stock_trade_session_date    | date:30     | Дата торговой сессии ДСВД по Фондовому рынку                    | null             |
| stock_reason                | string:3    | Расшифровка признака даты по Фондовому рынку                    | H                |

**Признак `workday`:** `0` — неторговый, `1` — торговый, `null` — нет данных.

**Признак `reason`:** `H` — holiday (праздник, неторговый); `W` — weekends (ДСВД); `N` — normal (обычный торговый); `T` — transfered (торговый в выходной, не ДСВД).

---

## Фондовый рынок (ФР)

```
https://apim.moex.com/iss/calendars/stock.json
```

### off_days

| Field               | Type        | Description                                          | Example value        |
|---------------------|-------------|------------------------------------------------------|----------------------|
| tradedate           | date:10     | Календарная дата торгов                              | 2025-01-01           |
| is_traded           | int32       | Признак даты (торговый/неторговый день)              | 0                    |
| trade_session_date  | date:10     | Дата торговой сессии, активна для ДСВД               | 2025-03-03           |
| reason              | string:3    | Расшифровка признака даты                            | W                    |
| updatetime          | datetime:19 | Дата и время обновления записи в ИСС                 | 2025-03-01 10:25:04  |

**Признак `is_traded`:** `0` — неторговый, `1` — торговый, `null` — данных нет.

**Признак `reason`:** `H` — holiday; `W` — weekends (ДСВД); `N` — normal; `T` — transfered.

---

```
https://apim.moex.com/iss/calendars/stock/static.json?iss.only=markets_classifier
https://apim.moex.com/iss/calendars/stock/static.json?iss.only=boards_classifier
```

### markets_classifier + boards_classifier

<Tabs>
<TabItem value="markets" label="markets_classifier">

**`markets_classifier`** — статистический справочник классификаторов рынков:

| Field | Type       | Description       | Example value       |
|-------|------------|-------------------|---------------------|
| name  | string:189 | Код рынка          | FNDT                |
| title | string:765 | Наименование рынка | Фондовый рынок Т+   |

</TabItem>
<TabItem value="boards" label="boards_classifier">

**`boards_classifier`** — статистический справочник режимов торгов:

| Field                   | Type      | Description                                                      | Example value          |
|-------------------------|-----------|------------------------------------------------------------------|------------------------|
| stock_market_classifier | string:12 | Код рынка                                                        | FNDT                   |
| boardid                 | string:12 | Код режима торгов                                                | TQBR                   |
| title                   | string:90 | Наименование режима торгов                                       | Т+: Акции и ДР - безадрес. |
| currencyid              | string:9  | Валюта режима торгов (`null` — используется валюта расчётов бумаги) | RUB                 |

</TabItem>
</Tabs>

---

```
https://apim.moex.com/iss/calendars/stock/securities/boards.json
```

### securities_boards

| Field                | Type        | Description                                                    | Example value  |
|----------------------|-------------|----------------------------------------------------------------|----------------|
| tradedate            | date:10     | Календарная дата торгов                                        | 2024-10-18     |
| trade_session_date   | date:10     | Дата торговой сессии, активна для ДСВД                         | 2024-10-18     |
| secid                | string:36   | Тикер инструмента                                              | ABIO           |
| isin                 | string:36   | Код инструмента (ISIN)                                         | RU000A0JNAB6   |
| boards               | string:3072 | Перечень режимов торгов через запятую в дату `tradedate`       | CIQB,CIQR,CPEO |

---

```
https://apim.moex.com/iss/calendars/stock/session/settlecodes.json
```

### settlecodes

| Field       | Type        | Description                                                        | Example value        |
|-------------|-------------|--------------------------------------------------------------------|----------------------|
| tradedate   | date:10     | Дата торгов                                                        | 2025-01-23           |
| settlecode  | string:36   | Код расчёта                                                        | A0                   |
| title       | string:96   | Наименование кода расчёта                                          | A0 calendar days     |
| settledate  | date:10     | Дата расчётов адресной сделки или первой части РЕПО               | 2024-10-18           |
| settledate2 | date:10     | Дата расчётов 2 (исполнение второй части РЕПО; `null` — не предусмотрена) | null          |
| updatetime  | datetime:19 | Дата и время обновления записи в ИСС                              | 2024-10-18 06:23:54  |

---

```
https://apim.moex.com/iss/calendars/stock/securities/suspended/details.json
```

### suspended + suspended.reasons

**`suspended`** — запреты торгов по событиям на будущие периоды:

| Field        | Type        | Description                                                            | Example value        |
|--------------|-------------|------------------------------------------------------------------------|----------------------|
| secid        | string:36   | Тикер инструмента                                                      | RU000A107KC4         |
| reason_id    | string:765  | Идентификаторы причин запрета (список через запятую из `suspended.reasons`) | 1,4,9,11         |
| date_from    | date:10     | Дата начала события                                                    | 2025-01-01           |
| date_till    | date:10     | Дата окончания события (`null` — неизвестна или без конечной даты)     | null                 |
| boardid      | string:765  | Режим торгов (`null` — запрет на всех допущенных режимах)              | CIQB,TQCB            |
| settle_codes | string:3072 | Код расчёта (`null` — нет запрещённых кодов)                          | null                 |
| changedate   | date:10     | Дата загрузки или изменения записи на стороне бэк-офиса               | null                 |
| updatetime   | datetime:19 | Дата и время обновления записи в ИСС                                   | 2025-01-23 17:15:26  |

**`suspended.reasons`** — справочник причин запретов:

| Field | Type       | Description                     | Example value                                                   |
|-------|------------|---------------------------------|-----------------------------------------------------------------|
| id    | int32      | Числовой идентификатор причины   | 1                                                               |
| title | string:384 | Описание причины запрета         | Торги не проводятся в дату погашения облигаций                  |

---

```
https://apim.moex.com/iss/calendars/stock/securities/changes.json
```

### securities + securities.attributes

**`securities`** — изменения атрибутов по бумаге (по умолчанию — текущая дата):

| Field          | Type        | Description                                         | Example value           |
|----------------|-------------|-----------------------------------------------------|-------------------------|
| updatetime     | datetime:19 | Дата события                                        | 2024-09-28 00:20:29     |
| action         | string:24   | Признак записи                                      | updated                 |
| secid          | string:72   | Тикер инструмента                                   | RU000A0JX3M0            |
| attribute_name | string:189  | Наименование атрибута (из `securities.attributes`)  | FACEVALUE               |
| before_value   | string:3072 | Значение до изменения                               | 69.12                   |
| after_value    | string:3072 | Значение после изменения                            | 64.92                   |

**Признак `action`:** `updated` — изменено; `inserted` — добавлено; `removed` — удалено.

**`securities.attributes`** — справочник атрибутов:

| Field | Type       | Description               | Example value  |
|-------|------------|---------------------------|----------------|
| name  | string:189 | Наименование атрибута      | COUPONDATE     |
| type  | string:3   | Тип поля                   | D              |
| title | string:765 | Описание атрибута          | Дата выплаты купона |

**Типы полей:** `S` — строка; `N` — число; `D` — дата; `T` — время; `I` — целое число; `B` — bool.

---

```
https://apim.moex.com/iss/calendars/stock/session/suspended.json
```

### suspended + suspended.reasons

**`suspended`** — исключения по кодам расчётов на парах бумага–борд на текущий торговый день:

| Field        | Type        | Description                                        | Example value        |
|--------------|-------------|----------------------------------------------------|----------------------|
| tradedate    | date:10     | Дата торгов                                        | 2024-08-21           |
| secid        | string:36   | Код инструмента                                    | MGTS                 |
| boardid      | string:765  | Режим торгов                                       | PSEQ                 |
| reason_id    | string:765  | Идентификатор причины (из `suspended.reasons`)     | 5002                 |
| settle_codes | string:3072 | Коды расчётов                                      | Z0                   |
| updated_at   | datetime:19 | Дата и время обновления записи в ИСС               | 2024-10-01 18:10:16  |

**`suspended.reasons`** — справочник причин запретов:

| Field | Type       | Description                     | Example value                                                  |
|-------|------------|---------------------------------|----------------------------------------------------------------|
| id    | int32      | Числовой идентификатор причины   | 1                                                              |
| title | string:384 | Описание причины запрета         | Торги не проводятся в дату погашения облигаций                 |

---

```
https://apim.moex.com/iss/calendars/stock/session.json
```

### session_schedule + session_schedule.types

**`session_schedule`** — расписание торгов по режимам (включая периоды внутри режима, кроме дискретного аукциона):

| Field          | Type        | Description                                                                     | Example value        |
|----------------|-------------|---------------------------------------------------------------------------------|----------------------|
| tradedate      | date:10     | Дата торгов                                                                     | 2024-10-23           |
| tradingsession | int32       | Признак торговой сессии                                                         | 1                    |
| boardid        | string:12   | Режим торгов                                                                    | CPEY                 |
| secid          | string:36   | Код инструмента (пустое значение — для всех инструментов в дату `tradedate`)    | RU000A109478         |
| type           | string:30   | Тип сессии (из `session_schedule.types`)                                        | system               |
| time_from      | time:10     | Время начала периода                                                            | 15:30:00             |
| time_till      | time:10     | Время окончания периода                                                         | 18:59:59             |
| updatetime     | datetime:19 | Дата и время обновления записи в ИСС                                            | 2024-10-23 06:30:10  |

**Признак `tradingsession`:** `0` — утренняя; `1` — основная; `2` — вечерняя; `5` — ДСВД; `-999` — не предусмотрено (например, OTC режим MPAU).

**`session_schedule.types`** — справочник типов периодов:

| Field | Type       | Description           | Example value                           |
|-------|------------|-----------------------|-----------------------------------------|
| type  | string:51  | Тип торгового периода  | oa_booking                              |
| title | string:282 | Описание периода       | Аукцион открытия - период сбора заявок  |

---

```
https://apim.moex.com/iss/archives/files/calendars_stock_suspended_planned
```

### files — calendars_stock_suspended_planned

**`files`** — архив ZIP-файлов с посчитанными данными по запретам торгов (`suspended`). Данные предоставляются на период с текущего календарного года + 3 года вперёд. Структура файлов соответствует таблице `suspended` эндпоинта `/iss/calendars/stock/securities/suspended/details.json`.

| Field      | Type        | Description                                         | Example value                                              |
|------------|-------------|-----------------------------------------------------|------------------------------------------------------------|
| group_name | string:153  | Наименование группы                                 | calendars_stock_suspended_planned                          |
| extension  | string:12   | Формат архива (`csv` или `json`)                    | csv                                                        |
| date_from  | date:30     | Дата начала данных в архиве (`null` — не задана)    | null                                                       |
| date_till  | date:30     | Дата окончания данных в архиве (`null` — не задана) | null                                                       |
| file_size  | int64       | Размер архива в байтах                              | 20683                                                      |
| rows_count | int64       | Количество строк в файле                            | 3750                                                       |
| url        | string:765  | Относительный путь для скачивания архива            | /iss/downloads/calendars/stock/suspended_details.csv.zip   |

---

```
https://apim.moex.com/iss/archives/files/calendar_stock_session_suspended_latest
```

### files — calendar_stock_session_suspended_latest

**`files`** — архив ZIP-файлов с последней выгрузкой таблицы `suspended` по кодам расчётов (`/iss/calendars/stock/session/suspended.json`).

| Field      | Type        | Description                                | Example value                                                       |
|------------|-------------|--------------------------------------------|---------------------------------------------------------------------|
| group_name | string:153  | Наименование группы                        | calendar_stock_session_suspended_latest                             |
| extension  | string:12   | Формат архива (`csv` или `json`)           | csv                                                                 |
| date_from  | date:30     | Дата начала данных в архиве                | 2024-08-21                                                          |
| date_till  | date:30     | Дата окончания данных в архиве             | 2024-08-21                                                          |
| file_size  | int64       | Размер архива в байтах                     | 21324                                                               |
| rows_count | int64       | Количество строк в файле                   | 5870                                                                |
| url        | string:765  | Относительный путь для скачивания архива   | /iss/downloads/calendars/stock/session_suspended_2024-08-21.csv.zip |

## Срочный рынок (СР)

```
https://apim.moex.com/iss/calendars/futures.json
```

### off_days

| Field               | Type        | Description                                          | Example value        |
|---------------------|-------------|------------------------------------------------------|----------------------|
| tradedate           | date:10     | Календарная дата торгов                              | 2025-01-01           |
| is_traded           | int32       | Признак даты (торговый/неторговый день)              | 0                    |
| trade_session_date  | date:10     | Дата торговой сессии, активна для ДСВД               | null                 |
| reason              | string:3    | Расшифровка признака даты                            | H                    |
| updatetime          | datetime:19 | Дата и время обновления записи в ИСС                 | 2025-02-22 14:23:44  |

**Признак `is_traded`:** `0` — неторговый, `1` — торговый, `null` — данных нет.

**Признак `reason`:** `H` — holiday; `W` — weekends (ДСВД); `N` — normal; `T` — transfered.

---

```
https://apim.moex.com/iss/calendars/futures/securities.json
```

### securities (опционы + фьючерсы)

Блок `securities` содержит два раздела: опционы (options) и фьючерсы (forts).

<Tabs>
<TabItem value="options" label="Опционы">

| Field             | Type       | Description                                                        | Example value        |
|-------------------|------------|--------------------------------------------------------------------|----------------------|
| asset_type_name   | string:96  | Тип базового актива                                                | Акции                |
| asset_code        | string:36  | Код базового актива                                                | SBRF                 |
| series_name       | string:93  | Код опционной серии                                                | SBRF-6.24M2          |
| series_type       | string:3   | Тип серии: `W` — недельная; `M` — месячная; `Q` — квартальная     | M                    |
| exec_type         | string:3   | Тип погашения: `A` — Американский; `E` — Европейский              | A                    |
| margin_style      | string:3   | Тип опциона: `M` — маржируемый; `P` — премиальный                  | M                    |
| contract_name     | string:765 | Наименование контракта                                             | Маржируемый опцион…  |
| expiration_date   | date:10    | Дата экспирации                                                    | 2024-03-27           |
| expiration_type   | string:765 | Тип экспирации: `mc` — основной клиринг; `tc` — в торгах          | tc                   |
| expiration_time   | time:10    | Время экспирации (если клиринг в торгах)                           | 00:00:00             |
| weekend_session   | int32      | Торгуется в ДСВД: `0` — да; `1` — нет                             | 0                    |

</TabItem>
<TabItem value="forts" label="Фьючерсы (FORTS)">

| Field           | Type       | Description                                                   | Example value                       |
|-----------------|------------|---------------------------------------------------------------|-------------------------------------|
| secid           | string:51  | Код фьючерса                                                  | CNYRUBF                             |
| asset_code      | string:51  | Код базового актива                                           | CNYRUBTOM                           |
| shortname       | string:189 | Краткое наименование                                          | CNYRUBF                             |
| exec_type       | string:3   | Тип фьючерса: `D` — поставочный; `S` — расчётный             | S                                   |
| contract_name   | string:9216  | Наименование контракта                                        | Однодневный фьючерсный контракт…    |
| expiration_date | date:10    | Дата экспирации                                               | 2100-01-01                          |
| end_date        | date:10    | Последний день исполнения                                     | 2100-01-01                          |
| expiration_type | string:9216  | Тип экспирации: `mc` — основной клиринг; `tc` — в торгах     | tc                                  |
| expiration_time | string:3072| Время экспирации (если клиринг в торгах)                      | 00:00:00                            |
| weekend_session | int32      | Торгуется в ДСВД: `0` — да; `1` — нет                        | 0                                   |

</TabItem>
</Tabs>

---

```
https://apim.moex.com/iss/calendars/futures/session.json
```

### session_schedule

**`session_schedule`** — расписание сессий:

| Field      | Type        | Description                                              | Example value           |
|------------|-------------|----------------------------------------------------------|-------------------------|
| tradedate  | date:10     | Дата торгов                                              | 2024-03-27              |
| secid      | string:36   | Код контракта (`-` — для всех инструментов и режимов)    | -                       |
| boardid    | string:12   | Идентификатор борда (`-` — для всех)                     | -                       |
| type       | string:45   | Тип сессии                                               | morning_session         |
| time_from  | datetime:19 | Дата и время начала сессии                               | 2024-03-27 09:00:00     |
| time_till  | datetime:19 | Дата и время окончания сессии                            | 2024-03-27 10:00:00     |
| updatetime | datetime:19 | Дата и время обновления записи в ИСС                     | 2024-03-27 00:24:43     |

Дополнительные поля: `settlement_session` (начало расчётной сессии), `clearing_session` (начало клиринговой сессии).

**`session_schedule.types`** — справочник типов периодов:

| Field | Type       | Description           | Example value                           |
|-------|------------|-----------------------|-----------------------------------------|
| type  | string:51  | Тип торгового периода  | oa_booking                              |
| title | string:282 | Описание периода       | Аукцион открытия - период сбора заявок  |

---

## Валютный рынок (ВР)

```
https://apim.moex.com/iss/calendars/currency.json
```

### off_days

| Field               | Type        | Description                                          | Example value        |
|---------------------|-------------|------------------------------------------------------|----------------------|
| tradedate           | date:10     | Календарная дата торгов                              | 2025-01-01           |
| is_traded           | int32       | Признак даты (торговый/неторговый день)              | 0                    |
| trade_session_date  | date:10     | Дата торговой сессии, активна для ДСВД               | null                 |
| reason              | string:3    | Расшифровка признака даты                            | H                    |
| updatetime          | datetime:19 | Дата и время обновления записи в ИСС                 | 2025-02-22 14:23:44  |

**Признак `is_traded`:** `0` — неторговый, `1` — торговый, `null` — данных нет (будут скорректированы).

**Признак `reason`:** `H` — holiday; `W` — weekends (ДСВД); `N` — normal; `T` — transfered.

```
https://apim.moex.com/iss/calendars/currency.json
```

### currency_settlements

| Field      | Type        | Description                                     | Example value        |
|------------|-------------|-------------------------------------------------|----------------------|
| tradedate  | date:10     | Дата                                            | 2024-01-01           |
| currencyid | string:9    | Валюта торгов (`-` — для всех валют)            | AED                  |
| is_traded  | int32       | Признак (расчётная/нерасчётная дата)            | 0                    |
| updatetime | datetime:19 | Дата и время обновления записи в ИСС            | 2024-01-17 18:46:01  |

**Признак `is_traded`:** `0` — нерасчётный день по валюте, расчётов нет.

```
https://apim.moex.com/iss/calendars/currency.json
```

### boards

| Field    | Type       | Description                     | Example value                    |
|----------|------------|---------------------------------|----------------------------------|
| boardid  | string:12  | Идентификатор борда              | CETS                             |
| title    | string:381 | Наименование борда на русском    | Системные сделки - безадрес.     |
| title_en | string:381 | Наименование борда на английском | System deals - order-driven      |
| is_traded | int32     | Признак активного борда          | 1                                |

**Признак `is_traded`:** `0` — борд удалён; `1` — борд активен.

---

```
https://apim.moex.com/iss/calendars/currency/session.json
```

### securities + session_schedule

**`securities`** — инструменты ВР в текущий торговый день:

| Field       | Type        | Description                              | Example value          |
|-------------|-------------|------------------------------------------|------------------------|
| tradedate   | date:10     | Дата                                     | 2025-01-23             |
| secid       | string:36   | Тикер инструмента                        | CNYRUB_TOM             |
| boardid     | string:12   | Идентификатор борда                      | CETS                   |
| currencyid  | string:12   | Валюта торгов                            | RUB                    |
| faceunit    | string:12   | Валюта номинала                          | CNY                    |
| prevdate    | date:10     | Предыдущий торговый день                 | 2025-01-22             |
| settledate  | date:10     | Расчётный день                           | 2025-01-24             |
| updatetime  | datetime:19 | Дата и время обновления записи в ИСС     | 2025-01-23 06:15:07    |

**`session_schedule`** — расписание торгов на текущий торговый день:

| Field      | Type        | Description                                     | Example value          |
|------------|-------------|-------------------------------------------------|------------------------|
| tradedate  | date:10     | Дата                                            | 2025-01-23             |
| boardid    | string:36   | Идентификатор борда                             | CETS                   |
| secid      | string:12   | Тикер инструмента                               | CNYRUB_TOM             |
| type       | string:51   | Тип периода (из `session_schedule.types`)        | oa_booking             |
| time_from  | time:10     | Время начала периода                            | 09:50:00               |
| time_till  | time:10     | Время окончания периода (`null` — не заполнено) | 09:59:30               |
| updatetime | datetime:19 | Дата и время обновления записи в ИСС            | 2025-01-23 06:22:13    |

**`session_schedule.types`** — справочник типов периодов:

| Field | Type       | Description              | Example value                                              |
|-------|------------|--------------------------|------------------------------------------------------------|
| type  | string:51  | Тип торгового периода     | oa_booking                                                 |
| title | string:282 | Описание периода          | Аукцион открытия - период сбора заявок                     |

Значения `type`: `oa_booking`, `oa_pricing`, `system`, `neg_multiple`, `neg_single`, `neg_service_break`.

---

```
https://apim.moex.com/iss/calendars/currency/securities.json
```

### suspended + settledate_shifts

**`suspended`** — неторговые дни по инструментам ВР на год вперёд:

| Field      | Type        | Description                              | Example value          |
|------------|-------------|------------------------------------------|------------------------|
| tradedate  | date:10     | Дата (торги инструментом заблокированы)  | 2025-01-03             |
| secid      | string:36   | Тикер инструмента                        | CHYRUB_TOD             |
| boardid    | string:12   | Основной борд (primary board)            | CNGD                   |
| updatetime | datetime:19 | Дата и время обновления записи в ИСС     | 2024-12-19 13:13:20    |

**`settledate_shifts`** — изменения дат расчётов на год вперёд:

| Field      | Type        | Description                                        | Example value          |
|------------|-------------|----------------------------------------------------|------------------------|
| tradedate  | date:10     | Дата торгов                                        | 2025-01-03             |
| secid      | string:36   | Тикер инструмента                                  | CNYRUB_TOM             |
| settledate | date:10     | Дата расчётов (сдвинутая)                          | 2025-01-09             |
| boardid    | string:12   | Основной борд                                      | CETS                   |
| updatetime | datetime:19 | Дата и время обновления записи в ИСС               | 2024-10-03 18:43:14    |

---

```
https://apim.moex.com/iss/calendars/currency/changes.json
```

### changes

| Field      | Type        | Description                                      | Example value          |
|------------|-------------|--------------------------------------------------|------------------------|
| updatetime | datetime:19 | Дата и время обновления записи в ИСС             | 2025-01-03 14:10:25    |
| action     | string:36   | Статус записи                                    | inserted               |
| tradedate  | date:10     | Дата                                             | 2025-03-25             |
| secid      | string:36   | Тикер инструмента                                | KZTRUB_TOD             |

**Признак `action`:** `inserted` — запись добавлена; `removed` — запись удалена.

---