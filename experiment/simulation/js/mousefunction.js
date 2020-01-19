function mousefunction(x,y,on,q1,q2,q3,an1,an2,an3,an4,an5,an6){
    if(x>=412 && x<=452 && y>=74 && y<=116)
        play();
    console.log(";");           
    if(x>=515 && x<=537 && y>=421 && y<=450)
    {
            if(an7==1 && an8==1 && an9==1 && an10 == 1)
        {
            if(!on)
             {startvolume();
                return 1;
             }
             else{
             stopcount();
             return 0;
            }
        }
    }
    if(x>=481 && x<=496 && y>=215 && y<=269 && an7==0 && an8 ==0 && an9 == 0)
    {
       alert("Correct Answer");
       /* context.beginPath();
        context.fillStyle = "green";
        context.font = "20px Arial";
        context.fillText("Correct",540,220);
        context.stroke();*/
        alert("CORRECT!");
        document.getElementById("lengthneck").value=length.toFixed(2);
        an7=1;
        question2();
    }
    if(x>=471 && x<=509 && y>=204 && y<=213 && an7==1 && an8==0 && an9==0)
    {
        alert("Correct Answer");
           /* context.beginPath();
            context.fillStyle = "green";
            context.font = "20px Arial";
            context.fillText("Correct",540,220);
            context.stroke();*/
        document.getElementById("neckarea").value="3.66";
        an8=1;
        question3();
    }
    if(x>=480 && x<=497 && y>=214 && y<=268 && an7==1 && an8==1 && an9==0)
    {
        /*context.beginPath();
        context.fillStyle = "green";
        context.font = "20px Arial";
        context.fillText("Correct",540,220);
        context.stroke();*/
        alert("CORRECT ANSWER");
        document.getElementById("neckvol").value=1200;
        an9=1;
        document.getElementById("an7").hidden = "hidden";
        document.getElementById("an8").hidden = "hidden";
        document.getElementById("an9").hidden = "hidden";
        document.getElementById("an10").hidden = "";
        document.getElementById("1").style.display = "block";
        document.getElementById("volumegap").disabled = "";
        alert("Please enter the temperature and volume gap into the table");

    }
    //alert("Correct Answer");
    if(x>=31 && x<=327 && y>=348 && y<=544 && an1==0 && an2==0 && an3==0 && an4==0 && an5==0 && an6==0)
    { 
       dso();
    }   
    if(x>=701 && x<=868 && y>=362 && y<=460 && an1==1 && an2==0 && an3==0 && an4==0 && an5==0 && an6==0)
    {   
        //document.getElementById("an1").hidden = "hidden";
       // document.getElementById("an2").hidden = "";
       // an2=1;
        sinewave();
    }  
    if(x>=364 && x<=623 && y>=62 && y<=143 && an1==1 && an2==1 && an3==0 && an4==0 && an5==0 && an6==0)
    {   
       // document.getElementById("an2").hidden = "hidden";
       // document.getElementById("an3").hidden = "";
        speaker();
   //     an3=1;
    }  
    if(x>=402 && x<=580 && y>=332 && y<=436 && an1==1 && an2==1 && an3==1 && an4==0 && an5==0 && an6==0)
    {   
       // document.getElementById("an3").hidden = "hidden";
       // document.getElementById("an4").hidden = "";
       sepfunnel();
     //  an4=1;
    }  
    if(x>=432 && x<=550 && y>=476 && y<=572 && an1==1 && an2==1 && an3==1 && an4==1 && an5==0 && an6==0)
    {   
       // document.getElementById("an4").hidden = "hidden";
       // document.getElementById("an5").hidden = "";
       graduatingbreaker();
      // an5=1;
    }  
    // if(x>=375 && x<=384 && y>=146 && y<=517 && an1==1 && an2==1 && an3==1 && an4==1 && an5==1 && an6==0)
    // {   
    //    // document.getElementById("an5").hidden = "hidden";
    //    // document.getElementById("an6").hidden = "";
    //    // an6=1;
    //     stand();
    // }  
}