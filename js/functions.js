
/*  1.   Функция для проверки длины строки.
 Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
  если строка меньше или равна указанной длине, и false, если строка длиннее.
*/


const checkStringLength = (string, maxStringLenght) => string.length <= maxStringLenght;

checkStringLength('kekstogrammmm', 10);

/*//проверка
console.log(checkStringLength('kekstogrammmm', 10));// false
console.log(checkStringLength('keks', 10));// true
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*  2.   Функция для проверки, является ли строка палиндромом.
Предусмотрите случай, когда в строке встречаются пробелы. Они не должны учитываться при проверке!*/

const isPalindrome = (string)=> {
  const newString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }
  return newString === reverseString;
};


isPalindrome('топот');
/*//проверка
 console.log(isPalindrome('топот')); // true
 console.log(isPalindrome('ДовОд')); // true
 console.log(isPalindrome('Кекс')); // false
 console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*  3.   Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их
 в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:
 когда вместо строки приходит число возвращать функция по-прежнему должна только целые положительные числа:*/


const extractNumber = (note) => {
  const numericString = note.toString().replace(/\D/g, '');
  return parseInt(numericString, 10);
};

extractNumber('2023 год');

/*  //проверка
console.log(extractNumber('2023 год'));            // 2023
console.log(extractNumber('ECMAScript 2022'));     // 2022
console.log(extractNumber('1 кефир, 0.5 батона')); // 105
console.log(extractNumber('агент 007'));           // 7
console.log(extractNumber('а я томат'));           // NaN
console.log(extractNumber('2023 год 18 февраля'));//202318
console.log(extractNumber(2023));//2023
console.log(extractNumber(1.555));//1555
console.log(extractNumber(-1));//1
console.log(extractNumber(-1.56));//156
console.log(extractNumber(-1000.25));//100025
*/

