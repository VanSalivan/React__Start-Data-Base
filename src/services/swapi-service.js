// Создаем класс для работы с сервером
export default class SwapiService {
    getResourse = async (url) => { // метод получения/обработки результата
        const response = await fetch(url); // получаем ответ - статус, url и т.д
        // console.log(response);

        if (!response.ok) { // Отображаем ошибку запроса
            throw new Error(`Не удалось выполнить запрос по адресу ${url}, ошибка № ${response.status}`)
        }

        const body = await response.json(); // парсим полученный ответ в обьект
        // console.log(body);
        return body;
    };

    // ================  Трансформирование данных с API сервера в данные для приложения  ================

    // Забираем id из url адреса, т.к. API не дает нам id
    _extractId(item) {
        const regularExpession = /\/([0-9]*)\/$/;
        return item.url.match(regularExpession)[1];
    };

    //* + Изменяем правила наименования данных с сервера на локальные
    //* + Вместо всех полей выбираем только те что нам нужны
    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            gender: person.gender,
            hairColor: person.hair_color,
            height: person.height,
            mass: person.mass,
            name: person.name,
            personSkin: person.skin_color,
        };
    }

    _transformStarShip(starShip) {
        return {
            id: this._extractId(starShip),
            model: starShip.model,
            name: starShip.name,
            manufacturer: starShip.manufacturer,
            costCredits: starShip.cost_in_credits,
            length: starShip.length,
            passengers: starShip.passengers,
            crew: starShip.crew,
            cargoCapacity: starShip.cargo_capacity,
        };
    }

    // ================  Запрос персонажей  ================

    async getAllPerson() { // Получаем ответ от сервера
        const result = await this.getResourse("https://swapi.dev/api/people/")
        return result.results.map(this._transformPerson); // получаем массив обьектов и возвращаем на его основе массив с изменеными данными
    }

    async getPerson(id) {
        const result = await this.getResourse(`https://swapi.dev/api/people/${id}`)
        return this._transformPerson(result) // получаем обьект c измененными даннымиы
    }

    // ================  Запрос планет  ================

    async getAllPlanets() { // Получаем ответ от сервера
        const result = await this.getResourse("https://swapi.dev/api/planets/")
        return result.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const result = await this.getResourse(`https://swapi.dev/api/planets/${id}`)
        return this._transformPlanet(result)
    }

    // ================  Запрос кораблей  ================

    async getAllStarships() { // Получаем ответ от сервера
        const result = await this.getResourse("https://swapi.dev/api/starships/")
        return result.results.map(this._transformStarShip);
    }

    async getStarships(id) {
        const result = await this.getResourse(`https://swapi.dev/api/starships/${id}`)
        return this._transformPerson(result);
    }
}

 // ================  Пример обращения  ================

// const swapi = new SwapiService();

// // swapi.getAllStarships()
// //     .then((body) => body.forEach(element => console.log(element.name)));

// swapi.getStarships(5).then((el) => console.log(el))