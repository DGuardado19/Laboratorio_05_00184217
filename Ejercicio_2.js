var cosas =['2','','>:v PARA ESO ESTA SORT', '5', '1'];

function ordernar(){
    var cosas =['2','7','>:v PARA ESO ESTA SORT', '5', '1'];
    var key;
    var j;
    for(var x=1; x<cosas.length;x++){
        key= cosas[x];
        j= x-1;
        while(j>-1 && key<cosas[j]){
            cosas[j+1]=cosas[j];
            j=j-1;
        }
        cosas[j+1]= key;

    }
    return cosas;
}
console.log(ordernar());