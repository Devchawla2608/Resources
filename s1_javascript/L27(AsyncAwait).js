// Difference Between Async/Await and Promise

let  stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"], 
    holder: ["cone", "cup", "stick"],
    liquid: ["water", "ice"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

let order = ()=>{
    return new Promise( (resolve , reject) =>{
        if(is_shop_open){
            resolve();
        }else{
            reject();
        }
    })
}

async function order(){
    
}