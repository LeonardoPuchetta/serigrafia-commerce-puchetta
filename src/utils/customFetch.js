let ok_promise = true ;

let customFetch = (time,task) =>{
    return new Promise((resolve,reject)=>{
        if (ok_promise){
            setTimeout(()=>{
                resolve(task)
            },time)
        } else {
            reject("Ha ocurrido un error")
        }
    })
}

export default customFetch;