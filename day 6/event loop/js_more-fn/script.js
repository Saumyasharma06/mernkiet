// const arr=[10,22,34];
// const ans=arr.map((a)=>{
//     console.log(a);
//     return(a*2)
// });
// console.log(ans);

// const arr=[10,22,34];
// const ans2=arr.map(a=>a**2)
// console.log(ans2);

// const arr=[10,22.1,34,7.4];

// const ans2=arr.map(a=>parseInt(a))
// console.log(ans2);


// const arr=[10,22,34];
// const ans= arr.push(99);
// console.log(arr)

// const arr=[10,22,34];
// const ans=arr.filter((a)=>{
//     if(a>20)
//     return true;
//     else 
//     return false
// });
// console.log(ans);
// console.log(arr);

// const arr=[
//     'Delhi',
//     'Mumbai',
//     'Chennai',
//     'Pune',
//     'India',
//     'Russia',
//     'USA'
// ]
// const ans=arr.filter((s)=>{
//     if(s.includes('i')|| s.includes('I')){
//         return true;

// }
//     else false;
// });
// console.log(ans)

// const arr=[
//     'Delhi,India','Mumbai-India','Chennai-India','Shanghai,China','Bejing,China',
//     'Washington,USA'

// ]
// const ans=arr.filter((a)=>{
//     const ns=a.toLowerCase();
//     if(ns.includes('india')){
//         return true;
// }
//     else false;
// });
// console.log(ans)

// const arr=[2,4,8,10];
// const ans=arr.reduce((a,b,c,d)=>{
//     console.log(a,b,c,d)
//     return a+b

// })
// console.log(ans)

const arr=['ab','cd','xy','z'];
const ans=arr.reduce((a,b,c,d)=>{
    console.log(a,b,c,d)
    return a+b

})
console.log(ans)
