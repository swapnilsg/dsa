function BinarySearch(list, item) {
    // set initial pointers to low and high 
    let low = 0;
    let high = list.length - 1;

    // loop till all elements are serached 
    while (low <= high) {
        // calculate the middle element 
        let mid = Math.floor((low + high) / 2);
        //console.log(mid);
        // check if mid is the element we are searchng for 
        if (list[mid] === item ) {
            return mid;
        }
        
        // check if mid is too high 
        if (list[mid] > item) {
            // re-assign high
            high = mid - 1;
        } else {
            // re-assign low
            low = mid + 1;
        } 
    }
    return null;
}

const list = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const find = BinarySearch(list, 15);
console.log(find);