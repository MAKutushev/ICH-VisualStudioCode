Задача: Игра "Найди пару" (Memory Card Game)
Цель: Создать игру на запоминание карточек, где игрок должен находить пары. Игра должна включать:
Отслеживание ходов
Управление состоянием карточек
Анимации
Использование Context API
Требования:
Сетка карточек: 4x4 (8 пар), каждая карточка с уникальным эмодзи/символом
Взаимодействие:
Клик переворачивает карточку
Одновременно можно перевернуть только 2 карточки
При совпадении карточки остаются открытыми
При несовпадении — переворачиваются обратно через 1 секунду
Статистика:
Счетчик ходов (каждая попытка сравнения — 1 ход)
Отображение оставшихся пар
Кнопка сброса: Перезапуск игры с новой перемешанной колодой
Победа: Поздравительное сообщение при нахождении всех пар
Стилизация: CSS Modules с анимацией переворота
Context API: Для управления состоянием игры
Доп. задача: Реализовать логику перемешивания и сравнения карточек с использованием методов массивов (sort, map, filter).
