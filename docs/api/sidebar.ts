import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/algopack-api",
    },
    {
      type: "category",
      label: "Real-time market data - Акции",
      link: {
        type: "doc",
        id: "api/real-time-market-data-акции",
      },
      items: [
        {
          type: "doc",
          id: "api/get-all-shares-statistics",
          label: "Торговая статистика за сегодня (по всем акциям)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-share-statistics",
          label: "Торговая статистика за сегодня (по одной указанной акции)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-shares-candles",
          label: "Свечи по инструменту",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-share-orderbook",
          label: "Стакан котировок по инструменту",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-share-trades",
          label: "Все сделки по инструменту",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Real-time market data - Фьючерсы",
      link: {
        type: "doc",
        id: "api/real-time-market-data-фьючерсы",
      },
      items: [
        {
          type: "doc",
          id: "api/get-all-futures-statistics",
          label: "Торговая статистика по фьючерсам за сегодня",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-futures-statistics",
          label: "Торговая статистика за сегодня (один инструмент)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-futures-candles",
          label: "Свечи по инструменту",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-futures-orderbook",
          label: "Стакан котировок по инструменту",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-futures-trades",
          label: "Все сделки по инструменту",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Super Candles - Акции",
      link: {
        type: "doc",
        id: "api/super-candles-акции",
      },
      items: [
        {
          type: "doc",
          id: "api/get-eq-tradestats",
          label: "Акции, tradestats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-eq-tradestats-for-ticker",
          label: "Акции, tradestats (один инструмент)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-eq-obstats",
          label: "Акции, obstats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-eq-obstats-for-ticker",
          label: "Акции, obstats (один инструмент)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-eq-orderstats",
          label: "Акции, orderstats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-eq-orderstats-for-ticker",
          label: "Акции, orderstats (один инструмент)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Super Candles - Фьючерсы",
      link: {
        type: "doc",
        id: "api/super-candles-фьючерсы",
      },
      items: [
        {
          type: "doc",
          id: "api/get-fo-tradestats",
          label: "Фьючерсы, tradestats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-fo-tradestats-for-ticker",
          label: "Фьючерсы, tradestats (один инструмент)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-fo-obstats",
          label: "Фьючерсы, obstats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-fo-obstats-for-ticker",
          label: "Фьючерсы, obstats (один инструмент)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Super Candles - Валюта",
      link: {
        type: "doc",
        id: "api/super-candles-валюта",
      },
      items: [
        {
          type: "doc",
          id: "api/get-fx-tradestats",
          label: "Валюта, tradestats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-fx-tradestats-for-ticker",
          label: "Валюта, tradestats (один инструмент)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-fx-obstats",
          label: "Валюта, obstats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-fx-obstats-for-ticker",
          label: "Валюта, obstats (один инструмент)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-fx-orderstats",
          label: "Валюта, orderstats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-fx-orderstats-for-ticker",
          label: "Валюта, orderstats (один инструмент)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Futures Open Interest (FUTOI)",
      link: {
        type: "doc",
        id: "api/futures-open-interest-futoi",
      },
      items: [
        {
          type: "doc",
          id: "api/get-all-futoi",
          label: "По всем инструментам",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-futoi-for-ticker",
          label: "По одному инструменту",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Market Concentration (HI2)",
      link: {
        type: "doc",
        id: "api/market-concentration-hi-2",
      },
      items: [
        {
          type: "doc",
          id: "api/get-hi-2",
          label: "Индекс рыночной концентрации (все инструменты)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-hi-2-for-ticker",
          label: "Индекс рыночной концентрации (один инструмент)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Mega Alerts",
      link: {
        type: "doc",
        id: "api/mega-alerts",
      },
      items: [
        {
          type: "doc",
          id: "api/get-alerts",
          label: "Торговые аномалии (все инструменты)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-alerts-for-ticker",
          label: "Торговые аномалии (один инструмент)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ISS Calendar — Общий",
      link: {
        type: "doc",
        id: "api/iss-calendars-общий",
      },
      items: [
        {
          type: "doc",
          id: "api/calendar-iss-calendars-root",
          label: "Календарь неторговых дней по всем рынкам (ФР, ВР, СР)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ISS Calendar — Валютный рынок",
      link: {
        type: "doc",
        id: "api/iss-calendars-валютный-рынок",
      },
      items: [
        {
          type: "doc",
          id: "api/calendar-iss-calendars-currency",
          label: "Календарь ВР — неторговые и нерасчётные дни, борды",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-currency-session",
          label: "Расписание торгов на ВР (текущий торговый день)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-currency-securities",
          label: "Календарь по инструментам ВР (приостановки, сдвиги расчётов)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-currency-changes",
          label: "Изменения по приостановкам инструментов ВР",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ISS Calendar — Срочный рынок",
      link: {
        type: "doc",
        id: "api/iss-calendars-срочный-рынок",
      },
      items: [
        {
          type: "doc",
          id: "api/calendar-iss-calendars-futures",
          label: "Календарь неторговых дней по СР",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-futures-securities",
          label: "Таблица фьючерсов и опционов (серии и контракты)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-futures-session",
          label: "Расписание торгов на СР",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ISS Calendar — Фондовый рынок",
      link: {
        type: "doc",
        id: "api/iss-calendars-фондовый-рынок",
      },
      items: [
        {
          type: "doc",
          id: "api/calendar-iss-calendars-stock",
          label: "Календарь неторговых дней по ФР",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-stock-static",
          label: "Статические справочники ФР (классификаторы рынков и бордов)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-stock-securities-boards",
          label: "Торгуемость инструментов на бордах",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-stock-session-settlecodes",
          label: "Справочник расчётных кодов на текущий торговый день",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-stock-securities-suspended-details",
          label: "Запреты торгов по событиям (детали)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-stock-securities-changes",
          label: "Изменения параметров инструмента",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-stock-session-suspended",
          label: "Исключения по кодам расчётов (бумага–борд) на текущий день",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-calendars-stock-session",
          label: "Расписание торгов по режимам (ФР)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-archives-stock-suspended-planned",
          label: "Архив запретов торгов по событиям (ZIP-файлы)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/calendar-iss-archives-stock-session-suspended-latest",
          label: "Архив исключений по кодам расчётов (ZIP-файлы, последняя дата)",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
