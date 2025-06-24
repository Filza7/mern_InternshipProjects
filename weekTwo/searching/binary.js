let arr=[2,3,4,7,8,10]
let size=arr.length
let key=10
binarySearch(arr,size,key)

function binarySearch(arr, size, key) {
    let start = 0;
    let end = size - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === key) {
            console.log("Value found at index:", mid);
            return;
        } else if (key < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    console.log("Value not found");
}
