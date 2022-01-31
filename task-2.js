// 2) Чистый JS: сделать маску ввода на  инпуте например для суммы с копейками * .00
//     (если отличается от маски то не вводится ничего) Вместо * любое количество цифр,
//         там где 00(это две любые цифры)

const input = document.querySelector("#mask");

input.addEventListener("input", inputMask);

function inputMask(e) {
  const value = e.target.value;
  const isNumber = Number(value);
  const dotIndex = value.indexOf(".");

  if (isNumber && dotIndex === -1) {
    input.setRangeText(".00");
  }
}
