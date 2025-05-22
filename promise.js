const  promise = new Promise ((resolve , reject) => {
    let success = true;
    if(success)
    {
        resolve("data  is  correct");

    }else{

    }reject("data is wrong")
})
promise.then((cb)=>{
    console.log(cb)}).catch((error)=>{
        console.log(error);
    })


