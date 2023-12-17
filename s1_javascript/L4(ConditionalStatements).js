var age = 34;

// if

if(age > 18){
    console.log("You are eligible to vote");
}

// if else 

if(age > 18){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}

// If Else ladder 

if(age > 18){
    console.log("You are eligible to vote");
}else if(age > 15){
    console.log("You are not eligible to vote");
}else{
    console.log("You are not eligible to vote");
}

// Switch Case

switch (age) {
    case 18:
        console.log("You are eligible to vote");
        break;
    case 15:
        console.log("You are not eligible to vote");
        break;
    default:
        console.log("You are not eligible to vote");
        break;
}
