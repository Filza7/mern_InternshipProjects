let arr = [34, 12, 89, 41, 2, 6, 77];
console.log("Before:", arr);

mergesort(arr, 0, arr.length - 1);

console.log("After", arr);

function mergesort(arr, start, end) {
    if (start >= end) {
        return;
    }

    let mid = Math.floor((start + end) / 2);

    mergesort(arr, start, mid);
    mergesort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
    let size1 = mid - start + 1;
    let size2 = end - mid;

    let left = new Array(size1);
    let right = new Array(size2);

    for (let i = 0; i < size1; i++) {
        left[i] = arr[start + i];
    }

    for (let j = 0; j < size2; j++) {
        right[j] = arr[mid + 1 + j];
    }

    let i = 0, j = 0, k = start;

    while (i < size1 && j < size2) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }

    while (i < size1) {
        arr[k] = left[i];
        i++
        k++
    }

    while (j < size2) {
        arr[k] = right[j];
        k++
        j++
    }
}
