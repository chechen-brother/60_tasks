'use strict'

// Задача №1
// Напишите функцию, которая принимает массив и переносит все 0 в конец,
// не изменяя порядок остальных элементов массива.

function moveZeros(arr) {
    let zeros = [];
    return arr.filter((el) => {
        if (el === 0) {
            zeros.push(el);
            return false;
        }
        return true;
    }).concat(zeros);
}

window.document.write("<p>",moveZeros([false,1,0,1,2,0,1,3,"a"]) , "</p>");


// Задача №2
// Найдите недостающую букву.
// Напишите функцию,  которая принимает в качестве параметра массив букв, 
// расположенных по алфавиту и возвращает массив с недостающей буквой. 
// Длина входного массива не меньше 2 и он содержит буквы только одного регистра.

function findMissingLatters(letters) {
    let alphabet = [];
    for (let i = 97; i <= letters[letters.length - 1].charCodeAt(); i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet.filter((el) => {
        if (letters.includes(el))
            return false;
        return true;
    });
}

window.document.write("<p>", findMissingLatters(['a','b','c','d','f']), "</p>");


// Задача №3
// Вы, наверное, знаете систему «лайков» по Facebook и другим страницам. 
// Люди могут "лайкать" сообщения в блогах,изображения или другие предметы. 
// Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию likes :: [String] -> String, которая 
// должна принимать входной массив, содержащий имена людей,которым нравится элемент. 
// Он должен возвращать отображаемый текст, как показано в примерах:

function likes(people) {
    let result;
    switch (people.length) {
        case 0: {
            result = "no one likes this";
            break;
        }
        case 1: {
            result = `${people[0]} likes this`;
            break;
        }
        case 2: {
            result = `${people[0]} and ${people[1]} like this`;
            break;
        }
        case 3: {
            result = `${people[0]}, ${people[1]} and ${people[2]} like this`;
            break;
        }
        default: {
            result = `${people[0]}, ${people[1]} and ${people.length - 2} others like this`;
        }
    }
    return result;
}

window.document.write("<p>", likes(['Alex', 'Jacob', 'Mark', 'Max','Mark', 'Max']), "</p>");


// Задача №4
// Что такое анаграмма?
// Два слова являются анаграммами между собой,если
// они оба содержат одинаковые буквы. 
// Например: 'abba' & 'baab' == true
// Напишите функцию, которая находит все анаграммы слова из списка. 
// В качестве параметра даны слово и массив слов. 
// Функция должна возвращать массив всех анаграмм или пустой массив,
// если анаграмм не обнаружено.

function anagrams(word, words) {
    word = Array.from(word).sort().join('');
    let res =[];
    words.forEach((el) => {
        let str = Array.from(el).sort().join('');
        if (str == word) res.push(el);
    });
    return res;
}

window.document.write("<p>", anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada', 'abab', 'baab']), "</p>");


// Задача №5
// Представим автобус, забирающий и высаживающий людей на каждой остановке. 
// Дан массив массивов, первый элемент которых равен числу пассажиров,
// вошедших в автобус на остановке, а второй - числу пассажиров,
// вышедших на остановке.
// Ваша Задача написать функцию, которая возвращает число людей,
// оставшихся в автобусе после последней остановки (массива).
// Хоть это и последняя остановка,
// в автобусе все еще находятся люди (они, наверное, уснули :D ).
// Помните, что число оставшихся людей в автобусе всегда >= 0
// Значение второго числа первого элемента массива = 0, 
// потому что автобус пустой на первой остановке.
// Например:
// busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17

function busStops(arr) {
    let res = 0;
    arr.forEach(el => {
        res += el[0] - el[1];
    });
    return res;
}

window.document.write("<p>", busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), "</p>");