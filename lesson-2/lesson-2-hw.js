// 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Инкремент в префиксной форме. Значеие операнда "a" увеличивается на 1 и присваивается переменной "c".
d = b++; alert(d);           // 1 Инкремент в постфиксной форме. Cначала возвращается исходное значение операнда, и только затем значение  
// операнда "b" увеличивается на единицу.
c = (2 + ++a); alert(c);     // 5 Значение операнда "a" на входе 2. Мы увеличиваем его на 1 и добавляем 2. Как итог 5.
d = (2 + b++); alert(d);     // 4 Значение операнда "b" на входе 2. Мы прибавляем 2, как итог 4, только после этого инкрементируем "b" на 1.
alert(a);                    // 3 На входе операнд "a" равен 3 на основании кода на две строки выше.
alert(b);                    // 3 На входе операнд "b" равен 3 на основании кода на две строки выше.
//Почему код даёт именно такие результаты ? 
//см. ответы в комментах к каждой строке кодв выше.

//2. Чему будет равен x в примере ниже ?
var a = 2;
var x = 1 + (a *= 2);

// Ответ: 5. В скобках оператор присваивания a = a * 2. 

//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.Затем написать скрипт, который работает по 
//следующему принципу:
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
var a = prompt('Введите целое число "a": ');
var b = prompt('Введите целое число "b": ');

if ((a >= 0) && (b >= 0)) {
    console.log(`Числа положительные. Разность чисел равна ${a - b}`);
} else if ((a < 0) && (b < 0)) {
    console.log(`Числа отрицательные. Произведение чисел равно ${a * b}`);
} else {
    console.log(`Числа разных знаков. Сумма чисел равно ${a + b}`);
}

//4. Присвоить переменной а значение в промежутке[0..15].С помощью оператора switch организовать вывод чисел от a до 15.
var a = prompt('Введите целое положеительное число до 15 включительно: ');

switch (Number(a)) {
    case 1: console.log(a); a++;
    case 2: console.log(a); a++;
    case 3: console.log(a); a++;
    case 4: console.log(a); a++;
    case 5: console.log(a); a++;
    case 6: console.log(a); a++;
    case 7: console.log(a); a++;
    case 8: console.log(a); a++;
    case 9: console.log(a); a++;
    case 10: console.log(a); a++;
    case 11: console.log(a); a++;
    case 12: console.log(a); a++;
    case 13: console.log(a); a++;
    case 14: console.log(a); a++;
    case 15: console.log(a);
}


//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.
var a = 15
var b = 5
console.log(`Сложение равно ${sum(a, b)}`);
console.log(`Вычитание равно ${sub(a, b)}`);
console.log(`Умножение равно ${mul(a, b)}`);
console.log(`Деление равно ${div(a, b)}`);

function sum(a, b) {
    return Number(a) + Number(b)
}
function div(a, b) {
    return Number(a) / Number(b)
}
function sub(a, b) {
    return Number(a) - Number(b)
}
function mul(a, b) {
    return Number(a) * Number(b)
}


//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – 
//строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из 
//пункта 5) и вернуть полученное значение(использовать switch).
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum': return sum(arg1, arg2)
        case 'div': return div(arg1, arg2)
        case 'sub': return sub(arg1, arg2)
        case 'mul': return mul(arg1, arg2)
    }
}

console.log(`Сложение равно ${mathOperation(a, b, 'sum')}`);
console.log(`Вычитание равно ${mathOperation(a, b, 'sub')}`);
console.log(`Умножение равно ${mathOperation(a, b, 'mul')}`);
console.log(`Деление равно ${mathOperation(a, b, 'div')}`);



//7. * Сравнить null и 0. Попробуйте объяснить результат.

var a = null
var b = 0
console.log(`a = ${a}`)
console.log(`b = ${b}`)

console.log(`a > b ${a > b}`)    //false
console.log(`a == b ${a == b}`)  //false
console.log(`a >= b ${a >= b}`)  //true
console.log(`a < b ${a < b}`)    //false
console.log(`a <= b ${a <= b}`)  //true

//Объяснение: согласно спецификации ECMA упрощенно следует думать так:
//Если null < 0 принимает значение false, то null >= 0 должен принимать значение true.
//Если null > 0 принимает значение false, то null <= 0 должен принимать значение true.
//НО ПРИНЯТЬ ЭТО ТЯЖЕЛО. В КАКИХ ЕЩЁ ЯП РАБОТАЕТ ТАКАЯ ЛОГИКА?!


// 8. * С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val – заданное число, pow – 
//степень.


function power(val, pow) {
    if (pow == 0) return 1; //базовый случай
    else return val * power(val, pow - 1)
}

console.log(`5 в степени 3 равно ${power(5, 3)}`)
console.log(`3 в степени 5 равно ${power(3, 5)}`)
console.log(`3 в степени 0 равно ${power(3, 0)}`)