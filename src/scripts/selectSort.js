function createArrayForSelect() {
  CreateArray("selectArray");
}

function selectSort() {
  console.log("==================SELECT SORT==================");
  let operations = 0;
  let array = [];
  array = selectArray.textContent.split(",");
  document.getElementById("arrayForSelect").textContent = "Array: " + array;

  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIndex = i;

    for(let j = i+1; j < array.length; j++){
      let a = parseInt(array[j]);
      if (a < min) {
        min = a;
        minIndex = j;
      }
      operations++;
    }

    let b = array[i];
    array[i] = min;
    array[minIndex] = b;
    console.log(array);
    operations++;
  }

  document.getElementById("selectSortedArray").textContent = "Result: " + array;
  document.getElementById(
      "selectOperations").textContent = "Кількість операцій: " + operations;
}