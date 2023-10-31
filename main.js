'use strict'

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