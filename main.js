'use strict'


//Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". 
//При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

let drink;
const select = 'Кава';

switch (select) {
    case 'Кава':
        drink = 'Кава';
        break;

    case 'Чай':
        drink = 'Чай';
        break;

    case 'Сік':
        drink = 'Сік';
        break;
    default:
        console.log('В списку немає цього напитку');
}
console.log(drink);

//Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, 
//чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
let days;
const day = prompt('Напишіть день тижня (Будь ласка пишіть с великої літери)');
switch (day) {
    case 'Понеділок':
        case 'Вівторок':
            case 'Середа':
                case 'Четвер':
                    case 'Пятниця':
                        days = 'Робочий день';
                        break;
    case 'Субота':
        case 'Неділя':
            days = 'Вихідний';
            break;
            default:
                console.log('Пробачте, скорішь за все ви написали помилку:)');
}
console.log(days);

//Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, 
//до якої належить цей місяць.



//Створити розмітку з полем введення, що приймає номер місяця та кнопкою. 
//При натисканні на кнопку виводити кількість днів у цьому місяці.



//Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. 
//При натисканні на кнопку виводити відповідне повідомлення про дію: 
//якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".



//Створити розмітку з двома полями введення, що приймають числа та список (select) 
//з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. 
//Користувач повинен бути попереджений про можливість ділення на нуль.
