let arr=[2,4,3,9,7]
let size=arr.length
let t=12
let result=false
for(let i=0;i<size;i++){
let j=0
while(j<size){
    if(arr[i]+arr[j]===t && i!==j){
        console.log("index1:",i,"index2",j)
        result=true;
    }
        j++;
    
}
}
if(result===false){
    console.log("no numbers sum up to make this target")
}