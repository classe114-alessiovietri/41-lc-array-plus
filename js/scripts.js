const numbers = [
    34,
    52,
    7,
    10,
    99
];

const myNumbers1 = document.getElementById('my-numbers-1');

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     myNumbers1.innerHTML += `
//         <li>
//             ${numbers[i]}
//         </li>
//     `;
// }

/* OPPURE */

numbers.forEach((
        elem,       // i-esimo elemento dell'array (quindi numbers[i])
        i,          // Indice di iterazione
        arr         // Intero array di partenza (quindi numbers)
    ) => {
    console.log(elem);
    /* OPPURE */
    // console.log(numbers[i]);
    /* OPPURE */
    // console.log(arr[i]);
    myNumbers1.innerHTML += `
        <li>
            ${elem}
        </li>
    `;
});

/* 
    ------------------------------------------------------------------------------
*/

const numbersDue = [
    1,
    2,
    3,
    4,
    5
];

// const numbersSquare = [];
// for (let i = 0; i < numbersDue.length; i++) {
//     numbersSquare.push(numbersDue[i] * numbersDue[i]);
// }
// console.log(numbersSquare);

/* OPPURE */

// const numbersSquare = [];
// for (let i = 0; i < numbersDue.length; i++) {
//     const newNumber = makeSquare(numbersDue[i]);
//     numbersSquare.push(newNumber);
// }
// console.log(numbersSquare);

// function makeSquare(num) {
//     return num * num;
// }

/* OPPURE */

// function myMap() {
//     const numbersSquare = [];
//     for (let i = 0; i < numbersDue.length; i++) {
//         const newNumber = makeSquare(numbersDue[i]);
//         numbersSquare.push(newNumber);
//     }
//     return numbersSquare;
// }

// console.log(numbersSquare);

// function makeSquare(num) {
//     return num * num;
// }

/* OPPURE */

// const numbersSquare = numbersDue.map(
//     (elem) => {
//         return elem * elem;
//     }
// );
// console.log(numbersSquare);

/* ALTRO ESEMPIO */

const myNumbers2 = document.getElementById('my-numbers-2');

const numbersSquareOrCube = numbersDue.map(
    (elem) => {
        console.log(elem);

        if (elem % 2 == 0) {
            myNumbers2.innerHTML += `
                <li>
                    ${elem * elem}
                </li>
            `;
            return elem * elem;
        }
        else {
            myNumbers2.innerHTML += `
                <li>
                    ${elem * elem * elem}
                </li>
            `;
            return elem * elem * elem;
        }
    }
);
console.log(numbersSquareOrCube);

/* 
    ------------------------------------------------------------------------------
*/

const numbersTre = [
    5,
    12,
    13,
    40,
    7
];

const myNumbers3 = document.getElementById('my-numbers-3');

// const evenNumbers = [];
// for (let i = 0; i < numbersTre.length; i++) {
//     if (numbersTre[i] % 2 == 0) {
//         evenNumbers.push(numbersTre[i]);
//         myNumbers3.innerHTML += `
//             <li>
//                 ${numbersTre[i]}
//             </li>
//         `;
//     }
// }
// console.log(evenNumbers);

/* OPPURE */

// const evenNumbers = [];
// numbersTre.forEach((elem) => {
//     if (elem % 2 == 0) {
//         evenNumbers.push(elem);
//         myNumbers3.innerHTML += `
//             <li>
//                 ${elem}
//             </li>
//         `;
//     }
// });
// console.log(evenNumbers);

/* OPPURE */

const evenNumbers = numbersTre.filter((elem) => {
    if (elem % 2 == 0) {
        console.log(elem, 'verrà incluso nell array risultante');

        myNumbers3.innerHTML += `
            <li>
                ${elem}
            </li>
        `;

        return true;
    }
    else {
        console.log(elem, 'NON verrà incluso nell array risultante');

        return false;
    }
});
console.log(evenNumbers);

/* OPPURE */

// const evenNumbers = numbersTre.filter((elem) => {
//     return (elem % 2 == 0);
// });
// console.log(evenNumbers);

/* OPPURE */

// const evenNumbers = numbersTre.filter((elem) => (elem % 2 == 0));
// console.log(evenNumbers);