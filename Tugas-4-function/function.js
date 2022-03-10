//NO.1
function Teriak() {
    return 'Hello Sanbers!';
}
console.log(Teriak())

console.log("===============");

//NO.2
function kalikan(num1, num2){
 return  num1 * num2;
}
var hasilkali= kalikan(12, 4)
console.log(hasilkali);

console.log("===============");

//NO.3
function introduce(){
    return 'Nama saya '.concat(name) +',umur saya '.concat(age)+',alamat saya di '.concat(address)+',dan saya punya hobby yaitu '.concat(hobby)+' !';
}
var name = "Ari Hidayat";
var age  = "28";
var address = "Jln. Garu III,Medan,SumateraUtara";
var hobby = "Hiking"
var perkenalan = introduce(name,age,address,hobby);
console.log(perkenalan);
console.log("===============");



