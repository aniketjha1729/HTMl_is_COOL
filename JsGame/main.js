var rightAns=document.getElementById("rightAns");
var wrongAns=document.getElementById("wrongAns");
var move=0;
function f1(e){
    if(e.id=="one"){
        move++;
        document.getElementById("blink").remove();
        document.getElementById("one").style.backgroundColor ="rgb(98, 231, 98)";
        rightAns.play()
    }
}
function f2(e){
    if (move >= 1 && (e.id == "two" || e.id == "three" || e.id == "four" || e.id == "five")){
        if(move==1 && e.id=="two"){
            move++
            document.getElementById(e.id).style.backgroundColor="rgb(98,231,98)";
            rightAns.play()
        }else if (move == 2 && e.id == "four"){
            move++
            document.getElementById(e.id).style.backgroundColor = "rgb(98,231,98)";
            rightAns.play()
        }else if (move == 3 && e.id == "three") {
            move++
            document.getElementById(e.id).style.backgroundColor = "rgb(98,231,98)";
            rightAns.play()
        }else if (move == 4 && e.id == "five") {
            move++
            document.getElementById(e.id).style.backgroundColor = "rgb(98,231,98)";
            document.getElementById(e.id).style.fontSize="70px"
            document.getElementById(e.id).innerHTML ="&#9989;"
            rightAns.play()
        }else{
            wrongAns.play();
        }
    }else{
        wrongAns.play();
    }
}