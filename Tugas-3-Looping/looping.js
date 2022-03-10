console.log("\nSoal No.1(while)")

console.log("\nLooping pertama")
var deret = 0;
while(deret < 20) {
    deret += 2 ; 
    console.log(deret + '- I love coding')
}
console.log('-------------------------------');

console.log("\nLooping kedua")
var deret = 22;
while(deret > 2) {
    deret -= 2 ; 
    console.log(deret + '-I will become a mobile developer')
}
console.log('-------------------------------');

console.log("\nSoal No.2(for)")

for(var i = 1; i<=20; i++){
    if(i%2 == 0){
        console.log(i, "- Santai")
    }else if(i%2 > 0){
        if(i%3 == 0){
            console.log(i, "- I Love Coding")
        }else{
            console.log(i, "- Berkualitas")
        }
    }
}

console.log("\nSoal No.3 persegi panjang#")
var panjang = 4;
var lebar = 8;
var out = "";

for (var baris = 0; baris < panjang; baris++) {
    for (var kolom = 0; kolom < lebar; kolom++) {
        out += "#";
    }
    out += "\n";
}
console.log(out);

console.log("\nSoal No.tangga")
var out = "";

for (var i=1; i <= 7; i++){
    console.log(out += "#");
}

console.log("\nSoal No.5 Catur")
var s = '';
var panjang = 8;
var lebar = 8;

for (var i = 1; i <= lebar; i++){

    if(i % 2 == 0){

        for (var j = 1; j <= panjang; j++)
        {
            if(j % 2 == 0){
                s += ' ';
            }else{
                s += '#';
            }
        }
    }else{
        for (var j = 1; j <= panjang; j++){
            if (j % 2 == 0){
                s += '#'; 
            }else{
                s += ' ';
            }
           
        }
    }
    s += '\n';
}
console.log(s);










