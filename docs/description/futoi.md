---
sidebar_position: 3
sidebar_label: Futures Open Interest (FUTOI)
custom_edit_url: null
---
# Futures Open Interest (FUTOI)
Открытые позиции по фьючерсныфм контрактам в разрезе физ. и юр. лиц 

```
https://iss.moex.com/iss/analyticalproducts/futoi/securities
```

| Field           | Type         | Description                                      | Example value      |
|-----------------|--------------|--------------------------------------------------|--------------------|
| sess_id         | int32        | номер торговой сессии                            | 7021               |
| seqnum          | int32        | Номер пакета данных. Техническое поле            | 56                 |
| tradedate       | date:10      | Дата                                             | 2024-03-28         |
| tradetime       | time:10      | Время последней сделки, которая была учтена при расчете | 23:50:00    |
| ticker          | string:36    | Двухсимвольный код контракта                     | ED                 |
| clgroup         | string:9     | группа клиентов: fiz – физические лица, yur – юридические лица| YUR   |
| pos             | int64        | Величина открытых позиций                        | -107300            |
| pos_long        | int64        | Величина длинных открытых позиций                | 507969             |
| pos_short       | int64        | Величина коротких открытых позиций               | -615269            |
| pos_long_num    | int64        | Количество лиц, имеющих длинную открытую позицию | 43                 |
| pos_short_num   | int64        | Количество лиц, имеющих короткую открытую позицию| 13                 |
| systime         | datetime:19  | Время публикации данных                          | 2024-03-28 23:50:05|