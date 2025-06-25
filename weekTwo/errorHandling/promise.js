let promise= new Promise(function(resolve,reject){
    let status = true
if(status===true){
resolve("resolved message",status)
}
else{
    reject("rejected",status)
}
})
promise.then(result=>console.log("Accepted",result)).catch(res=>console.log("rejected",result))