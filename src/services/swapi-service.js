// Создаем класс для работы с сервером
export default class SwapiService {
    getResourse = async (url) => { // метод получения/обработки результата
        const response = await fetch(url); // получаем ответ - статус, url и т.д

        if (!response.ok) { // Отображаем ошибку запроса
            throw new Error(`Не удалось выполнить запрос по адресу ${url}, ошибка № ${response.status}`)
        }

        const body = await response.json(); // парсим полученный ответ в обьект
        return body;
    };
    // ================  Запрос персонажей  ================

    async getAllPerson() { // Получаем ответ от сервера
        const result = await this.getResourse("https://swapi.dev/api/people/")
        return result.results // получаем массив обьектов
    }

    async getPerson(id) {
        const result = await this.getResourse(`https://swapi.dev/api/people/${id}`)
        return result // получаем обьект
    }

    // ================  Запрос планет  ================

    async getAllPlanets() { // Получаем ответ от сервера
        const result = await this.getResourse("https://swapi.dev/api/planets/")
        return result.results // получаем массив обьектов
    }

    async getPlanet(id) {
        const result = await this.getResourse(`https://swapi.dev/api/planets/${id}`)
        return result // получаем обьект
    }

    // ================  Запрос кораблей  ================

    async getAllStarships() { // Получаем ответ от сервера
        const result = await this.getResourse("https://swapi.dev/api/starships/")
        return result.results // получаем массив обьектов
    }

    async getStarships(id) {
        const result = await this.getResourse(`https://swapi.dev/api/starships/${id}`)
        return result // получаем обьект
    }
}

const swapi = new SwapiService();

// swapi.getAllStarships()
//     .then((body) => body.forEach(element => console.log(element.name)));

swapi.getStarships(5).then((el) => console.log(el))