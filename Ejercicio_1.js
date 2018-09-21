function Palidroma(p){
    x= p.split("");
    cont=0;
    cont2=x.length-1;
    aux= true;
    while(cont!=x.length-1 && aux==true){
        if(x[cont] == x[cont2]){
            cont++;
            cont2--;
        }
        else{
            aux=false;
        }
    }
    return aux;
}

x=Palidroma(p=prompt('Ingrese una palabra: '));

if(x==true){
    console.log("Palindromo proooo")
}
else if(x==false){
    console.log("No palindromo >:v prrroooo")
} 