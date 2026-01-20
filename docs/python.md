---
custom_edit_url: null
---

# MOEXAlgo Python Library

## Market - все инструменты по рынку
:::tip
EQ - акции, FO - фьючерсы, FX - валюта
:::

### alerts

Возвращает MegaAlert по заданным параметрам

```python
alerts(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `date`: Дата данных. Если не указано, данные выдаются за сегодняшнее число.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### candles

Две последние минутные свечи по всем инструментам рынка

```python
candles(native: bool = False)
```

**Параметры:**
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### futoi

Метрики FUTOI по всем инструментам рынка (только для futures)

```python
futoi(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `date`: Дата данных. Если не указано, данные выдаются за сегодняшнее число.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### hi2

Метрики Hi2 (индекс рыночной концентрации)

```python
hi2(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `date`: Дата данных. Если не указано, данные выдаются за сегодняшнее число.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### marketdata

Статистическая информация о всех инструментах рынка

```python
marketdata(*fields: str, native: bool = False)
```

**Параметры:**
- `fields`: Поля для отображения; «*» все поля
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### obstats

Метрики ObStat по заданным параметрам

```python
obstats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `date`: Дата данных. Если не указано, данные выдаются за сегодняшнее число.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### orderstats

Метрики OrderStat по заданным параметрам

```python
orderstats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `date`: Дата данных. Если не указано, данные выдаются за сегодняшнее число.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### tickers

Информация о всех инструментах рынка

```python
tickers(*fields: str, native: bool = False)
```

**Параметры:**
- `fields`: Поля для отображения; «*» все поля
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### trades

Последние сделки по всем инструментам рынка

```python
trades(tradeno: int | None = None, recno: int | None = None, *, native: bool = False)
```

**Параметры:**
- `tradeno`: Номер сделки до которого выдаются данные (для валютного и фондового рынка).
- `recno`: Номер порядка заключения сделок (для срочного рынка).
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### tradestats

Метрики TradeStat по заданным параметрам

```python
tradestats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `date`: Дата данных. Если не указано, данные выдаются за сегодняшнее число.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

## Ticker - данные по инструменту

### alerts

MegaAlert по инструменту

```python
alerts(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `start`: Дата начала диапазона выдачи данных.
- `end`: Дата конца диапазона выдачи данных.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### candles

Свечи инструмента по заданным параметрам

```python
candles(start: str | date, end: str | date, period: str | int | CandlePeriod | None = None, *, offset: int = 0, latest: bool = False, native: bool = False)
```

**Параметры:**
- `start`: Дата начала диапазона выдачи данных.
- `end`: Дата конца диапазона выдачи данных.
- `period`: Период свечи: "1min", "5min", "10min", "15min", "20min", "30min", "1h", "2h", "3h", "6h", "12h", "1D", "5D", "10D", "1W", "2W", "4W", "1M"
- `offset`: Начальная позиция в последовательности записей.
- `latest`: Включает режим выдачи последних записей в наборе.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### futoi

Метрики FUTOI по инструменту (только для futures)

```python
futoi(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `start`: Дата начала диапазона выдачи данных.
- `end`: Дата конца диапазона выдачи данных.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### hi2

Метрики Hi2 (индекс рыночной концентрации) по инструменту

```python
hi2(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `start`: Дата начала диапазона выдачи данных.
- `end`: Дата конца диапазона выдачи данных.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### info

Информация об инструменте

```python
info(*fields: str, native: bool = False)
```

**Параметры:**
- `fields`: Поля для отображения; «*» все поля
- `native`: Если True всегда возвращается словарь.

**Возвращает:** `dict[str, Any] | DataFrame`

### obstats

Метрики ObStat по инструменту

```python
obstats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `start`: Дата начала диапазона выдачи данных.
- `end`: Дата конца диапазона выдачи данных.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### orderbook

Текущий стакан лучших цен

```python
orderbook(native: bool = False)
```

**Параметры:**
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### orderstats

Метрики OrderStat по инструменту

```python
orderstats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `start`: Дата начала диапазона выдачи данных.
- `end`: Дата конца диапазона выдачи данных.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### trades

Сделки за последний день или начиная с заданного номера

```python
trades(tradeno: int = None, recno: int | None = None, *, offset: int = 0, latest: bool = False, native: bool = False)
```

**Параметры:**
- `tradeno`: Номер сделки с которого выдаются данные (для акций и валют).
- `recno`: Номер порядка заключения сделок (для фьючерсов).
- `offset`: Начальная позиция в последовательности записей.
- `latest`: Включает режим выдачи последних записей в наборе.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`

### tradestats

Метрики TradeStat по инструменту

```python
tradestats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False)
```

**Параметры:**
- `start`: Дата начала диапазона выдачи данных.
- `end`: Дата конца диапазона выдачи данных.
- `latest`: Включает режим выдачи последних записей в наборе.
- `offset`: Начальная позиция в последовательности записей.
- `native`: Если True всегда возвращается итератор словарей.

**Возвращает:** `Iterable[dict[str, Any]] | DataFrame`
