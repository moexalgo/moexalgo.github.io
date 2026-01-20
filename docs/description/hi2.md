---
sidebar_position: 4
sidebar_label: Market Concentration (HI2)
custom_edit_url: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Market Concentration (HI2)
Индекс рыночной концентрации
 
<Tabs>
<TabItem value="stocks" label="Акции">
```
https://iss.moex.com/iss/datashop/algopack/eq/hi2/
```
</TabItem>
<TabItem value="futures" label="Фьючерсы">
```
https://iss.moex.com/iss/datashop/algopack/fo/hi2/
```
</TabItem>
<TabItem value="currency" label="Валюта">
```
https://iss.moex.com/iss/datashop/algopack/fx/hi2/
```
</TabItem>
</Tabs>

| Field        | Type         | Description                                  | Example value       |
|--------------|--------------|----------------------------------------------|---------------------|
| tradedate    | date:10      | Дата                                         | 2024-04-11          |
| tradetime    | time:10      | Время, на которое актуальны данные           | 18:40:00            |
| secid        | string:51    | Идентификатор инструмента                    | SBER                |
| metric       | string:96    | Метрика                                      | hhi_aggressive      |
| value        | double       | Значение метрики                             | 233                 |
| reference    | string:765   | Дополнительные справочные данные             | null                |
| SYSTIME      | datetime:19  | Время загрузки данных                        | 2024-04-11 18:45:35 |
