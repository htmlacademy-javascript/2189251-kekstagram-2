
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

/***************************************  5.16. Функции возвращаются  *************************************/
/*Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность
встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры,
 так и одна. Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.*/

const MINUTS_IN_HOUR = 60;

function isBusinessMeetingWillBe(startOfDay, endOfDay, meetingStart, meetingDuration) {
  // Преобразуем время в минуты с начала дня
  const toMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * MINUTS_IN_HOUR + minutes;
  };

  const startDay = toMinutes(startOfDay);
  const endDay = toMinutes(endOfDay);
  const meetingStartTime = toMinutes(meetingStart);
  const meetingEndTime = meetingStartTime + meetingDuration;

  // Проверяем условия
  return meetingStartTime >= startDay && meetingEndTime <= endDay;
}

isBusinessMeetingWillBe('08:00', '17:30', '14:00', 90);

// Проверка функции
/*console.log(isBusinessMeetingWillBe('08:00', '17:30', '14:00', 90)); // true
console.log(isBusinessMeetingWillBe('8:0', '10:0', '8:0', 120));// true
console.log(isBusinessMeetingWillBe('08:00', '14:30', '14:00', 90)); // false
console.log(isBusinessMeetingWillBe('14:00', '17:30', '08:0', 90));// false
console.log(isBusinessMeetingWillBe('8:00', '17:30', '08:00', 900)); // false*/
