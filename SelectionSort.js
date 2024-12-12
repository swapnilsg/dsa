function SmallestElement(arr) {
  // assign first element as smallest initially
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < smallest) {
      // re-assign smallest
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

function SelectionSort(arr) {
  // to store sorted elements ...
  const newArray = [];
  while (arr.length) {
    let smallest_index = SmallestElement(arr);
    console.log("🚀 ~ SelectionSort ~ smallest_index:", smallest_index);
    newArray.push(...arr.splice(smallest_index, 1));
  }
  
  return newArray;
}

const list = [5, 3, 6, 2, 10];
console.log(SelectionSort(list));
