window.onload=function() {
    let a, b, c;
    a = 10; b = 20;
    c = a + b;
    console.log(c);


    let popMenu0, popMenu1, popMenu2;
    popMenu0=document.getElementById("popMenu0");
    popMenu1=document.getElementById("popMenu1");
    popMenu2=document.getElementById("popMenu2");
    // popMenu0=document.querySelector("popMenu0");

    let at0_text, at1_text, at2_text;
    at0_text=document.querySelector(".at0_text");
    at1_text=document.querySelector(".at1_text");
    at2_text=document.querySelector(".at2_text");

    let at0, at1, at2;
    at0=document.querySelector(".at0");
    at1=document.querySelector(".at1");
    at2=document.querySelector(".at2");

    popMenu0.onclick=function() {
        at0_text.innerHTML = "손을 얼마나 잘 드는지";
        at0.style.display="block";
        at1.style.display="none";
        at2.style.display="none";

        let text1=document.getElementsByClassName("text1");
        for(i=0; i<text1.length; i++) {
            text1[i].innerHTML = (i+1) + "번";
        }
        let name=document.getElementsByClassName("name");
        const nameA=["홍길동", "이동수", "김철수", "김수정", "박순정", "김이슬", "서무경"];
        for(i=0; i<nameA.length; i++) {
            name[i].innerHTML = nameA[i];
        }
    }
    popMenu1.onclick=function() {
        at1_text.innerHTML = "위기를 기위로";
        at0.style.display="none";
        at1.style.display="block";
        at2.style.display="none";
    }
    popMenu2.onclick=function() {
        at2_text.innerHTML = "네트워크 사용법 레베루";
        at0.style.display="none";
        at1.style.display="none";
        at2.style.display="block";
    }


}
let no;
const picA=[
    "img1.png", "img2.png", "img3.png",
    "img4.png", "img5.png", "img6.png",
    "img7.png"
    ]
$(function() {
    $("nav div").on("click", function() {
        $("nav div").css("background", "rgb(104, 172, 110)");
        $(this).css("background", "green");
    })
    $(".text1").on("click", function() {
        no=$(this).attr("id");
        no=no.substring(7);
        $(".text1").css("background", "rgb(80, 201, 106)");
        $(".text1").css("color", "black");
        $(".name").css("background", "rgb(80, 201, 106)");
        $(".name").css("color", "black");
        $("#at0data"+no).css("background", "green");
        $("#at0data"+no).css("color", "blue");
        $("#cont"+no).css("background", "green");
        $("#cont"+no).css("color", "blue");
        $(".img").attr("src", "img/" + picA[no]);
        // alert(no);

    })
})