// const url = 'https://swapi.dev/api/people/1/'
//===========================  ES5  =================================
// fetch(url)
//     .then((response) => {
//         return response.json(); // Сначала получаем результат
//     })
//     .then((response) => {
//         console.log(response) // Затем достаем тело из результата
//     })
//===========================  ES6  =================================

// Функция для получения обьекта с сервера
const getResourse = async (url) => {
    const res = await fetch(url); // получаем ответ - статус, url и т.д
    const body = await res.json(); // парсим полученный ответ в обьект
    return body;
};

getResourse('https://swapi.dev/api/people/1/')
    .then((resultBody) => console.log(resultBody));