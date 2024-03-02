function createArrayForBubble() {
  CreateArray("bubbleArray");
}

function bubbleSort() {
  console.log("==================BUBBLE SORT==================");
  let operations = 0;
  let array = [];
  array = bubbleArray.textContent.split(",");
  document.getElementById("arrayForBubble").textContent = "Array: " + array;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < (array.length - i); j++) {
      let a = parseInt(array[j]);
      let b = parseInt(array[j + 1]);
      if (a > b) {
        array[j] = b;
        array[j + 1] = a;
      }
      console.log(array);
      operations++;
    }
  }

  document.getElementById("bubleSortedArray").textContent = "Result: " + array;
  document.getElementById(
      "bubleOperations").textContent = "Кількість операцій: " + operations;
}