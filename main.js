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

window.document.write("<p>",moveZeros([false,1,0,1,2,0,1,3,"a"]) , "</p>")

// Задача №1
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

window.document.write("<p>", findMissingLatters(['a','b','c','d','f']), "</p>")