
// المتغيرات
let inputsBtn1 = document.querySelectorAll(".yes");
let inputsBtn2 = document.querySelectorAll(".no");
let saveBtn = document.querySelectorAll(".save");
let txtError = document.querySelectorAll(".txtError");
let insertReadTanck = document.querySelectorAll(".insertReadTanck");
let readDelet = document.querySelectorAll(".readDelet");
let insertText = document.querySelectorAll(".insertText");
let txtBack = document.querySelectorAll(".txtBack");
let txtNext = document.querySelectorAll(".txtNext");
let txtTotal = document.querySelectorAll(".txtTotal");
let date = new Date();
let tbody = document.querySelectorAll(".tbody");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let showTable = document.querySelectorAll(".showTable");
let btnShow = document.querySelectorAll(".btnShow");
let btnHide = document.querySelectorAll(".btnHide");
let form = document.querySelectorAll(".form");
let insertDetailsCar = document.querySelector(".insertDetailsCar");
let NameCar = document.querySelector(".nameCar");
let nameDrivCar = document.querySelector(".nameDrivCar");
let sizeCar = document.querySelector(".sizeCar");
let palce = document.querySelector(".palce");

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


if(localStorage.userName != null){
    valueUser.innerHTML = localStorage.getItem("userName");
    if(valueUser.innerHTML === "عبدالمعز") {
        login.style.display = "none";
        badyPrograms.style.display = "block";
    // }else if(valueUser.innerHTML == "User1" || valueUser.innerHTML == "User2") {
    //     login.style.display = "none";
    //     badyPrograms.style.display = "block";
    //     for(let i = 0; i < btnShow.length; i++){
    //         btnShow[i].style.display = "none"
    //     }
    // }else if(valueUser.innerHTML === "Manager") {
    //     login.style.display = "none";
    //     badyPrograms.style.display = "block";
    //     for(let i = 0; i < btnHide.length; i++){
    //         btnHide[i].style.display = "none";
    //         showTable[i].style.display = "block";
    //         btnShow[i].style.display = "none";
    //         form[i].style.display = "none";
    //     }
    }
    
}else{
    login.style.display = "block";
    badyPrograms.style.display = "none";
}
btnLogin.onclick = function() {
    if(userNameLogin.value === "عبدالمعز" && passLogin.value == "1234567890") {
        login.style.display = "none";
        badyPrograms.style.display = "block";
        localStorage.setItem("userName",userNameLogin.value);
        valueUser.innerHTML = userNameLogin.value;
        
    // }else if(userNameLogin.value == "User1"  &&  passLogin.value == "13579") {
    //     login.style.display = "none";
    //     badyPrograms.style.display = "block";
    //     localStorage.setItem("userName",userNameLogin.value);
    //     valueUser.innerHTML = userNameLogin.value;
    //     for(let i = 0; i < btnShow.length; i++){
    //         btnShow[i].style.display = "none"
    //     }
        
    // }else if(userNameLogin.value == "User2" && passLogin.value == "02468") {
    //     login.style.display = "none";
    //     badyPrograms.style.display = "block";
    //     localStorage.setItem("userName",userNameLogin.value);
    //     valueUser.innerHTML = userNameLogin.value;
    //     for(let i = 0; i < btnShow.length; i++){
    //         btnShow[i].style.display = "none"
    //     }
        
    // }
    // else if(userNameLogin.value === "Manager" && passLogin.value == "654321") {
    //     login.style.display = "none";
    //     badyPrograms.style.display = "block";
    //     localStorage.setItem("userName",userNameLogin.value);
    //     valueUser.innerHTML = userNameLogin.value;
    //     for(let i = 0; i < btnHide.length; i++){
    //         btnHide[i].style.display = "none";
    //         showTable[i].style.display = "block";
    //         btnShow[i].style.display = "none";
    //         form[i].style.display = "none";
    //     }
    }
        
}
btnExit.onclick = function() {
    localStorage.removeItem("userName");
    badyPrograms.style.display = "none";
    login.style.display = "block";
    userNameLogin.value = "";
    passLogin.value = "";

}

// 







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
for(let i = 0; i < insertReadTanck.length; i++) {
    // get read tanck in textbox
    insertReadTanck[i].onclick = function () {
        if(insertText[i].value != "") {
            txtTotal[i].style.backgroundColor = "#0f0";
            backValue();
            getValueNow();
            totalRead();   
        } 
    }
    let valueNow;
    let valueBack;
    function backValue() {
        valueBack = +txtNext[i].value;
        txtBack[i].value = valueBack;
    }
    function getValueNow() {
        valueNow = insertText[i].value;
        txtNext[i].value = valueNow
        insertText[i].value = "";
    }
    
    function totalRead() {
        txtTotal[i].value = +txtNext[i].value - txtBack[i].value;
    }
}

    document.querySelector(".nameCar1").onclick = function(){
        NameCar.value = document.querySelector('input[name="NameCar"]:checked').value;
    }
    document.querySelector(".nameCar2").onclick = function(){
        NameCar.value = document.querySelector('input[name="NameCar"]:checked').value;
    }

let prog1,prog2,prog3,prog4,prog5;
let ProgTanck = [prog1,prog2,prog3,prog4,prog5];

if(localStorage.box0 != null) {
    
    ProgTanck[0] = JSON.parse(localStorage.box0);
}else{
    
    ProgTanck[0] = [];
}

if(localStorage.box1 != null) {
    ProgTanck[1] = JSON.parse(localStorage.box1);
}else{
    ProgTanck[1] = [];
}

if(localStorage.box2 != null) {
    ProgTanck[2] = JSON.parse(localStorage.box2);
}else{
    ProgTanck[2] = [];
}

if(localStorage.box3 != null) {
    
    ProgTanck[3] = JSON.parse(localStorage.box3);
}else{
    
    ProgTanck[3] = [];
}

if(localStorage.box4 != null) {
    ProgTanck[4] = JSON.parse(localStorage.box4);
}else{
    ProgTanck[4] = [];
}




    for(let i = 0; i < 5; i++) {
        saveBtn[i].onclick = function() {
            if(i >= 0 && i < 3) {
                if(txtNext[i].value != '' || (txtError[i].value != '' && txtNext[i].value != '')) {
                    ObjProg= {
                        user:valueUser.innerHTML,
                        date:`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                        time:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                        readNow: +txtNext[i].value,
                        readBack: +txtBack[i].value,
                        readTotal: +txtTotal[i].value,
                        error:txtError[i].value
                    }
                    ProgTanck[i].push(ObjProg);
                }
                
                localStorage.setItem(`box${i}`,JSON.stringify(ProgTanck[i]))

    
            }
            else if(i == 3) {
                if(txtError[i].value != '' || NameCar.value != "") {
                    ObjProg= {
                        user:valueUser.innerHTML,
                        date:`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                        time:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                        typeCar:NameCar.value,
                        nameDriver:nameDrivCar.value,
                        sizeInCar:sizeCar.value,
                        palceCar:palce.value,
                        error:txtError[i].value
                    }
                    ProgTanck[i].push(ObjProg);
                }
                localStorage.setItem(`box${i}`,JSON.stringify(ProgTanck[i]))

            }
            else if(i == 4) {
                if(txtError[i].value != '') {
                    ObjProg={
                        user:valueUser.innerHTML,
                        date:`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                        time:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                        error:txtError[i].value
                    }
                
                    ProgTanck[i].push(ObjProg);
                }
                localStorage.setItem(`box${i}`,JSON.stringify(ProgTanck[i]))

            }
            
            
        }
        // showAlert()

    }

  

// showDataInInput();

let table = "", table1= "", table2= "", table3="", table4="";
let allTable = [table, table1, table2, table3, table4];
function showData() {
    for(let x = 0; x < ProgTanck.length; x++) {
        if(x >= 0 && x < 3) {
            for(let i = 0; i < ProgTanck[x].length; i++) {

                allTable[x] += `
                <tr>
                    <td>${i+1}</td>
                    <td>${ProgTanck[x][i].user}</td>
                    <td>${ProgTanck[x][i].date}</td>
                    <td>${ProgTanck[x][i].time}</td>
                    <td>${ProgTanck[x][i].readNow}</td>
                    <td>${ProgTanck[x][i].readBack}</td>
                    <td>${ProgTanck[x][i].readTotal}</td>
                    <td>${ProgTanck[x][i].error}</td>
                    
                </tr>
                `;                
            }
            tbody[x].innerHTML = allTable[x];
        }
        else if(x == 3 ) {
            for(let i = 0; i < ProgTanck[x].length; i++) {
                allTable[x] += `
                <tr>
                    <td>${i+1}</td>
                    <td>${ProgTanck[x][i].user}</td>
                    <td>${ProgTanck[x][i].date}</td>
                    <td>${ProgTanck[x][i].time}</td>
                    <td>${ProgTanck[x][i].typeCar}</td>
                    <td>${ProgTanck[x][i].nameDriver}</td>
                    <td>${ProgTanck[x][i].sizeInCar}</td>
                    <td>${ProgTanck[x][i].palceCar}</td>
                    <td>${ProgTanck[x][i].error}</td>
                    
                </tr>
                `;
                
            }
            tbody[x].innerHTML = allTable[x];
            
        }
        else if(x == 4 ) {
            for(let i = 0; i < ProgTanck[x].length; i++) {
                allTable[x] += `
                <tr>
                    <td>${i+1}</td>
                    <td>${ProgTanck[x][i].user}</td>
                    <td>${ProgTanck[x][i].date}</td>
                    <td>${ProgTanck[x][i].time}</td>
                    <td>${ProgTanck[x][i].error}</td>
                    <td>
                        <input type="button" value="اصلاح" class="btn" style="background-color:green;color:#fff">
                    </td>
                </tr>
                `;
                
            }
            tbody[x].innerHTML = allTable[x];
        }
        
        
          
    }
}

showData();
showInput(0);
showInput(1);
showInput(2);

function showInput(x) {
    if(ProgTanck[x] != "") {
        for(i=0;i< ProgTanck[x].length; i++) {
            if(ProgTanck[x][i].readNow != 0) {
                txtNext[x].value = ProgTanck[x][ProgTanck[x].length-1].readNow ;
                txtBack[x].value = (ProgTanck[x][ProgTanck[x].length-1].readBack);
                txtTotal[x].value = (ProgTanck[x][ProgTanck[x].length-1].readTotal)
            }            
        }
    }
}

readDelet[0].onclick = function() {
    if(localStorage.box0 != null) {
        ProgTanck[0].pop();
        localStorage.setItem(`box0`,JSON.stringify(ProgTanck[0]))

    }
}
readDelet[1].onclick = function() {
    if(localStorage.box1 != null) {
        ProgTanck[1].pop();
        localStorage.setItem(`box1`,JSON.stringify(ProgTanck[1]))

    }
}
readDelet[2].onclick = function() {
    if(localStorage.box2 != null) {
        ProgTanck[2].pop();
        localStorage.setItem(`box2`,JSON.stringify(ProgTanck[2]))

    }
}
