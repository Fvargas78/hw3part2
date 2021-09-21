function verify() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  // check if text input value is 'not a number'
  if (isNaN(num1) || isNaN(num2) || isNaN(num3))
  {
    document.getElementById("result").value = ("Invalid entry. Only enter numbers.");
  }
  // check for empty text input
  else if (num1 === "" || num2 === "" || num3 === "") {
    document.getElementById("result").value = ("Fill in all the blanks with numbers.");
  }
  else {
    // type convert from string to integer for calculations
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    num3 = parseInt(num3)

    let sum = num1 + num2 + num3;
    let average = sum / 3;
    let product = num1 * num2 * num3;
    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);

    // display result
    document.getElementById("result").value = (
      "Sum: " + sum +
      "\nAverage: " + average +
      "\nProduct: " + product +
      "\nMin: " + min +
      "\nMax: " + max);
  }

}

function fade() {
  // fade the textarea
  $("#result").fadeTo("slow", 0.15);
}
