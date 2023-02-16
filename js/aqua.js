
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
let showTable = document.querySelectorAll(".showTable");
let btnShow = document.querySelectorAll(".btnShow");
let btnHide = document.querySelectorAll(".btnHide");
let form = document.querySelectorAll(".form");
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
//             btnShow[i].style.display = "none"
//         }
//     }else if(valueUser.innerHTML === "Manager") {
//         login.style.display = "none";
//         badyPrograms.style.display = "block";
//         for(let i = 0; i < btnHide.length; i++){
//             btnHide[i].style.display = "none";
//             showTable[i].style.display = "block";
//             btnShow[i].style.display = "none";
//             form[i].style.display = "none";
//         }
//     }
    
// }else{
//     login.style.display = "block";
//     badyPrograms.style.display = "none";
// }

// btnExit.onclick = function() {
//     localStorage.removeItem("userName");
//     badyPrograms.style.display = "none";
//     login.style.display = "block";
//     userNameLogin.value = "";
//     passLogin.value = "";

// }

// 






// اختيار منيو الهيدار

function showAlert() {
    let div = document.createElement("div");
    div.className = "showMsg";
    let txtMsg = document.createTextNode("تم حفظ الملف");
    div.appendChild(txtMsg);
    document.body.append(div);

    setTimeout(() => {
        div.remove()
    }, 2000);
}

// اظهار واخفاء التفاصيل

for(let i = 0; i < btnShow.length; i++) {
    btnShow[i].onclick = function() {
        showTable[i].style.display = "block";
        btnShow[i].style.display = "none";
        btnHide[i].style.display = "block";
        form[i].style.display = "none";

    }
    btnHide[i].onclick = function() {
        showTable[i].style.display = "none";
        btnShow[i].style.display = "block";
        btnHide[i].style.display = "none";
        form[i].style.display = "block";
    }
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


let ProgTanck5,ProgTanck6,ProgTanck7;

if(localStorage.box5 != null) {
    
    ProgTanck5 = JSON.parse(localStorage.box5);
}else{
    
    ProgTanck5 = [];
}
if(localStorage.box6 != null) {
    ProgTanck6 = JSON.parse(localStorage.box6);
}else{
    ProgTanck6 = [];
}

if(localStorage.box7 != null) {
    ProgTanck7 = JSON.parse(localStorage.box7);
}else{
    ProgTanck7 = [];
}


for(let i = 0; i < 3; i++) {
    saveBtn[i].onclick = function() {
        if(i == 0) {
            if(txtError[i].value != '') {
                ObjProg={
                    user:valueUser.innerHTML,
                    date:`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                    time:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                    error:txtError[i].value
                }
                ProgTanck5.push(ObjProg);
            }
            localStorage.setItem(`box5`,JSON.stringify(ProgTanck5))    
        }else if(i == 1) {
            if(txtError[i].value != '') {
                ObjProg={
                    user:valueUser.innerHTML,
                    date:`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                    time:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                    error:txtError[i].value
                }
                ProgTanck6.push(ObjProg);
            }
            localStorage.setItem(`box6`,JSON.stringify(ProgTanck6))    
        }else if(i == 2) {
            if(txtError[i].value != '') {
                ObjProg={
                    user:valueUser.innerHTML,
                    date:`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                    time:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                    error:txtError[i].value
                }
                ProgTanck7.push(ObjProg);
            }
            localStorage.setItem(`box7`,JSON.stringify(ProgTanck7))    
        }
        
    }
}




// showDataInInput();

let table = "";
let table1= "";
let table2= "";
let allTable = [table, table1, table2];
function showData() {
    for(let i = 0; i < ProgTanck5.length; i++) {
        table += `
            <tr>
                <td>${i+1}</td>
                <td>${ProgTanck5[i].user}</td>
                <td>${ProgTanck5[i].date}</td>
                <td>${ProgTanck5[i].time}</td>
                <td>${ProgTanck5[i].error}</td>
                <td>
                    <input type="button" value="اصلاح" class="btn" style="background-color:green;color:#fff">
                </td>
            </tr>
            `;
            
        }
        tbody[0].innerHTML = table;

        for(let i = 0; i < ProgTanck6.length; i++) {
            table1 += `
            <tr>
                <td>${i+1}</td>
                <td>${ProgTanck6[i].user}</td>
                <td>${ProgTanck6[i].date}</td>
                <td>${ProgTanck6[i].time}</td>
                <td>${ProgTanck6[i].error}</td>
                <td>
                    <input type="button" value="اصلاح" class="btn" style="background-color:green;color:#fff">
                </td>
            </tr>
            `;
            
        }
        tbody[1].innerHTML = table1;
        for(let i = 0; i < ProgTanck7.length; i++) {
            table2 += `
            <tr>
                <td>${i+1}</td>
                <td>${ProgTanck7[i].user}</td>
                <td>${ProgTanck7[i].date}</td>
                <td>${ProgTanck7[i].time}</td>
                <td>${ProgTanck7[i].error}</td>
                <td>
                    <input type="button" value="اصلاح" class="btn" style="background-color:green;color:#fff">
                </td>
            </tr>
            `;
            
        }
        tbody[2].innerHTML = table2;
    
    
}
       
        


showData();


