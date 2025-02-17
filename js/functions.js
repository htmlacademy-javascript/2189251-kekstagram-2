
/*  1.   Функция для проверки длины строки.
 Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
  если строка меньше или равна указанной длине, и false, если строка длиннее.
*/

function getStringLength(string,maxLength){
  let stringLength=string.length;
  return (stringLength<=maxLength)?true:false;
}

/*   //проверка
console.log(getStringLength('kekstogrammmm', 10));// false
console.log(getStringLength('keks', 10));// true
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*  2.   Функция для проверки, является ли строка палиндромом.
Предусмотрите случай, когда в строке встречаются пробелы. Они не должны учитываться при проверке!*/

function isPalindrome(string) {
  let newString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }
  // console.log(newString);
  // console.log(reverseString);
  return newString === reverseString;
}

/*   //проверка
 console.log(isPalindrome('топот')); // true
 console.log(isPalindrome('ДовОд')); // true
 console.log(isPalindrome('Кекс'));  // false
 console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*  3.   Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их
 в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:
 когда вместо строки приходит число возвращать функция по-прежнему должна только целые положительные числа:*/


function getNumber(note) {
  if (!isNaN(note) && note !== null) {
    return Math.abs(Number(note.toString().replace(/[.,]/g, '')));
  } else {
    let number = '';
    for (let char of note.toString()) {
      if (!isNaN(parseInt(char))) {
        number += char;
      }
    }
    return number.length > 0 ? Number(number) : NaN;
  }
}

/*   //проверка
console.log(getNumber('2023 год'));            // 2023
console.log(getNumber('ECMAScript 2022'));     // 2022
console.log(getNumber('1 кефир, 0.5 батона')); // 105
console.log(getNumber('агент 007'));           // 7
console.log(getNumber('а я томат'));           // NaN
console.log(getNumber('2023 год 18 февраля'));//202318
console.log(getNumber(2023));//2023
console.log(getNumber(1.555));//1555
console.log(getNumber(-1));//1
console.log(getNumber(-1.56));//156
console.log(getNumber(-1000.25));//100025
*/
