let userNum = +prompt("Your Number");

while(!Number.isInteger(userNum)){
    userNum = +prompt("Your Number")
}

function factorial(n, result){
    result = result || 1;
    if(!n){
        return result;
    }else{
        return factorial(n-1, result*n);
    }
}

alert("Your factorial " + (factorial(userNum)));