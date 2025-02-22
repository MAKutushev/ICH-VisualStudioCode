// setTimeout и setInterval —
// это функции в JavaScript, которые позволяют вам
// задавать задержку перед выполнением
// определенного кода.

// setTimeout —
// это функция, которая используется для запуска
// выполнения функции (или выполнения кода) после
// заданной задержки в миллисекундах.

// console.log('hello world')

// setTimeout(() => {
//   console.log('hello world чуть попозже')
// }, 3000)

// setInterval —
// это функция, которая используется для
// многократного запуска выполнения функции (или
// выполнения кода) с определенным интервалом
// между каждым выполнением.

// function intervalFn(exactNum, delay) {
//   let result = exactNum
//   const counter = setInterval(() => {
//     if (result > 0) {
//       console.log('hello world', result)
//       result--
//     } else {
//       console.log('this is the end of interval')
//       clearInterval(counter)
//     }
//   }, delay)
// }
// intervalFn(5, 1000)

// Использование setTimeout и setInterval
// Полезны для асинхронного выполнения кода в различных сценариях:
// ● Анимации
// ● Обновление данных с сервера
// ● Другие случаи, когда необходима задержка между выполнениями

console.log('=============')

// Асинхронный код —
// это способ выполнения задач, который позволяет
// продолжать работу с другими задачами, не
// дожидаясь завершения текущей.

// console.log(1)
// console.log(2)
// setTimeout(() => console.log(3), 1000)
// console.log(4)
// console.log(5)

// setTimeout(() => {
//   setTimeout(() => {
//     console.log('One')
//   }, 1000)
//   console.log('Two')
// }, 1000)

// Важность асинхронного кода
// Эффективно использовать время и не блокировать выполнение
// других задач в ожидании завершения текущей

console.log('=============')

// Promise —
// это объект, который содержит будущее значение
// асинхронной операции. Например, если вы
// запрашиваете некоторые данные с сервера, промис
// обещает нам получить эти данные, которые мы
// сможем использовать в будущем.

// Использование промиса
// ● Решает задачу выполнения кода, который зависит от результата асинхронной операции.
// ● Рычаги управления его состоянием остаются у асинхронной функции.
// ● После создания, промис находится в состоянии ожидания pending.
// ● Когда асинхронная операция завершается, функция переводит промис в состояние успеха fulfilled или ошибки
// rejected.

// Создание промисов
// ● Интерфейс Promise принимает аргумент executor - объект функции с двумя аргументами resolve и reject.
// ● Функция executor получает оба аргумента и выполняется сразу, еще до того как конструктор вернёт
// созданный объект.
// ● Первый аргумент (resolve) вызывает успешное исполнение промиса, второй (reject) отклоняет его.
// ● Функция executor описывает выполнение какой-то асинхронной работы, по завершении которой необходимо
// вызвать функцию resolve или reject.
// ● Возвращаемое значение функции executor игнорируется.

// Методы, позволяющие работать с результатом
// выполнения вычисления внутри промиса :
// then() catch() finally()

// then() —
// это метод, который используют, чтобы выполнить код
// после успешного выполнения асинхронной операции.
// Принимает в качестве аргумента две функции-колбэка.
// Если промис в состоянии fulfilled то выполнится первая
// функция. Если в состоянии rejected — вторая.

// catch() —
// это метод, который используют, чтобы выполнить код в
// случае ошибки при выполнении асинхронной операции.
// Принимает в качестве аргумента функцию-колбэк,
// которая выполняется сразу после того, как промис
// поменял состояние на rejected.

// finally() —
// это метод, который используют, чтобы выполнить код
// при завершении асинхронной операции. Будет выполнен
// не зависимо от того, была ли операция успешной или
// завершилась ошибкой. Принимает в качестве аргумента
// функцию-колбэк, которая выполняется сразу после того,
// как промис поменял состояние на rejected или fulfilled.

const a = 5
const b = 10
function promiseFn(x, y) {
  return new Promise((res, rej) => {
    if (x > y) {
      res(')))) yes)))))')
    } else {
      rej('x can not be more than y')
    }
  })
}

promiseFn(a, b)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('Ну это все)')
  })

console.log('=============')

function random(a, b) {
  return new Promise((res, rej) => {
    if (a.length > b) {
      res('Right!!')
    } else {
      rej('NOT right!!')
    }
  })
}

random('hello', 4)
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log('Finito la comedia'))

console.log('=============')

// Создайте функцию checkEvenNumber, которая принимает число в качестве аргумента и возвращает Promise. Если число четное, выполните resolve с сообщением "Число четное", в противном случае выполните reject с сообщением "Число нечетное".

function evenFn(a) {
  return new Promise((res, rej) => {
    if (a % 2 == 0) {
      res('Число четное')
    } else {
      rej('Число нечетное')
    }
  })
}
evenFn(4)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// Это финальная точка асинхронности
// const fetchUsers = async ( )=> {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     } catch(e) {
//         throw new Error(e)
//     }
// }
// fetchUsers()

console.log('=============')
