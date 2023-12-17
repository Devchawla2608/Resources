clrTime =   setTimeout(function() {
    console.log('setTimeout');
    }
, 1000);

clearTimeout(clrTime); // To clear timeout


clr = setInterval(function() {
    console.log('setInterval');
    }
, 1000);

clearInterval(clr); // To clear interval
