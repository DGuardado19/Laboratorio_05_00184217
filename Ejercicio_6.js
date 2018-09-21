function abs(x){
    if (x < 0){
        console.log("abs: ");
        x=-1*x;
        return x;
    } 
    else if( x==0){
        console.log("abs: ");
        x= x
        return x;
    }
    else if (x>0){
        x= x;
        console.log("abs");
        return x;


    }
    console.log("otra forma prrooo :v");
    n=x
    c= ((n**2)**(1/2))
    return c;
}

console.log(abs(x=prompt('el valor abs:')));
