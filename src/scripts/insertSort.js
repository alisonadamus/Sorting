function createArrayForInsert() {
  CreateArray("insertArray");
}

function insertSort() {
  console.log("==================INSERT SORT==================");
  let operations = 0;
  let array = [];
  array = insertArray.textContent.split(",");
  document.getElementById("arrayForInsert").textContent = "Array: " + array;

  for (let i = 0; i < array.length; i++) {
    let a = parseInt(array[i]);
    let b = parseInt(array[i + 1]);
    if (a > b) {
      array[i] = b;
      array[i + 1] = a;
      console.log(array);
      operations++;
      for (let j = i; j > 0; j--) {
        let c = parseInt(array[j]);
        let d = parseInt(array[j - 1]);

        if (c < d) {
          array[j] = d;
          array[j - 1] = c;

          console.log(array);
          operations++;
        } else {
          break;
        }
      }
    }
  }
  document.getElementById("insertSortedArray").textContent = "Result: " + array;
  document.getElementById(
      "insertOperations").textContent = "Кількість операцій: " + operations;
}