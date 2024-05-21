// const promise1 = new Promise((resolve , reject)=>{

//     setTimeout(()=>{
//         console.log("hiiii");
//         resolve("promise1 resolved");
//     },1000)
// })

// promise1.then(()=>{
//     console.log("Promiseee");
// })


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Task2 method");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Resolved ");
// })


// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"Shishir", email:"chai@example"})
//     },1000)

// })

// promise2.then((user)=>{
//     console.log(user.username);
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username:"Shishir", email:"chai@example"})
//         }else{
//             reject("Error")
//         }
//     },1000)

// })

// promise3
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Finally is Executed");
// })

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
            if(!error){
                resolve({username:"Deshmukh", password:"sd@123"})
            }else{
                reject("Error : Someting went wrong")
               }
        },1000)
})

async function five(){
   try {
        const asap = await promise4
        console.log(asap);
   } catch (error) {
        console.log(error);
   }
}

//five()


async function getallusers() {
    try {
        const resp = await fetch('https://api.github.com/users/shishirdeshmukh')
        const data = await resp.json()
        console.log(data)
    } catch (error) {
        console.log("error");
    }
}

//getallusers()

fetch('https://api.github.com/users/shishirdeshmukh')
.then((resp)=>{
    return resp.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})




