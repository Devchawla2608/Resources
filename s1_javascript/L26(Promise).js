// Promise Cycle -> 
// Promise -> Pending -> Resolved
//                    -> Rejected

// There are four things which we have to keep in mind while using promises

// 1.) relation between time and Work
// 2.) Promise chain
// 3.) Error handling
// 4.) Promise.all (Finally)

let  stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"], 
    holder: ["cone", "cup", "stick"],
    liquid: ["water", "ice"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

let order = (time, work) => {
    return new Promise( (resolve , reject) =>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time)
        }else{
            reject(console.log("Our shop is closed"))
        }
    })
}

order(2000 , ()=>console.log(`${stocks.fruits[0]} was selected`))
.then(()=>{
    return order(0o0 , ()=>console.log("Production has started"));
})
.then(()=>{
    return order(2000 , ()=>console.log("Fruit has been chopped"));
})
.then(()=>{
    return order(1000 , ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
}
)
.then(()=>{
    return order(1000 , ()=>console.log("Machine was started"));
}
)
.then(()=>{
    return order(2000 , ()=>console.log(`${stocks.holder[0]} was selected`));
}
)
.then(()=>{
    return order(3000 , ()=>console.log(`${stocks.toppings[0]} was selected`));
}
)
.then(()=>{
    return order(2000 , ()=>console.log("Ice cream was served"));
}
)
.catch(()=>{
    console.log("Customer left");
}
)
.finally(()=>{
    console.log("Day ended, shop is closed");
})