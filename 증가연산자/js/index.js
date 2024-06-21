let add, sub, cnt, count=0;
window.onload=function() {
    add=document.querySelector(".add");
    sub=document.querySelector(".sub");
    cnt=document.querySelector(".cnt");
    pic=document.getElementById("img");
    btn=document.querySelector(".btn");
    box=document.getElementById("box");
    btn2=document.querySelector(".btn2");
    box2=document.getElementById("box2");
    btn3=document.querySelector(".btn3");
    box3=document.getElementById("box3");
    btn4=document.querySelector(".btn4");
    box4=document.getElementById("box4");

    add.onclick=function() {
        if(count < 6){
            count++;
            cnt.innerHTML = count;
            pic.src="img/img"+count+".png";
        }
    }
    sub.onclick=function() {
        if(count > 1){
            count--;
            cnt.innerHTML = count;
            pic.src="img/img"+count+".png";
        }
    }
    // let no=0;
    str = "";
    btn.onclick=function() {
        for(i=0; i<6; i++){
            str += "<br>car"+i;
        }
        box.innerHTML = str;
    }
    let sum = 0;
    btn2.onclick=function() {
        for(i=1; i <= 100; i++){
            sum = sum + i;
        }
        box2.innerHTML = sum;
    }
    let sum3 = 0, str3 = "", count3 = 1;
    // btn3.onclick=function() {
    //     while(count3 <= 5){
    //         str3 += count3 + "번<br>";
    //         count3++;
    //     }
    //     box3.innerHTML = str3;
    // }
    btn3.addEventListener("click", function() {
        while(count3 <= 5){
                    str3 += count3 + "번<br>";
                    count3++;
                }
                box3.innerHTML = str3;
    })
    let nameA = ["홍길동", "이동수", "김철수"];
    let str4 = "";
    btn4.addEventListener("click", function() {
        // box4.innerHTML = nameA.length + "명<br>";
        for(i=0; i<3; i++){
            str4 += "["+nameA[i]+"]<br>";
        }
        box4.innerHTML = str4;
    })
}