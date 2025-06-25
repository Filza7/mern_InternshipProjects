let arr=[1,37,59,12,23]
try{
    let out=arr.find(element =>element ===3)
    if(out===undefined){
        throw "Number does not exist in array"
    }
    console.log("found:",out)
}
catch(error){
    console.log("Error:",error)
}

try {
    let index = arr.findIndex(num => num === 12);
    
    if (index === -1) {
        throw "Number does not exist in array";
    }

    console.log("Number found at index:", index);
    console.log("Value:", arr[index]);
} catch (error) {
    console.log("Error:", error);
}