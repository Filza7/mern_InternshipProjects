let arr=[23,45,38,19,3,56]
let size=arr.length
console.log("before",arr)
for(let i=1;i<size;i++)
{
    let key=arr[i]
    let j=i-1
    while(j>=0 && key<arr[j])
    {
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=key
}
console.log("after",arr)