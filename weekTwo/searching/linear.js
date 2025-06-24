let arr=[12,34,6,45,39]
let size=arr.length
let key=39
linearSearch(arr,size,key)

function linearSearch(arr,size,key){
    for(let i=0;i<size;i++){
        if(key==arr[i]){
            console.log("Value found at:",i)
        }

    }
}