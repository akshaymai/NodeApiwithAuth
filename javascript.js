// const arr=[10,20,30,40,50,60,70,80,90,100]
// // const filterarray=arr.forEach((value,index)=>{
// //     console.log("Value's are",index)
// // })
// // const maparr=arr.map()
// const result=arr.slice(7,0)
// console.log(arr)

let day;
switch (new Date().getDay()) {
    case 0:
        day='Sunday'
        break;

    case 1:
        day='Mondaay'
         break;
 
    case  2:
        day='Tuesday'
         break;
    case 3:
        day='Wednesday'
            break; 
    case 4:
        day='Thursday'
            break;  
    case 5:
         day='Fridays'
            break; 
    case 6:
         day='Saterday'
                break;                                 
            default:
        break;
}
console.log(day)