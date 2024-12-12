function QuickSort(array) {
  // define base case return array if it is empty or has one element
  if (array.length < 2) {
    return array;
  } else {
    const pviot = array[0];
    console.log("🚀 ~ QuickSort ~ pviot:", pviot);
    const less = [];
    const more = [];
    for (let i = 1; i < array.length; i++) {
      if (array[i] <= pviot) {
        less.push(array[i]);
      } else {
        more.push(array[i]);
      }
    }
    //const less = array.filter((item) => item < pviot);
    console.log("🚀 ~ QuickSort ~ less:", less);
    //const more = array.filter((item) => item > pviot);
    console.log("🚀 ~ QuickSort ~ more:", more);

    return [...QuickSort(less), pviot, ...QuickSort(more)];
  }
}

const list = [1, 5, 5, 7, 8, 3, 2, 6, 7, 2, 1, 5, 8, 3, 9, 6, 4, 2, 8, 3];
console.log(QuickSort(list));
