# DNS Академия (Телеграм бот)

## Содержание

1. Цель проекта
2. Описание системы

## 1. Цель проекта

Обеспечить сотрудников знаниями по работе в 1С, Web-базе, Мобильной веббазе с помощью курсов. Иметь контроль знаний сотрудников используя тесты и обратную связь для выделения зон роста. Предоставить быстрый поиск решения над нависшей задачей. Что должно решить такие проблемы, как пробелы знаний сотрудников и долгий порог вхождения стажёров.

## 2. Описание системы

Бот будет состоять из следующих функциональных блоков:

1. Регистрация, аутентификация и авторизация.
2. Пользовательский функционал зависимый от их группы.
3. Курсы разбитые на категории и подкатегории.
4. Тесты, возможность их назначать/переназначать.
5. Быстрый поиск.
6. Уведомление об обновлении инструкций (Какой и что изменилось).
7. Уведомлять о приостановке/старте сервера.

### 2.1. Типы пользователей

Система предусматривает четыре типа пользователей: УМ, Зам. УМ, Универсальный продавец и Стажёр. УМ и Зам. УМ контролируют знания продавцов/стажёров, а также обновляют и добавляют курсы/тесты. Универсальные продавцы/стажёры в свою очередь получают доступ к предоставленной им информации и выполняют поставленные им задачи обучения.

### 2.2. Регистрация

При первом подключении к боту, он запрашивает следующие данные: Имя, Фамилию. После оставляет запрос на резрешение пользоваться функционалом бота. Какие-либо другие действия в данный момент не будут доступны. Но можно будет отозвать заявку. Доступ могут предоставить УМ и Зам. УМ.
