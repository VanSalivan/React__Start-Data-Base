//? Как работает FETCH
//* - Чтобы получть данные с сервера, нужно два вызова(каждый вернет "Promise")
//* response = await fetch(url)
//* body = await response.json()

//* - Кроме .json() есть другие функции для других типов ответа: arrayBuffer(), blob(), text(), fromData()

//? Обработка ошибок в FETCH
//* - FETCH отклоняет "reject()"Promise, только если произошла ошибка сети (сервер недоступен)
//* - Чтобы проверить код результата, можно использовать "result.status"
//* - "result.ok" содержит true, если "result.status" содержит один из OK-статусов (200-299)

//? API-Клиент
//* - Код который работает с сетью лучше изолировать в отдельный класс-сервис
//* - Компоненты не должны знать откуда именно беруться данные 
//* - Такой подход упростит тестирование и поддержку кода, который работает с API

//? Компоненты
//* - Начинать разработку React приложения удобно с создания разметки компонентов
//* - Такие компоненты ничего не делают просто отображают данные 
//* - В финальной версии приложения "разбивка" на компоненты может измениться, но такой шаблон на React - хорошее начало

//? 57. Компонент, который получает данные из API
//* - В конструкторе компонента вызываем сервис, который получит данные
//* - в then() обновляем состояние компонента

//? 58. Трансформация данных API
//* - Изолируйте код, который обрабатывает данные
//* - Отделяйте модели данных API от модели данных приложения
//* - Такая практика чаще применяется для крупных проектов со сложными моделями данных, которые могут измениться

//? 59. Создаём индикатор загрузки
//* - Хорошее приложение не отображает элементы для которых нет данных
//* - Спиннер через сайт loading.io

//? 
//* - 
//* - 
//* - 

//? 
//* - 
//* - 
//* - 

//? 
//* - 
//* - 
//* - 