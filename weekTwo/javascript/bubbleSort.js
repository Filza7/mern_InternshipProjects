let arr=[12,45,3,56,93,23,37]
let size=arr.length
console.log("before",arr)
console.log(size)
for(let i=0;i<size-1;i++){
    for(let j=0;j<size-1-i;j++){
        if (arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log("after",arr)