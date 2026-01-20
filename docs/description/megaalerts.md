---
sidebar_position: 5
sidebar_label: Mega Alerts
custom_edit_url: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Mega Alerts
Система оповещений о значительных изменениях в рыночных показателях

<Tabs>
<TabItem value="stocks" label="Акции">
```
https://apim.moex.com/iss/datashop/algopack/eq/alerts.json
```
</TabItem>
<TabItem value="futures" label="Фьючерсы">
```
https://apim.moex.com/iss/datashop/algopack/fo/alerts.json
```
</TabItem>
</Tabs>

| Field        | Type         | Description                                  | Example value       |
|--------------|--------------|----------------------------------------------|---------------------|
| tradedate    | date:10      | Дата                                         | 2026-01-08          |
| tradetime    | time:10      | Время, на которое актуальны данные           | 07:00:00            |
| secid        | string:51    | Идентификатор инструмента                    | CHMF                |
| alert_type   | string:96    | Тип оповещения                               | pr_change_99_9_pctl- |
| threshold    | double       | Пороговое значение                           | -0.3604             |
| value        | double       | Фактическое значение                         | -0.4235             |
| reference    | string:765   | Дополнительные справочные данные             | `{"m_5":["0.318","-0.224","33","24","0.09"], ...}` |
| SYSTIME      | datetime:19  | Время загрузки данных                        | 2026-01-08 07:01:06 |
