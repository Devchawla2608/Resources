function fn(){
    console.log(a);
    var a = 10;
    console.log(a);
    if(a){
        var a = 20;
        console.log(a);
    }
    console.log(a);
}
console.log(a);
fn();
console.log(a);