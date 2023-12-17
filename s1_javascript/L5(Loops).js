var arr = [1,2,3,4];
console.log(arr);

// For Loop

for(var i = 0 ;i<arr.length ; i++){
    console.log(arr[i]);
}

// For Each Loop
arr.forEach(function(element){
    console.log(element);
})

// While Loop

let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

// Do While
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length)
