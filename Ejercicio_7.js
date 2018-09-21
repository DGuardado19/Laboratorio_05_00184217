function bisi(n){
    if (((n%100)!=0)&&((n%4)==0)|| ((n%400)==0)){
        console.log("El año es bisiesto prro");
    }
    else{
        console.log("EL año no es bisiesto :C")
    }
}   
console.log(bisi(x=prompt("dame el año p:")));