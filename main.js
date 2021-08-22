///***** BÀI 1 : IN RA SỐ CHẴN/LẺ *********

////// DÙNG FOR //////////

function ChanLe() {

var contentCL3 = "";
var contentCL4 = "";

for(var a1 = 0; a1 < 100;a1++){
    if (a1 % 2 == 0){
        console.log(a1);
        contentCL3 = contentCL3 + a1 + "-";
    }
}
for(var a2 = 0; a2 < 100;a2++){
    if (a2 % 2 != 0){
        console.log(a2);
        contentCL4 = contentCL4 + a2 + "-";
    }
}
document.getElementById("txtChanLe").innerHTML = "SỐ CHẴN : "+contentCL3 +"<br> <br>" +"SỐ LẺ : "+ contentCL4;

}

//////DÙNG WHILE//////////
function ChanLe2() {
    var contentCL1 = "";
    var contentCL2 = "";
    var i1 = 0;
    var i2 = 0;
    while (i1 < 100) {
        if (i1 % 2 == 0){
            console.log(i1);
            contentCL1 = contentCL1 + i1 + "-";
        }
        i1++
    }
    while (i2 < 100){
        if (i2 % 2 != 0){
            console.log(i2);
            contentCL2 = contentCL2 + i2 + "-";
        }
        i2++
    }
    document.getElementById("txtChanLe2").innerHTML = "SỐ CHẴN : "+contentCL1 +"<br> <br>" +"SỐ LẺ : "+ contentCL2;
    }
    
///***** BÀI 2 : BAO NHIÊU SỐ CHIA HẾT CHO 3 *********

function DemSo() {
var countDemSo = 0;
   for (var b = 0; b <= 1000; b++) {
        // var countDemSo = 0;
        if(b % 3 == 0){
            countDemSo++;
            // console.log(b);
            console.log(countDemSo + "-" +b);

        }
        // document.getElementById("txtDeMo").innerHTML =
        // "<br> có" + countDemSo + "số chia hết cho 3";
   } 
   console.log(countDemSo);
   
document.getElementById("txtDemSo").innerHTML ="<br> có " +countDemSo + " số chia hết cho 3";
}


function DemSo2() {
    var countDemSo2 = 0;
    var b2 = 0;
while (b2 <= 1000){
    if(b2 % 3 == 0){
    countDemSo2++;
    console.log(countDemSo2 + "-" +b2);
        // console.log(countDemSo2 + "-" +b2);
    }
    b2++;  
}
   
document.getElementById("txtDemSo2").innerHTML ="<br> có " +countDemSo2 + " số chia hết cho 3";
}

///***** BÀI 3 : TÌM SỐ NHỎ NHẤT *********

function TimSNN (){
    var countSNN =0;
    var sum = 0;
    do {
        countSNN++;
        sum = sum + countSNN;
    }
    while (sum < 10000);
    console.log(sum);
    document.getElementById("txtTimSNN").innerHTML ="<br>"+countSNN;
}

///***** BÀI 4 : TÍNH TỔNG   *********

function calcTinhTongXN() {
var x = document.getElementById("inputSoX").value; 
var n = document.getElementById("inputSoN").value;
var j = 0;
var sum = 0;
for (var i = 0; i <= n; i++) {
    j = Math.pow(x, i);
    if (i > 0){  
        sum = sum + j;

    }else if (x == "" || n == ""){
    alert ("Vui lòng nhập đủ số vào 2 ô")
        return;
    }
    } 
  
console.log(sum);
document.getElementById("txtResultTinhTongXN").innerHTML = "  Tổng : "+sum;
}

///***** BÀI 5 : TÍNH GIAI THỪA   *********

function calcTinhGiaiThua (){
    var n = document.getElementById("inputSoGiaiThua").value;
    var NumGT = 1;
    
    for (var z = 1;z <= n;z++){
            NumGT = NumGT * z;
            console.log(NumGT);
            
    }
    
    document.getElementById("txtResultTinhGiaiThua").innerHTML = "  Giai thừa : "+NumGT;
}

///***** BÀI 7 : SỐ NGUYÊN TỐ *********

function SoNguyenTo (){
    var n = document.getElementById("inputSoNguyenTo").value;
    var g = Math.sqrt(n); 
    var SoNT = 0;
for (i1 = 2; i1 <= n; i1++){
   
    for (j = 1; j <= g; j++){
        if (i1%j != 0){
            
            SoNT = i1;
            console.log(SoNT);
        }
    
    }
    
}
    document.getElementById("txtResultSoNguyenTo").innerHTML = " Số nguyên tố : "+SoNT;
}



 