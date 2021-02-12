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
    const response = await fetch(url); // получаем ответ - статус, url и т.д
    if (!response.ok) { // Отображаем ошибку запроса
        throw new Error(`Не удалось выполнить запрос по адресу ${url}, ошибка № ${response.status}`)
    }
    const body = await response.json(); // парсим полученный ответ в обьект
    return body;
};

getResourse('https://swapi.dev/api/people/1/2222')
    .then((resultBody) => console.log(resultBody));

//===========================  ES6  =================================