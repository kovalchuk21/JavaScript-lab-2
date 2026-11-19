// Лабораторна робота №2, варіант 10
// Ковальчук Ігор, КН-25-1

//Task 1
console.log('Завдання 1');
function f(x) {
    return (Math.log(x) + 2) / (x - 3);
}
// а) табулювання на відрізку
console.log('а) табулювання на відрізку [4; 8], dx = 0.5:');
let a = 4, b = 8, dx = 0.5;
for (let x = a; x <= b + 1e-9; x += dx) {
    console.log(`x = ${x.toFixed(2)}, y = ${f(x).toFixed(5)}`);
}
// б) n значень, починаючи з x0
console.log('б) 5 значень, починаючи з x0 = 5, dx = 0.4:');
let x0 = 5, dx2 = 0.4, n = 5;
let x = x0;
let count = 0;
while (count < n) {
    console.log(`x = ${x.toFixed(2)}, y = ${f(x).toFixed(5)}`);
    x += dx2;
    count++;
}

//Task 2
console.log('Завдання 2');
function term(l) {
    return Math.pow(-1, l) * (Math.pow(l, 3) + 2) / (l + 10);
}
function factor(j) {
    return (j + 6) / ((j + 2) * (j + 9));
}

console.log('Сума:');
let y = 0;
for (let l = 2; l <= 8; l++) {
    y += term(l);
}
console.log('y =', y);

console.log('Добуток:');
let Z = 1;
for (let j = 1; j <= 7; j++) {
    Z *= factor(j);
}
console.log('Z =', Z);

//Task 3
console.log('Завдання 3');
const R = [2.2, 3.3, -1.1, 4.4, -5.5];
let product = 1;
for (let i = 0; i < R.length; i++) {
    product *= R[i];
    console.log(`Елемент №${i + 1} = ${R[i]}, проміжний добуток = ${product.toFixed(4)}`);
}
console.log('Добуток елементів масиву R:', product.toFixed(4));

//Task 4-5
console.log('Завдання 4-5');
const products = [
    {
        name: "Пшениця м'яка озима, 2 клас",
        unit: "т",
        shelfLife: "12 місяців",
        purchasePrice: 8200,
    },
    {
        name: "Молоко коров'яче незбиране, 3.2%",
        unit: "л",
        shelfLife: "3 доби",
        purchasePrice: 16.5,
    },
    {
        name: "Картопля продовольча сорту «Слов'янка»",
        unit: "кг",
        shelfLife: "6 місяців",
        purchasePrice: 9.8,
    },
    {
        name: "Олія соняшникова нерафінована",
        unit: "л",
        shelfLife: "9 місяців",
        purchasePrice: 62,
    },
];
for (const item of products) {
    console.log(
        `${item.name} — ціна закупівлі ${item.purchasePrice} грн/${item.unit}, ` +
        `термін придатності: ${item.shelfLife}`
    );
}
