
// المتغيرات
let inputsBtn1 = document.querySelectorAll(".yes");
let inputsBtn2 = document.querySelectorAll(".no");
let saveBtn = document.querySelectorAll(".save");
let txtError = document.querySelectorAll(".txtError");
let insertReadTanck = document.querySelectorAll(".insertReadTanck");
let insertText = document.querySelectorAll(".insertText");
let txtBack = document.querySelectorAll(".txtBack");
let txtNext = document.querySelectorAll(".txtNext");
let txtTotal = document.querySelectorAll(".txtTotal");
let date = new Date();
let tbody = document.querySelectorAll(".tbody");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let waterTanck = document.querySelector(".waterTanck");
let swimmingPool = document.querySelector(".swimmingPool");
let electrictyVoltage = document.querySelector(".electrictyVoltage");
let showTable = document.querySelector(".showTable");
let btnShow = document.querySelector(".btnShow");
let btnHide = document.querySelector(".btnHide");
let form = document.querySelector(".form");
let insertDetailsCar = document.querySelector(".insertDetailsCar");
let NameCar = document.querySelector(".nameCar");
let nameDrivCar = document.querySelector(".nameDrivCar");
let sizeCar = document.querySelector(".sizeCar");
let palce = document.querySelector(".palce");
let insertVolt = document.querySelector(".insertVolt");
let nowVolt = document.querySelector(".nowVolt");
let minVolt = 350;
let maxVolt = 415;
let statusVolt = document.querySelector(".statusVolt");
let saveVolt = document.querySelector(".saveVolt");
let deletVolt = document.querySelector(".deletVolt");
let insertNumHour = document.querySelector(".insertNumHour");
let numberHour = document.querySelector(".numberHour");
let totalHour = document.querySelector(".totalHour");
let alarmStatus = document.querySelector(".alarmStatus");
let insertHour = document.querySelector(".insertHour");
let btnExit = document.querySelector(".btnExit");
let mood = 'create';
let equalI;
// login
let boxLogin = document.querySelector(".box-login");
let badyPrograms = document.querySelector(".badyPrograms");
let userNameLogin = document.querySelector(".user-login");
let passLogin = document.querySelector(".pass-login");
let login = document.querySelector(".login");
let valueUser = document.querySelector(".valueUser");
let user = document.querySelector(".user");

let btnLogin = document.querySelector(".btn-login");


// if(localStorage.userName != null){
//     valueUser.innerHTML = localStorage.getItem("userName");
//     if(valueUser.innerHTML === "عبدالمعز") {
//         login.style.display = "none";
//         badyPrograms.style.display = "block";
//     }else if(valueUser.innerHTML == "User1" || valueUser.innerHTML == "User2") {
//         login.style.display = "none";
//         badyPrograms.style.display = "block";
//         for(let i = 0; i < btnShow.length; i++){
//             btnShow.style.display = "none"
//         }
//     }else if(valueUser.innerHTML === "Manager") {
//         login.style.display = "none";
//         badyPrograms.style.display = "block";
//         for(let i = 0; i < btnHide.length; i++){
//             btnHide.style.display = "none";
//             showTable.style.display = "block";
//             btnShow.style.display = "none";
//             form.style.display = "none";
//         }
//     }
    
// }else{
//     login.style.display = "block";
//     badyPrograms.style.display = "none";
// }

        

btnExit.onclick = function() {
    localStorage.removeItem("userName");
    badyPrograms.style.display = "none";
    login.style.display = "block";
    userNameLogin.value = "";
    passLogin.value = "";

}

// 






// اختيار منيو الهيدار



// اظهار واخفاء التفاصيل

btnShow.onclick = function() {
    showTable.style.display = "block";
    btnShow.style.display = "none";
    btnHide.style.display = "block";
    form.style.display = "none";

}
btnHide.onclick = function() {
    showTable.style.display = "none";
    btnShow.style.display = "block";
    btnHide.style.display = "none";
    form.style.display = "block";
}



// زر لا يوجد اخطاء

for (let i = 0; i < inputsBtn1.length; i++) {
    inputsBtn1[i].onclick = function() {
        // inputsBtn1[i].style.backgroundColor = "#0f0";
        // inputsBtn2[i].style.backgroundColor = "";
        txtError[i].value = "لا توجد مشاكل";
        
        
    }
}


// زر تسجيل الاخطاء


for (let i = 0; i < inputsBtn2.length; i++) {
    inputsBtn2[i].onclick = function() {
        txtError[i].removeAttribute("readonly");
        txtError[i].value = "";
    }
}


let ProgTanck8,ProgTanck9;


if(localStorage.box8 != null) {
    ProgTanck8 = JSON.parse(localStorage.box8);
}else{
    ProgTanck8 = [];
}
if(localStorage.box9 != null) {
    ProgTanck9 = JSON.parse(localStorage.box9);
}else{
    ProgTanck9 = [];
}



for(let i = 0; i < 2; i++) {
    saveBtn[i].onclick = function() {
        if(txtError[i].value != '' || nowVolt.value != '') {
            ObjProg= {
                user:valueUser.innerHTML,
                date:`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                time:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                volte : nowVolt.value,
                statevalue: statusVolt.value,
                error:txtError[i].value
            }
            ProgTanck8.push(ObjProg);
        }
        
        localStorage.setItem(`box8`,JSON.stringify(ProgTanck8))
        
        if(txtError[i].value != '' || totalHour.value != '') {
            ObjProg ={
                user:valueUser.innerHTML,
                date:`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                time:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                hours: +totalHour.value,
                stateOil:alarmStatus.value,
                error:txtError[i].value

            }
            if(mood == 'create'){
                ProgTanck9.push(ObjProg);
                
            }else{
                ProgTanck9[equalI] = ObjProg
            }
            localStorage.setItem(`box9`,JSON.stringify(ProgTanck9))
        }
            
    }
        
}
    



saveVolt.onclick = function() {
        if(insertVolt.value !== ""){
            getVolt();
            stateValue();
        }
        
    }
    // عملية الحصول علي قيمة التيار
    function getVolt() {
        nowVolt.value = insertVolt.value;
        stateValue();
        
    }
function stateValue() {
    if(nowVolt.value !== "") {
        if (+nowVolt.value >= minVolt && +nowVolt.value <= maxVolt) {
            statusVolt.value = "التيار مظبوط"
            insertVolt.value = "";
            statusVolt.style.backgroundColor = "green";
            statusVolt.style.color = "#fff";
        }else if (+nowVolt.value > maxVolt) {
            statusVolt.value = "التيار مرتفع";
            insertVolt.value = "";
            statusVolt.style.backgroundColor = "red";
            statusVolt.style.color = "#fff";
        }else if (+nowVolt.value < minVolt) {
            statusVolt.value = "التيار منخفض";
            insertVolt.value = "";
            statusVolt.style.backgroundColor = "red";
            statusVolt.style.color = "#fff";
        }
    }  
}


insertNumHour.onclick = function() {
    if(numberHour.value != "") {
        totalHour.value = +totalHour.value + +numberHour.value;
        addHour();
        numberHour.value = "";
    } 
}

function showHour(){
    for(let i=0;i<myDataHours.length;i++){
        totalHour.value = myDataHours[myDataHours.length-1].hours
        alarmStatus.value = myDataHours[myDataHours.length-1].stateOil
    }
   
}

function addHour() {
    if(+totalHour.value > 0 && +totalHour.value < 40){
        alarmStatus.value = "نسبة الزيت جيدة";
        alarmStatus.style.color = "#fff";
        alarmStatus.style.backgroundColor = "green";
    }else if(+totalHour.value >= 40 && +totalHour.value < 50) {
        alarmStatus.style.backgroundColor = "#ff0";
        alarmStatus.style.color = "#000";
        alarmStatus.value = "الزيت منخفض";
    }else if(+totalHour.value >= 50) {
        alarmStatus.style.backgroundColor = "red";
        alarmStatus.style.color = "#fff";
        alarmStatus.value = "لا يوجد زيت";
    }
}

// alarm td
let td = document.querySelectorAll("td");
for(let i = 0; i < td.length; i ++){
    if(td[i].innerHTML == "التيار منخفض" || td[i].innerHTML == "التيار مرتفع" || td[i].innerHTML == "لا يوجد زيت"){
        td[i].className = "alarm";
    }else if(td[i].innerHTML === "الزيت منخفض"){
        td[i].style.backgroundColor = "#ff0";
        td[i].style.color = "#000";
    }else if(td[i].innerHTML === "التيار مظبوط" || td[i].innerHTML == "نسبة الزيت جيدة"){
        td[i].style.backgroundColor = "green";
        td[i].style.color = "#fff";
    }
    
}
  

// showDataInInput();

let table = "", table1= "";
function showData() {
    for(let i = 0; i < ProgTanck8.length; i++) {
                table += `
                <tr>
                    <td>${i+1}</td>
                    <td>${ProgTanck8[i].user}</td>
                    <td>${ProgTanck8[i].date}</td>
                    <td>${ProgTanck8[i].time}</td>
                    <td>${ProgTanck8[i].volte}</td>
                    <td>${ProgTanck8[i].statevalue}</td>
                    <td>${ProgTanck8[i].error}</td>
                    
                </tr>
                `;
                
    }
    tbody[0].innerHTML = table;
    for(let i = 0; i < ProgTanck9.length; i++) {
        table1 += `
            <tr>
                <td>${i+1}</td>
                <td>${ProgTanck9[i].user}</td>
                <td>${ProgTanck9[i].date}</td>
                <td>${ProgTanck9[i].time}</td>
                <td>${ProgTanck9[i].hours}</td>
                <td class="state">${ProgTanck9[i].stateOil}</td>
                <td>
                    <input type="button" value="اصلاح" class="btn editeBtn" onclick='edit(${i})'>
                </td>
            </tr>
            `;        
    }
    tbody[1].innerHTML = table1;
}   
    


showData();

function edit(i) {
    totalHour.value = ProgTanck9[i].hours;
    showTable.style.display = "none";
    btnShow.style.display = "block";
    btnHide.style.display = "none";
    form.style.display = "block";
    mood = 'updete';
    equalI = i;
    document.querySelector(".insertHour").style.display = "inline-block";
}

showInputOil(9)
function showInputOil(i) {
    if(ProgTanck9 != "") {
        for(i=0;i< ProgTanck9.length; i++) {
            if(ProgTanck9[i].totalHour != 0) {
                totalHour.value = ProgTanck9[ProgTanck9.length-1].hours ;
                alarmStatus.value = (ProgTanck9[ProgTanck9.length-1].stateOil);
                
            }            
        }
    }
}
function stateO() {
    if(ProgTanck9 != "" || ProgTanck9 != null) {
        for(let i=0;i< ProgTanck9.length; i++) {
            if(document.querySelectorAll(".tbody .state")[i].innerHTML == "لا يوجد زيت") {

                document.querySelectorAll(".tbody .state")[i].className = "alarm";
            }
            else if(document.querySelectorAll(".tbody .state")[i].innerHTML == "الزيت منخفض") {

                document.querySelectorAll(".tbody .state")[i].style.backgroundColor = "yellow";
            }
            else if(document.querySelectorAll(".tbody .state")[i].innerHTML == "نسبة الزيت جيدة") {

                document.querySelectorAll(".tbody .state")[i].style.backgroundColor = "green";
            }
        }
        
    }
}

stateO();

function clearInput() {
    numberHour.value = "";
    totalHour.value = "0";
    alarmStatus.value = "تم تغيير الزيت"
}
deletVolt.onclick = function() {
    if(localStorage.box8 != null) {
        ProgTanck8.pop();
        localStorage.setItem(`box8`,JSON.stringify(ProgTanck8))

    }
}