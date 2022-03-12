console.log("\nSoal No.1 Range");

function range(startNum, finishNum){
    const myArray = [];
    if (startNum <= finishNum){
        for (startNum; startNum <= finishNum; startNum++){
            myArray.push(startNum);
        }
        return myArray;
    }else if (startNum > finishNum){
        for (startNum; startNum >= finishNum; startNum--){
            myArray.push(startNum);
        }
        return myArray;
    }else {
        return -1;
    }
}
console.log(range(1, 10))
console.log(range(1))
console.log(range(11, 18))
console.log(range(54, 50))
console.log(range())


console.log("\nSoal No.2 rangeWithStep");
const rangeWithStep = (startNum, finishNum, Step = 1) =>{
    var num = [];
    if (!startNum || !finishNum) {
        num += -1;
    }else if (startNum < finishNum){
        for(var i = startNum;  i<= finishNum; i+= Step){
            num.push(i);
        }
    } else if (startNum > finishNum){
        for (var i = startNum; i >= finishNum; i -= Step){
            num.push(i);
        }
    }
    return num;
}
    
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]



console.log("\nSoal No.3 Sum of range");
function sum ( startNum = 0, finishNum = 0, step = 1){
    var rangeArray = [];

    var larger = Math.max(startNum, finishNum);
    var smaller = Math.min(startNum, finishNum);
    if (step < 0) {
        for (var i = larger; i >= smaller; i+step){
            rangeArray.push(i);
        }
    }else{
        for (var i = smaller; i <= larger; i+=step){
            rangeArray.push(i);
        }
    }
    return rangeArray.length > 1 ? rangeArray.reduce((a, b) => a + b) : rangeArray[0]
}

console.log(sum(1,10)) 
console.log(sum(5, 50, 2)) 
console.log(sum(15,10)) 
console.log(sum(20, 10, 2)) 
console.log(sum(1)) 
console.log(sum()) 



console.log("\nSoal No.4 Array Multidimensi");
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
const dataHandling = (data) => {
    for (var i = 0; i < input.length; i++){
        for (var kolom = 0; kolom < 5; kolom++){
            if (kolom === 0){
                console.log(`Nomor ID : ${input[i][kolom]}`);
            }else if (kolom === 1){
                console.log(`Nama Lengkap : ${input[i][kolom]}`);
            }else if (kolom == 2){
                console.log(`TTl : ${input[i][2]} ${input[i][3]}`);
            }else if (kolom === 4){
                console.log(`Hobi : ${input[i][kolom]}`);
            }
        } 
        console.log();
    }
};
dataHandling(input);