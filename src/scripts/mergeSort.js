let operations = 0;
function createArrayForMerge() {
  CreateArray("mergeArray");
}

function mergeSort() {
  console.log("==================MERGE SORT==================");
  operations = 0;
  let array = [];
  array = mergeArray.textContent.split(",");
  document.getElementById("arrayForMerge").textContent = "Array: " + array;

 array = mergeSplit(array);

  document.getElementById("mergeSortedArray").textContent = "Result: " + array;
  document.getElementById(
      "mergeOperations").textContent = "Кількість операцій: " + operations;

}

function mergeSplit(arr) {
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  if (left.length > 2) {
    left = mergeSplit(left);
  }
  if (right.length > 2) {
    right = mergeSplit(right);
  }

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    operations++;
    let l = parseInt(left[leftIndex]);
    let r = parseInt(right[rightIndex]);
    if (l < r) {
      result.push(l);
      leftIndex++;
    } else {
      result.push(r);
      rightIndex++;
    }
  }

  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  console.log(result);
  return  result;
}



