Получение данных по рынкам
**************************

Методы для получения данных по рынку делятся на три группы:

* Основные:
     * *.tickers* - Информация о всех инструментах рынка;

     * *.marketdata* - Статистическая информация о всех инструментах
       рынка;

     * *.trades* - Последние сделки по всем инструментам рынка;

     * *.candles* - Две последние минутные свечи по всем инструментам
       рынка.

* Данные ALGOPACK:
     * *.tradestats* - Метрики **TradeStat** по всем инструментам
       рынка за день;

     * *.orderstats* - Метрики **OrderStat** по всем инструментам
       рынка за день;

     * *.obstats* - Метрики **ObStat** по всем инструментам рынка за
       день;

     * *.alerts* - Метрики **MegaAlert** по всем инструментам рынка за
       день;

     * *.hi2* - Метрики **Hi2** по всем инструментам рынка за день.

* Данные FUTOI:
     * *.futoi* - Метрики **FUTOI** по всем инструментам рынка за
       день.

Примечание:

  Настоятельно рекомендуется использовать хелпер *moexalgo.Market* для
  объекта методы которого будут использованы для доступа к данным.
  Параметром этого метода является алиасы имени рынка (регистр не
  важен). Смотрите ниже примеры, алиасы, и таблицы доступных методов.

   import moexalgo
   idx = moexalgo.Market('index')
   idx.trades()

   import moexalgo
   eq = moexalgo.Market('EQ')
   eq.orderstats(date='2025-01-07')

+----------+-----------+--------------------+---------------------------+
| Рынок    | Раздел    | Алиасы             | Доступные методы          |
|==========|===========|====================|===========================|
| Фондовый | Акции     | shares, stocks, eq | Основные, ALGOPACK        |
+----------+-----------+--------------------+---------------------------+
|          | Индексы   | index              | Основные                  |
+----------+-----------+--------------------+---------------------------+
|          | Бонды     | bonds              | Основные                  |
+----------+-----------+--------------------+---------------------------+
| Валютный |           | selt, currency, fx | Основные, ALGOPACK        |
+----------+-----------+--------------------+---------------------------+
| Срочный  | Фьючерсы  | futures, forts, fo | Основные, ALGOPACK, FUTOI |
+----------+-----------+--------------------+---------------------------+
|          | Опционы   | options            | Основные                  |
+----------+-----------+--------------------+---------------------------+


API
===

class moexalgo.engines.stock.Market(*args, **kwargs)

   Обобщенный класс *Market* для рынка ценных бумаг.

   alerts(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает MegaAlert (оповещение об аномальной рыночной
      активности) по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   candles(native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Метод возвращает две последние минутные свечи по всем
      инструментам рынка.


      Parameters
      ----------

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   hi2(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *Hi2* (индекс рыночной концентрации) по
      заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   marketdata(*fields: str, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает статистическую информацию о всех инструментах рынка.


      Parameters
      ----------

      fields :
         Поля для отображения; «*» все поля

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   obstats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *ObStat* по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   orderstats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *OrderStat* по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   tickers(*fields: str, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает информация о всех инструментах рынка.


      Parameters
      ----------

      fields :
         Поля для отображения; «*» все поля

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   trades(tradeno: int | None = None, recno: int | None = None, *, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает последние сделки в обратной сортировке если
      *tradeno*/*recno* не заданно. Если задано сделки возвращаются от
      заданного *tradeno*/*recno*.


      Parameters
      ----------

      tradeno :
         Номер сделки до которого выдаются данные, для валютного и
         фондового рынка.

      recno :
         Номер порядка заключения сделок, для срочного рынка.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   tradestats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *TradeStat* по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

class moexalgo.engines.currency.Market(*args, **kwargs)

   Обобщенный класс *Market* для валютного рынка.

   alerts(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает MegaAlert (оповещение об аномальной рыночной
      активности) по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   candles(native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Метод возвращает две последние минутные свечи по всем
      инструментам рынка.


      Parameters
      ----------

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   hi2(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *Hi2* (индекс рыночной концентрации) по
      заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   marketdata(*fields: str, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает статистическую информацию о всех инструментах рынка.


      Parameters
      ----------

      fields :
         Поля для отображения; «*» все поля

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   obstats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *ObStat* по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   orderstats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *OrderStat* по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   tickers(*fields: str, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает информация о всех инструментах рынка.


      Parameters
      ----------

      fields :
         Поля для отображения; «*» все поля

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   trades(tradeno: int | None = None, recno: int | None = None, *, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает последние сделки в обратной сортировке если
      *tradeno*/*recno* не заданно. Если задано сделки возвращаются от
      заданного *tradeno*/*recno*.


      Parameters
      ----------

      tradeno :
         Номер сделки до которого выдаются данные, для валютного и
         фондового рынка.

      recno :
         Номер порядка заключения сделок, для срочного рынка.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   tradestats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *TradeStat* по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

class moexalgo.engines.futures.Market(*args, **kwargs)

   Обобщенный класс *Market* для срочного рынка.

   alerts(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает MegaAlert (оповещение об аномальной рыночной
      активности) по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   candles(native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Метод возвращает две последние минутные свечи по всем
      инструментам рынка.


      Parameters
      ----------

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   futoi(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *FUTOI* по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   hi2(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *Hi2* (индекс рыночной концентрации) по
      заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   marketdata(*fields: str, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает статистическую информацию о всех инструментах рынка.


      Parameters
      ----------

      fields :
         Поля для отображения; «*» все поля

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   obstats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *ObStat* по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   orderstats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *OrderStat* по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   tickers(*fields: str, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает информация о всех инструментах рынка.


      Parameters
      ----------

      fields :
         Поля для отображения; «*» все поля

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   trades(recno: int | None = None, *, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает последние сделки в обратной сортировке если *recno*
      не заданно. Если заданно сделки возвращаются от заданного
      *recno*.


      Parameters
      ----------

      recno :
         Номер порядка заключения сделок, если не задано.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.

   tradestats(*, date: str | date = None, latest: bool = None, offset: int = None, native: bool = False) -> Iterable[dict[str, Any]] | DataFrame

      Возвращает метрики *TradeStat* по заданным параметрам.


      Parameters
      ----------

      date :
         Дата данных. Если не указано, данные выдаются за сегодняшнее
         число.

      latest :
         Включает режим выдачи последних записей в наборе.

      offset :
         Начальная позиция в последовательности записей.

      native :
         Если флаг выставлен в *True* всегда возвращается итератор
         словарей.
