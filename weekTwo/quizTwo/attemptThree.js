let arr=[23,1,2,4]
let size=arr.length
let target=3
let found
let map= new Map()
for (let i=0;i<size;i++){
    let extra=target-arr[i]
    
    if(map.has(extra)){
        found=[map.get(extra),i]
        break
    }
    map.set(arr[i],i)
}
console.log(found)