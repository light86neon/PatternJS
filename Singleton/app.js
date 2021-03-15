//singleton
// маєм модуль counterModule, в середині маєм counter зі значенням 0, та instance.
// кожного разу коли ми викликаємо increaseCounter наш лічильник інкрементує,
// getCounter ми використовуємо, щоб отримати значення нашого лічильника. Ф-ція
// createInstance викликається самий перший раз коли instance ще не існує, а саме в
// нас створюється такий обєкт з ссилками на getCounter та increaseCounter, якщо
// instance вже є в такому разі повертається instance;

let counterModule = ( function () {
    let counter = 0,
        instance;

    let getCounter = function () {
        return counter;
    };

    let increaseCounter = function () {
        counter++;
    };

    let createInstance = function () {
        return {
            getCounter: getCounter,
            increaseCounter: increaseCounter()
        }
    };

    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    };
}());
