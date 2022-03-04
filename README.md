# DNS Академия (Телеграм бот)

## Содержание

1. Цель проекта
2. Описание системы

## 1. Цель проекта

Обеспечить сотрудников знаниями по работе в компании с помощью курсов с тестами и инструкций. Иметь контроль знаний сотрудников используя тесты и обратную связь для выделения зон роста. Предоставить быстрый поиск решения над нависшей задачей.

Что должно решить следующие проблемы:

* Пробелы знаний сотрудников
* Скорость  выполнения задачь
* Долгий порог вхождения стажёров

## 2. Описание системы

Бот будет состоять из следующих функциональных блоков:

1. Регистрация через запрос на доступ.
2. Пользовательский функционал зависимый от их статуса.
3. Курсы разбитые на категории и подкатегории. Сопровождающиеся тестами с возможностью их назначать и переназначать.
4. Подробные инструкции.
5. Быстрый поиск по инструкциям.
6. Уведомление об обновлении инструкций (Какой и что изменилось).
7. Уведомлять о приостановке и старте сервера.

### 2.1. Статус пользователей

Система предусматривает шесть статусов пользователей:

* Администратор бота
* Управляющий Магазина
* Заместитель Управляющего Магазином
* Универсальный продавец
* Кладовщик
* Кассир
* Стажёр

Управляющий Магазина и Заместитель Управляющего Магазином контролируют знания сотрудников, а также обновляют и добавляют, а также назначают или переназначают курсы с тестами и инструкции. Сотрудники в свою очередь получают доступ к предоставленным им инструкциям, курсам с тестами и выполняют поставленные им задачи обучения.

### 2.2. Регистрация

При первом подключении к боту, он отправляет запрос на регистрацию. Какие-либо другие действия в данный момент не будут доступны. Но можно будет отозвать заявку или дополнить комментарием.

Доступ могут предоставить Управляющий Магазина и Заместитель Управляющего Магазином. При этом они выставляют тип новому пользователю. Но не могут поставить статус выше своего.

### 2.3. 
