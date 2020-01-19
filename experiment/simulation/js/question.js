function a1(){
    answer1 = "a";
    ans1();
}
function b1(){
    answer1 = "b";
    ans1();
}
function c1(){
    answer1 = "c";
    ans1();
}
function d1(){
    answer1 = "d";
    ans1();
}
function ans1(){
    if(answer1 == "a")
    {    document.getElementById("ans1").innerHTML = "Right Answer<br>Please use the formula to input the frequency in the given textbox";
    document.getElementById("a1").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("c1").disabled = true;
    document.getElementById("d1").disabled = true;
    document.getElementById("textboxfreq").hidden = "";
    score +=1;
    }
    else 
    document.getElementById("ans1").innerHTML = "Wrong Answer<br>Correct Answer is A<br>Please use the formula to input the frequency in the given textbox";
    document.getElementById("a1").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("c1").disabled = true;
    document.getElementById("d1").disabled = true;
    document.getElementById("textboxfreq").hidden = "";

}
function question1(){
    document.getElementById("an7").hidden = "";
}
function question2(){
    document.getElementById("an7").hidden = "hidden";
    document.getElementById("an8").hidden = "";
}
function question3(){
    document.getElementById("an8").hidden = "hidden";
    document.getElementById("an9").hidden = "";
}
function rightanswer(){
    var freq = document.getElementById("textboxfreq").value;
    var compfreq = thetfreq();
    if(freq <= (compfreq + 2) && freq>=(compfreq-2))
    {
        alert("Correct answer");
        calobv1(freq);
    }
    else alert("Wrong Answer, Please enter the correct value!");
    alert("Please exit the box by clicking anywhere outside the box and use the stop cock to add observations")
}
function calobv1(freq){
        tb1.hidden = "";
        i+=1;
        if(i<20){
        var row = tb1.insertRow();
        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.id = "t" + i;
        var volu=vol;
        t.value=(volu).toFixed(2);
        cell.appendChild(t);


        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.style.width=60;
        t.value=(volumeinv()*1000).toFixed(2);
        t.id = "t" + i + i;
        cell.appendChild(t);

        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.id = "t" + i+i+i;
        t.value=(exp()).toFixed(2);
        t.style.width=60;
        cell.appendChild(t);


        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.id = "t" + i + i+ i + i;
        t.style.width=60;
        t.value=parseInt(freq).toFixed(2);
        cell.appendChild(t);

        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.style.width=60;
        t.id = "t" + i + i+i+i+i;
        cell.appendChild(t);
    }
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("acc2").disabled = "";
    document.getElementById("observationtable").disabled = "";
    document.getElementById("3").style.display = "block";
    document.getElementById('volume').setAttribute('onclick','calculatefreq()')
    document.getElementById("volumeleft").id = "volumeleftnew";
    document.getElementById("addobv").hidden="";
    an10 = 1;
}
function dso(){
    alert("CORRECT ANSWER!");
    document.getElementById("an1").hidden = "hidden";
    document.getElementById("an2").hidden = "";
    an1=1;
    
}
function sinewave(){
    alert("CORRECT ANSWER!");
    document.getElementById("an2").hidden = "hidden";
    document.getElementById("an3").hidden = "";
    an2=1;
   // speaker();
}
function speaker(){
    alert("CORRECT ANSWER!");
    document.getElementById("an3").hidden = "hidden";
    document.getElementById("an4").hidden = "";
    an3=1;
   // sepfunnel();
}
function sepfunnel(){
    alert("CORRECT ANSWER!");
    document.getElementById("an4").hidden = "hidden";
    document.getElementById("an5").hidden = "";
    an4=1;
   // graduatingbreaker();
}
function  graduatingbreaker(){
    alert("CORRECT ANSWER!");
    document.getElementById("an5").hidden = "hidden";
    //document.getElementById("an6").hidden = "";
    an5=1;
   // document.getElementById("an7").hidden = "";
    question1();
//stand();
}
// function stand(){
//     document.getElementById("an6").hidden = "hidden";
//     an6=1;
//     question1();
// }