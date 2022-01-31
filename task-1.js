// 1) Чистый JS:  написать функцию форматирования для суммы, пример:  "3123123.00" -> "3 123 123.00"
const INTERVAL_OF_NUM = 3;

function formatingNumber(num) {
  const indexOfDot = num.toString().indexOf(".");
  if (indexOfDot === -1) {
    const retryNumber = num + ".00";
    return formatingNumber(retryNumber);
  }
  const integerSlice = num.slice(0, indexOfDot);
  const otherNumber = num.slice(indexOfDot, num.length);
  const reverseNumber = integerSlice.split("").reverse();
  const numberOfSpace = Math.floor(integerSlice.length / INTERVAL_OF_NUM);
  for (
    let i = INTERVAL_OF_NUM, operations = 0;
    operations < numberOfSpace;
    i += INTERVAL_OF_NUM, operations += 1
  ) {
    if (!reverseNumber[i]) {
      break;
    }
    reverseNumber[i] += " ";
  }
  return reverseNumber.reverse().join("") + otherNumber;
}

console.log(formatingNumber("3123123.00"));
console.log(formatingNumber("23.00"));
console.log(formatingNumber("14123412423123.00"));
console.log(formatingNumber("423123.00"));
console.log(formatingNumber("1.00"));
console.log(formatingNumber("100.00"));
console.log(formatingNumber("123.45"));
console.log(formatingNumber("1000.00"));
console.log(formatingNumber("1000.0"));
console.log(formatingNumber("10000"));
console.log(formatingNumber(123456789));
