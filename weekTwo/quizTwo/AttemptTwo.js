let arr = [2, 8, 4, 6];
let size = arr.length;
let t = 10;
let found1=-1;
let found2=-1;

for (let i = 0; i < size; i++) {
    let extra = t - arr[i];
    let j = arr.findIndex((num, index) => num === extra && index !== i);
    if (j !== -1) {
        found1=i;
        found2=j;
        break; 
    }
}
if (found1 !== -1 && found2 !== -1) {
    console.log("INDEX 1:", found1, "INDEX 2:", found2);
} else {
    console.log("No two numbers sum up to the target.");
}
console.log("  ")