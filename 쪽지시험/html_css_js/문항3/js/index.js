// alert("ok");
window.onload=function() {
    let btn, cont;
    btn1 = document.querySelector(".btn1");
    btn2 = document.querySelector(".btn2");
    btn3 = document.querySelector(".btn3");
    cont = document.getElementById("content");
    btn1.onclick=function() {
        cont.innerHTML = "불 타입";
    }
    btn2.onclick=function() {
        cont.innerHTML = "물 타입";
    }
    btn3.onclick=function() {
        cont.innerHTML = "풀 타입";
    }
}