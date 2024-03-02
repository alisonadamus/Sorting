function createArrayForQuick() {
  CreateArray("quickArray");
}

function quickSort() {
  console.log("==================QUICK SORT==================");
  operations = 0;
  let array = [];
  array = quickArray.textContent.split(",");
  document.getElementById("arrayForQuick").textContent = "Array: " + array;

  console.log(array);
  console.log(quickSplit(array));

  document.getElementById("quickSortedArray").textContent = "Result: " + array;
  document.getElementById(
      "quickOperations").textContent = "Кількість операцій: " + operations;
}

function quickSplit(arr) {
  console.log("==================");
  let middle = parseInt(arr[Math.floor(arr.length / 2)]);
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    operations++;
    let a = parseInt(arr[i]);
    if (a > middle) {
      right.push(a);
    } else {
      left.push(a);
    }
  }
  console.log("left " + left);
  console.log("right " + right);

  if (left.length === arr.length || right.length === arr.length) {
    return arr;
  }

  if (left.length > 1) {
    left = quickSplit(left);
  }
  if (right.length > 1) {
    right = quickSplit(right);
  }

  return left.concat(right);
}



