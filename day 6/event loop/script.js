// console.log('start');
// setTimeout(()=>{console.log('Timeout'),0})
// console.log('end')

// console.log('start');
// setTimeout(()=>{console.log('Timeout'),0})
// console.log('intermediate')
// console.log('end')

// setTimeout(()=>{
//     console.log('Timeout 1'),
//     4000})
// console.log('start');
// setTimeout(()=>{
//     console.log('Timeout 2'),
//     2000})
// console.log('intermediate')
// console.log('end')

// function createOrder(x){
//  console.log(x);
//  setTimeout(()=> {fn('saum123')},1000);
// }
// function makePayment(orderID){
//     console.log(orderID)
// }
// createOrder('soap',makePayment);

// const pr=new Promise((resolve,reject)=>{
    // if(true){
        //setTimeout(()=>{resolve("done-123");},1000)
    //     resolve();
    // }
    // else{
    //     reject();
    // }

// });
// pr.then((res)=>{
//     console.log(res)
// })
// setTimeout(()=>{console.log('First Timeout')},0);

// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{reject("out of stock");},1000)

// });
// setTimeout(()=>{console.log('First Timeout')},0);
// // console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })
// setTimeout(function abc(){
//     console.log('I am one');
// },0);
// const pr=new Promise((res,rej)=>{
//     setTimeout(()=>{res('done')},0);
// })
// pr.then(function b(res){
//     console.log("promise completed:",res);
// });
// setTimeout(function xyz(){
//     console.log('I am two');
// },0);
