Получение данных по тикеру
**************************

Методы для получения данных по инструменту делятся на три группы:

* Основные:
     * *.info* - Информация об инструменте;

     * *.trades* - Сделки за последний день;

     * *.candles* - Свечи с различными периодами.

     * *.orderbook* - Текущий стакан лучших цен;

* Данные ALGOPACK:
     * *.tradestats* - Метрики **TradeStat** по инструменту;

     * *.orderstats* - Метрики **OrderStat** по инструменту;

     * *.obstats* - Метрики **ObStat** по инструменту;

     * *.alerts* - Метрики **MegaAlert** по инструменту;

     * *.hi2* - Метрики **Hi2** по инструменту.

* Данные FUTOI:
     * *.futoi* - Метрики **FUTOI** по инструменту.

Примечание:

  Настоятельно рекомендуется использовать хелпер *moexalgo.Ticker* для
  объекта методы которого будут использованы для доступа к данным по
  инструменту. Параметром этого метода является символьный код
  инструмента. Таблицы распределения доступных методов аналогична той
  что представлена в Получение данных по рынкам.

   import moexalgo
   sber = moexalgo.Ticker('SBER')
   sber.candles(start='2025-01-01', end='2025-01-31', period='1h')

   import moexalgo
   moex = moexalgo.Ticker('MOEX')
   moex.orderstats(start='2025-01-01', end='2025-01-31')


API
===

class moexalgo.engines.stock.Ticker(market: CommonMarket, boardid: str, secid: str, decimals: int, delisted: bool)

   Обобщенный класс *Ticker* для „stock“.

   alerts(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает MegaAlert (оповещение об аномальной рыночной
      активности) по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   candles(start: str | date, end: str | date, period: str | int | CandlePeriod | None = None, *, offset: int = 0, latest: bool = False, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает свечи инструмента по заданным параметрам.


      Parameters
      ----------

      start:
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      period:
         Период свечи, возможны следующие строковые значения: „1min“,
         „5min“, „10min“, „15min“, „20min“, „30min“, „1h“, „2h“, „3h“,
         „6h“, „12h“, „1D“, „5D“, „10D“, „1W“, „2W“, „4W“, „1M“; и
         числовые: 1 (1 минута), 10 (10 минут), 60 (1 час), 24 (1
         день), 7 (1 неделя), 31 (1 месяц).

      offset :
         Начальная позиция в последовательности записей, by default 0.

      latest :
         Включает режим выдачи последних *latest* записей в наборе, by
         default False.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   hi2(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *Hi2* (индекс рыночной концентрации) по
      заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   info(*fields: str, native: bool = False) -> dict[str, Any] | DataFrame

      Информация об инструменте.


      Parameters
      ----------

      fields :
         Поля для отображения; «*» все поля

      native :
         Если флаг выставлен в *True* всегда возвращается словарь.

   obstats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *ObStat* по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   orderbook(native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает текущий стакан лучших цен.


      Parameters
      ----------

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   orderstats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *OrderStat* по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   trades(tradeno: int = None, *, offset: int = 0, latest: bool = False, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает сделки за последний день или начиная с заданного
      *tradeno*.


      Parameters
      ----------

      tradeno :
         Номер сделки с которого выдаются данные, если не задано, то с
         начала дня.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   tradestats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *TradeStat* по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

class moexalgo.engines.currency.Ticker(market: CommonMarket, boardid: str, secid: str, decimals: int, delisted: bool)

   Обобщенный класс *Ticker* для валютного рынка.

   alerts(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает MegaAlert (оповещение об аномальной рыночной
      активности) по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   candles(start: str | date, end: str | date, period: str | int | CandlePeriod | None = None, *, offset: int = 0, latest: bool = False, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает свечи инструмента по заданным параметрам.


      Parameters
      ----------

      start:
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      period:
         Период свечи, возможны следующие строковые значения: „1min“,
         „5min“, „10min“, „15min“, „20min“, „30min“, „1h“, „2h“, „3h“,
         „6h“, „12h“, „1D“, „5D“, „10D“, „1W“, „2W“, „4W“, „1M“; и
         числовые: 1 (1 минута), 10 (10 минут), 60 (1 час), 24 (1
         день), 7 (1 неделя), 31 (1 месяц).

      offset :
         Начальная позиция в последовательности записей, by default 0.

      latest :
         Включает режим выдачи последних *latest* записей в наборе, by
         default False.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   hi2(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *Hi2* (индекс рыночной концентрации) по
      заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   info(*fields: str, native: bool = False) -> dict[str, Any] | DataFrame

      Информация об инструменте.


      Parameters
      ----------

      fields :
         Поля для отображения; «*» все поля

      native :
         Если флаг выставлен в *True* всегда возвращается словарь.

   obstats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *ObStat* по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   orderbook(native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает текущий стакан лучших цен.


      Parameters
      ----------

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   orderstats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *OrderStat* по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   trades(tradeno: int = None, *, offset: int = 0, latest: bool = False, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает сделки за последний день или начиная с заданного
      *tradeno*.


      Parameters
      ----------

      tradeno :
         Номер сделки с которого выдаются данные, если не задано, то с
         начала дня.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   tradestats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *TradeStat* по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

class moexalgo.engines.futures.Ticker(market: CommonMarket, boardid: str, secid: str, decimals: int, delisted: bool)

   Обобщенный класс *Ticker* для срочного рынка.

   alerts(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает MegaAlert (оповещение об аномальной рыночной
      активности) по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   candles(start: str | date, end: str | date, period: str | int | CandlePeriod | None = None, *, offset: int = 0, latest: bool = False, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает свечи инструмента по заданным параметрам.


      Parameters
      ----------

      start:
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      period:
         Период свечи, возможны следующие строковые значения: „1min“,
         „5min“, „10min“, „15min“, „20min“, „30min“, „1h“, „2h“, „3h“,
         „6h“, „12h“, „1D“, „5D“, „10D“, „1W“, „2W“, „4W“, „1M“; и
         числовые: 1 (1 минута), 10 (10 минут), 60 (1 час), 24 (1
         день), 7 (1 неделя), 31 (1 месяц).

      offset :
         Начальная позиция в последовательности записей, by default 0.

      latest :
         Включает режим выдачи последних *latest* записей в наборе, by
         default False.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   futoi(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *FUTOI* по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   hi2(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *Hi2* (индекс рыночной концентрации) по
      заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   info(*fields: str, native: bool = False) -> dict[str, Any] | DataFrame

      Информация об инструменте.


      Parameters
      ----------

      fields :
         Поля для отображения; «*» все поля

      native :
         Если флаг выставлен в *True* всегда возвращается словарь.

   obstats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *ObStat* по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   orderbook(native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает текущий стакан лучших цен.


      Parameters
      ----------

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   orderstats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *OrderStat* по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   trades(recno: int | None = None, *, offset: int = 0, latest: bool = False, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает сделки за последний день или начиная с заданного
      *recno*.


      Parameters
      ----------

      recno :
         Номер порядка заключения сделок, если не задано.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   tradestats(*, start: str | date = None, end: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *TradeStat* по заданным параметрам.


      Parameters
      ----------

      start :
         Дата начала диапазона выдачи данных. (*start* может быть
         равен *end*, тогда вернутся записи за один день)

      end :
         Дата конца диапазона выдачи данных.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.
