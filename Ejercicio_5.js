function circunferencia(n){
    if (n <= 0){
        console.log("Nel we >:v");
        return -1;
    } 
    else{
        console.log("Asi si we :v, toma tu area;");
        x= ((n**2)*Math.PI);
        return x;
    }
}   

console.log(circunferencia(prompt('Radio del:')));
