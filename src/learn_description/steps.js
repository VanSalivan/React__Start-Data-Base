// Содержит всю последовательность создания общения с сервером


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

// // Функция для получения обьекта с сервера
// const getResourse = async (url) => {
//     const response = await fetch(url); // получаем ответ - статус, url и т.д
//     if (!response.ok) { // Отображаем ошибку запроса
//         throw new Error(`Не удалось выполнить запрос по адресу ${url}, ошибка № ${response.status}`)
//     }
//     const body = await response.json(); // парсим полученный ответ в обьект
//     return body;
// };

// getResourse('https://swapi.dev/api/people/1/')
//     .then((resultBody) => console.log(resultBody));

//===========================  Класс  =================================

// Создаем класс для работы с сервером
class SwapiService {
    getResourse = async (url) => { // метод получения/обработки результата
        const response = await fetch(url); // получаем ответ - статус, url и т.д

        if (!response.ok) { // Отображаем ошибку запроса
            throw new Error(`Не удалось выполнить запрос по адресу ${url}, ошибка № ${response.status}`)
        }

        const body = await response.json(); // парсим полученный ответ в обьект
        return body;
    };

    // Получаем всех персонажей
    // getAllPerson() { // Получаем ответ от сервера
    //     return this.getResourse("https://swapi.dev/api/people/")
    // }

    // Обрабатываем полученный ответ для получения массива
    async getAllPerson() { // Получаем ответ от сервера
        const result = await this.getResourse("https://swapi.dev/api/people/")
        return result.results // получаем массив обьектов
    }

    // Получаем конкретного персонажа по id
    // getPerson(id) {
    //     return this.getResourse(`https://swapi.dev/api/people/${id}`)
    // }

    async getPerson(id) {
        const result = await this.getResourse(`https://swapi.dev/api/people/${id}`)
        return result
    }

    // ================  Запрос планет  ================

    async getAllPlanets() { // Получаем ответ от сервера
        const result = await this.getResourse("https://swapi.dev/api/planets/")
        return result.results // получаем массив обьектов
    }

    // Получаем конкретного персонажа по id
    async getPlanet(id) {
        const result = await this.getResourse(`https://swapi.dev/api/planets/${id}`)
        return result
    }

    // ================  Запрос кораблей  ================

    async getAllStarships() { // Получаем ответ от сервера
        const result = await this.getResourse("https://swapi.dev/api/starships/")
        return result.results // получаем массив обьектов
    }

    // Получаем конкретного персонажа по id
    async getStarships(id) {
        const result = await this.getResourse(`https://swapi.dev/api/starships/${id}`)
        return result
    }

}

const swapi = new SwapiService();

// swapi.getAllStarships()
//     .then((body) => body.forEach(element => console.log(element.name)));

swapi.getStarships(5).then((el) => console.log(el))
