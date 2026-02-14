---
date: 2024-06-14
authors: [timredz]
categories:
  - connection
slug: websocket
custom_edit_url: null
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# Подключение к ISS+ через Websockets

ISS+ - система распространения биржевой информации в реальном времени. Подключение осуществляется через Websocket по протоколу STOMP

## Подключение
### Точка доступа
- **WebSocket URL:** `wss://iss.moex.com/infocx/v3/websocket`

### Процесс подключения
1. Создайте объект WebSocket, указав URL.
2. Отправьте STOMP-команду CONNECT с заголовками для аутентификации.
3. При успешной аутентификации получите ответ CONNECTED, который включает информацию о доступных данных. В случае ошибки получите фрейм ERROR.

### Аутентификация
**Команда:** CONNECT

  - `domain: DEMO` (для гостей) или `passport` (для подписчиков ALGOPACK)
  - `login: guest` или ваш логин
  - `passcode: guest` или ваш пароль

**Ответы:**

  - Успешная аутентификация: CONNECTED
  - Ошибка аутентификации: ERROR

## Протокол STOMP и команды
STOMP (Simple Text Oriented Messaging Subscription Protocol) — протокол, основанный на текстовых сообщениях.

### Клиентские команды

- CONNECT / DISCONNECT
- SUBSCRIBE / UNSUBSCRIBE
- REQUEST
- SEND

### Ответы сервера

- CONNECTED
- ERROR
- RECEIPT
- MESSAGE
- REPLY
- CLOSED

### Примеры команд

<Tabs>
<TabItem value="subscribe" label="SUBSCRIBE">
  **Подписка на поток данных**

  ```
  SUBSCRIBE
  id: уникальный_ID
  receipt: уникальный_ID
  destination: MXSE.securities
  selector: TICKER="MXSE.TQBR.SBER" and LANGUAGE="en"
  ```

  **Ответы сервера:**

  - Успешная подписка: MESSAGE содержит данные
  - Ошибка: ERROR с описанием проблемы
</TabItem>
<TabItem value="unsubscribe" label="UNSUBSCRIBE">
  **Отписаться от потока данных**

  ```
  UNSUBSCRIBE
  id: уникальный_ID
  ```

  **Ответы сервера:**

  - Успешная отписка: подтверждение
  - Ошибка: ERROR
</TabItem>
<TabItem value="request" label="REQUEST">
  **Запрос данных из справочника**

  ```
  REQUEST
  id: уникальный_ID
  destination: SEARCH.ticker
  selector: pattern=""
  ```

  **Ответы сервера:**

  - Успешный ответ: REPLY с данными в формате JSON
  - Ошибка: ERROR
</TabItem>
</Tabs>

## Форматы данных
### Пакет данных JSON
![image](/img/api_json.png)
- properties (тип, номер последовательности, временные метки)
- columns (названия колонок)
- data (массив данных)


| properties.type | Описание                                                                                   |
|-----------------|-------------------------------------------------------------------------------------------------|
| `snapshot`      | Полное обновление данных. Предыдущие данные замещаются новыми.                              |
| `updates`       | Обновление (добавление или изменение) имеющихся данных. Решение принимается на основании поиска по ключевым полям. |
| `removal`       | Удаление по ключевым полям (если применимо для данного ресурса).                           |


## Коды ошибок

| Код ошибки                    | Описание                                                                                               |
|-------------------------------|--------------------------------------------------------------------------------------------------------|
| `gateway.exception`           | Неожиданная ошибка обработки на сервере доступа                                                        |
| `gateway.timeout`             | Таймаут исполнения запрошенной операции                                                                |
| `gateway.transport`           | Ошибка связи сервера доступа с RabbitMQ                                                                |
| `gateway.access-denied`       | Доступ запрещен - при аутентификации или при запросе ресурса                                           |
| `gateway.invalidrequest`      | Неверный запрос ресурса - несуществующий/неразрешенный клиенту ресурс или неверные параметры            |
| `gateway.notimplemented`      | Запрос еще не реализованного функционала                                                               |
| `gateway.not-connected`       | Попытка обращения к ресурсу без аутентификации                                                         |


## Пример подключения (Python)

``` python
import asyncio
import json
from websockets import connect, WebSocketClientProtocol, ConnectionClosed
from stomp.utils import Frame, convert_frame, parse_frame

async def connect_stomp(url, credentials):
    """ Create a STOMP WebSocket connection """
    websocket = await connect(url, subprotocols=['STOMP'])
    login_frame = Frame('CONNECT', headers=credentials)
    await websocket.send(b''.join(convert_frame(login_frame)))
    return websocket

async def receive_messages(websocket):
    """ Receive messages from the WebSocket connection """
    async for message in websocket:
        frame = parse_frame(message)
        print('Received frame', frame.cmd, frame.headers)
        body = json.loads(frame.body.decode('utf8').strip('\0'))
        return body  # Simplifying to return the first received message

async def main(url, credentials):
    try:
        websocket = await connect_stomp(url, credentials)
        try:
            body = await receive_messages(websocket)
            print("Received Data:", body)
        finally:
            await websocket.close()
    except ConnectionClosed:
        print("Connection was closed")
    except Exception as e:
       print(f"An error occurred: {e}")


if __name__ == '__main__':
    url = 'wss://iss.moex.com/infocx/v3/websocket'
    credentials = {
        'domain': 'passport',
        'login': 'login',
        'passcode': 'password'
    }

    asyncio.run(main(url, credentials))
```

## Пример подписки на данные (Python)

``` python
import asyncio
import json
import uuid

from websockets import connect, ConnectionClosed
from stomp.utils import Frame, convert_frame, parse_frame

async def send_frame(websocket, cmd, headers):
    """ Helper function for sending a frame """
    frame = Frame(cmd, headers=headers)
    await websocket.send(b''.join(convert_frame(frame)))

async def receive_message(websocket):
    """ Helper function to receive a message and parse it """
    message = await websocket.recv()
    return parse_frame(message)

async def connect_stomp(websocket, domain, login, passcode):
    """ Connect to the STOMP server """
    await send_frame(websocket, 'CONNECT', {'domain': domain, 'login': login, 'passcode': passcode})
    frame = await receive_message(websocket)
    if frame.cmd != 'CONNECTED':
        raise ConnectionRefusedError(f"STOMP authentication failed; {frame.headers.get('message', 'No error message')}")
    return json.loads(frame.body.decode('utf8').strip('\0'))

async def subscribe_to_topic(websocket, destination, selector):
    """ Subscribe to a topic on the STOMP server """
    subscribe_header = {
        'id': str(uuid.uuid4()),
        'destination': destination,
        'selector': selector,
    }
    await send_frame(websocket, 'SUBSCRIBE', subscribe_header)

async def main(url):
    async with connect(url, subprotocols=['STOMP']) as websocket:
        try:
            # Credentials
            domain = 'passport'
            login = 'login'
            passcode = 'password'
            
            # Connect to STOMP with authentication
            metadata = await connect_stomp(websocket, domain, login, passcode)
            print("Connected with metadata:", metadata)
            
            # Subscribe to the desired topic
            await subscribe_to_topic(websocket, 'MXSE.orderbooks', 'TICKER="MXSE.TQBR.SBER"')
            print("Subscription successful")

            # Main message processing loop
            while True:
                frame = await receive_message(websocket)
                if frame.cmd == 'MESSAGE':
                    body = json.loads(frame.body.decode('utf8').strip('\0'))
                    print(body)
                    
        except ConnectionClosed:
            print("Connection closed unexpectedly!")
            return  # Exit the main function if connection is closed
        except Exception as e:
            print(f"An error occurred: {e}")
            return  # Handle other exceptions gracefully

if __name__ == '__main__':
    url = 'ws://iss.moex.com/infocx/v3/websocket'
    asyncio.run(main(url))
