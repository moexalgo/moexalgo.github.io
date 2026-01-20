---
id: supercandles
title: "ALGOPACK VISUAL: SUPERCANDLES"
description: Расширенная визуализация свечных графиков
sidebar_label: SUPERCANDLES
sidebar_position: 4
custom_edit_url: null
---

# ALGOPACK VISUAL: SUPERCANDLES

Расширенный свечной график. Позволяет заглянуть внутрь бара и увидеть объемы покупок / продаж, дисбаланс и средневзвешенные цены

![image](/img/supercandles1.png)
Визуализация доступна на странице [SUPERCANDLES](https://data.moex.com/products/algopack/visual?tab=super_candles&ticker=SBER)

На графике представлены метрики и индикаторы на основе сделок (trades) с разделением на покупателей и продавцов.
![image](/img/supercandles2.png)


Покупатели или продавцы определяются инициатором сделки, т.е. тейкерами. Если сделку инициирует покупатель ("бьет по стакану"), то это сделка на покупку. И наоборот

Значения всех метрик можно увидеть на графике наведя мышку на график: 
![image](/img/supercandles3.png)

:::note
Эти данные можно получать через API:
https://iss.moex.com/iss/datashop/algopack/eq/tradestats/sber.json?from=2024-11-12&till=2024-11-12

Помимо SuperCandles tradestats доступны метрики на основе стакана котировок obStats и на основе потока сделок orderStats
:::