var pares = new Array();
var vec = new Array();

for( var i = 1; i < 1000; i++){
    vec.push(true)
}

for(var i = 2; i < 1000; i++){
    if(vec[i]){
        for( p = i * i; p < 1000; p += i){
            vec[p] = false;
        }
    }
}

for(var i = 2; i < 1000; i++){
    if(vec[i]){
        pares.push(i);
    }
}

console.log(pares)