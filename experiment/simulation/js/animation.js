var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var i=0;
var on=0;
var score = 0;
var vol=1200;
var anim = new Animation("mycanvas");
var t;
var tb1=document.getElementById("tb1");
var datav=[];
var datainv=[];
var length = 4.70;   
var temp;//= Math.random(8)*.1+27;
var c;
var img=document.createElement("img");
var answer1,answer2,answer3,q1=0,q2=0,q3=0;
img.src="images/setup.png";
var an1=0,an2=0,an3=0,an4=0,an5=0,an6=0,an7=0,an8=0,an9=0,an10=0;
window.onload = function() {
  
    startanimation();
    //question1();
    //startanim();
context.drawImage(img,0,0);
};

var text=document.getElementById("freqtext");
canvas.addEventListener("mousedown", getcoordinatates, false);
var on=1;
 function getcoordinatates(event){
    var x = event.pageX;
    var y = event.pageY;
    x -= canvas.offsetLeft;
y -= canvas.offsetTop;
    //alert(x+" "+y);    
 on = mousefunction(x,y,on,q1,q2,q3,an1,an2,an3,an4,an5,an6);
 } 
function startanimation(){
    
    startanim();
    //document.getElementById("neckarea").value="3.66";
    //document.getElementById("lengthneck").value=length.toFixed(2);
    //document.getElementById("neckvol").value=(length*0.452).toFixed(2);
}
function starttable(){
    setInterval(singenerator,500);
    
    //document.getElementById("addobv").hidden="";
    //document.getElementById("sound").hidden="";
    //document.getElementById("selection").hidden="";
    //document.getElementById("slider").hidden="";
}
   // context.beginPath();
//context.fillStyle="white";
   // context.fillRect(718,377,132,70);
   // context.moveTo(718,410);
   // context.lineTo(850,410);
  //  context.moveTo(784,377);
 ///   context.lineTo(784,447);
  //  context.moveTo(668,410);
//    context.stroke();
var frequency;
function singenerator(){
    context.beginPath();
    context.clearRect(68,387,227,122);
    context.moveTo(68,448);
    context.lineTo(295,448);
    context.moveTo(182,387);
    context.lineTo(182,509);
    context.moveTo(68,448);
    context.stroke();
    context.beginPath();
    context.lineWidth=3;
    for (intt = 1; intt <= 226; intt++)
    {   
        context.lineTo(intt+68, (48 * Math.sin(intt * Math.PI / 18000*thetfreq()))+448);
    }
    context.clearRect(9,175,120,100);
    context.stroke();
    
    //frequencycount();
}
var experimentfreq;
function stopcount(){
    clearTimeout(t);
    //context.clearRect(0, 0, 100,100);
		anim.stop();
    
    experimentfreq = exp();
    document.getElementById("selection").hidden="";
    document.getElementById("an11").hidden="";
    document.getElementById("an12").hidden="";
    document.getElementById("an13").hidden="";
    document.getElementById("addobv").hidden="";
    document.getElementById("slider").hidden="";
    document.getElementById("an13").hidden="";
    on=0;
    text.value=(exp()).toFixed(2);
}
//function frequencycount(){
//        context.beginPath();
//        context.font = "20px Georgia";
//        frequency = thetfreq().toFixed(2);
//        context.fillStyle="#000000";
//        context.moveTo(30,30);
//        //context.clearRect(10,10,600,40);
//        context.stroke();
//        context.beginPath();
 //       context.fillText("Frequency : "+frequency,0,0);
//        context.stroke();
//}
function onZoom(chart, reset) {
  resetFnc = reset;
}
datax=[];
datay1=[];
datay2=[];
datanew=[];
function getdatapoints(){
    for(var j=6;j<tb1.rows.length+5;j++)
    {
        var x0=parseFloat(document.getElementById("t"+j+j).value);
        var y0=parseFloat(document.getElementById("t"+j+j+j).value);
        datav.push({x: x0,y: y0});
        datax.push(x0);
        datay1.push(y0);
        var y1=parseFloat(document.getElementById("t"+j+j+j+j).value);
        var y2=parseFloat(document.getElementById("t"+j+j+j+j+j).value);
        datainv.push({x: x0, y: y1});
        datanew.push({x: x0,y: y2});
        datay2.push(y1);
    }
    datay1.reverse();
    datay2.reverse();
    console.log(datainv);
    console.log(datav);
}
function plotgraph(){
    getdatapoints();
    var datavalues1 = {
        labels: datax,
        series: [
         datav,datainv
        ]
      };

      var datavalues2 = {
        labels: datax,
        series: [{ "name": "Experiment Frequency", "data": datav },
         { "name": "Theoretical Frequency", "data": datainv},
         { "name": "Theoretical Frequency Correction", "data": datanew}
        ]
      };
      
      var options = {
        showPoint: true,
        lineSmooth: false,
        axisX: {
          showGrid: true,
          showLabel: true
        },
        axisY: {
          axisTitle: 'Freq(Hz)',
          axisClass: 'ct-axis-title',
          textAnchor: 'middle',
          labelInterpolationFnc: function(value) {
            return value;
          }
        },
        
        axisX: {
            type: Chartist.AutoScaleAxis,
            onlyInteger: false,
            axisTitle: '1/√V',
            axisClass: 'ct-axis-title',
            textAnchor: 'middle'
          },
          plugins: [
            Chartist.plugins.ctAxisTitle({
              axisX: {
                axisTitle: '1/(V^(1/2))',
                axisClass: 'ct-axis-title',
                offset: {
                  x: 0,
                  y: 30
                },
                textAnchor: 'middle'
              },
              axisY: {
                axisTitle: 'f(hertz)',
                axisClass: 'ct-axis-title',
                offset: {
                  x: 0,
                  y: 0
                },
                textAnchor: 'middle',
                flipTitle: false
              }
            }),
            Chartist.plugins.zoom({ onZoom: onZoom, resetOnRightMouseBtn: true }),
            Chartist.plugins.ctPointLabels({
              textAnchor: 'middle'
            })
          ]
      };
    new Chartist.Line('.ct-chart1', datavalues2, options);
    
}
var x=100; var y=10;
var volset;
function setvol(){
  
  temp = document.getElementById("temp").value;
  
    if(isNaN(temp) || temp>50 || temp<20){
      alert("Please enter range between 20-50");
      document.getElementById("temp").value = "";
    }
    else{
      temp = document.getElementById("temp").value;
      c=331+temp*0.607;
      document.getElementById("velsound").value=c.toFixed(2);
      document.getElementById("observationtable").hidden = "";

    }
  if(document.getElementById("volgap").value>=13)
volset = parseInt(document.getElementById("volgap").value);
else if(document.getElementById("volgap").value>250){
  alert("Volume gap too larger!");
}
else{
  alert("Volume gap too small!");
}
if(c!=0 && temp!=0){
    alert("Volume Gap set");
    document.getElementById("volumegap").disabled = "disabled";
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "block";
    alert("Please input the required parameters and click on CALCULATE FREQUENCY");
    }
}
function startvolume(){
 
  z=430;
	a=480;
  anim.setStage(stage);
	anim.start();
    if(!isNaN(volset))
      vol-=volset;
    else vol-=21;
    document.getElementById("volumevalue").value=vol;
    //document.getElementById("volumeleftnew").value = vol;
    document.getElementById("slider").hidden="hidden";
    document.getElementById("selection").hidden="hidden";
    document.getElementById("an11").hidden="hidden";
    document.getElementById("an12").hidden="hidden";
    document.getElementById("an13").hidden="hidden";

    context.beginPath();
    if(y<=55)
    context.clearRect(481,212,17,y);
    context.fillStyle="#00A8F3";
    context.fillRect(433, 570, 115, -y);
    context.stroke();
    if(y<=90)
    y+=2;
    if(vol!=0 && vol>0){
    t=setTimeout(startvolume,1000);
    }
    else{
      vol=0;
      document.getElementById("volumevalue").value=vol;
    }
}
var lengthnew;
function getlength(){
    //var len=7;
    var x1=document.getElementById("t66").value;
    var x2=document.getElementById("t99").value;
    var delX=(x2*x2*1000)-(x1*x1*1000);
    var y1x1=document.getElementById("t666").value;
    var y2x1=document.getElementById("t999").value;
    var delY1=y2x1-y1x1;
    var y1x2=document.getElementById("t6666").value;
    var y2x2=document.getElementById("t9999").value;
    var delY2=y2x2-y1x2;
    var mthet=delY2/delX;
    var mexp=delY1/delX;
    //L=length*2+1.1567;
    console.log("x1: "+x1,"x2: "+x2,"delX"+delX,"y1x1: "+y1x1,"y1x2: "+y1x2,"y2x1: "+y2x1,"y2x2: "+y2x2,"delY1: "+delY1,"delY2: "+delY2,"y1x1: "+mthet,"y1x1: "+mexp);
    document.getElementById("lengthmod").value=length + (1.7*Math.sqrt(3.66/Math.PI))/100;
    //length*2+1.1567;
   //lengthnew = Math.pow((mthet/mexp),2)*length;
   lengthnew = length + (1.7*Math.sqrt(3.66/Math.PI))/100;
    correctfreq();
}
function correctfreq(){
    for(i=6;i<tb1.rows.length+5;i++){
        var t=document.getElementById("t"+i).value;
        document.getElementById("t"+i+i+i+i+i).value=correctlengthfrequency(t);
    }
}
function correctlengthfrequency(t){
    //return ((331+temp*0.607)/(2*Math.PI))*Math.sqrt((0.452*0.1)/(t*L))*1000;
    return c/(2*Math.PI)*100*Math.sqrt(3.66/(t*lengthnew)); //corrected

    //console.log("ok");
}
var j=0;
function startcount(){
    if(!on){
        on=1;
        //document.getElementById("addobv").hidden="hidden";
        document.getElementById("selection").hidden="hidden";
        document.getElementById("an11").hidden="hidden";
        document.getElementById("an12").hidden="hidden";
        document.getElementById("slider").hidden="hidden";
        startvolume();
    }
}
function cal()
{       
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
        t.value=(thetfreq()).toFixed(2);
        cell.appendChild(t);

        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.style.width=60;
        t.id = "t" + i + i+i+i+i;
        cell.appendChild(t);
    }
    if(i>=18){
      document.getElementById("plotgraphaccordion").hidden = "";
    }
}
function exp(){
    //return -99.08517362*Math.log(vol)+671.53633539;
    var delta = Math.random()*2+2;
    return c/(2*Math.PI)*100*Math.sqrt(3.66/(vol*length))+ delta;
}
function thetfreq(){
    return c/(2*Math.PI)*100*Math.sqrt(3.66/(vol*length));
    //return c*((2*Math.PI)*
}
function volume(){
    vol+=0.1;
    return vol;
}       
function volumeinv(){
    return Math.sqrt(1/vol);
}
function startanim(){
    starttable();
    context.beginPath();
    context.fillStyle = "Red";
    context.arc(799,93,20, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
}
var a= 480,z=430;
function stage()
			{
				context.clearRect(480, 430, 20,60);
				context.beginPath();
				image = document.getElementById("drop");
				context.drawImage(image, a, z);
				
				if(z<470)
				{
					z++;
				}
				else
				{
					z=450;
				}
			}
function calculatefreq(){
  var length = document.getElementById("length").value,
  volume = document.getElementById("volumeleftnew").value,
  area=document.getElementById("area").value,
  radius = document.getElementById("radius").value;
  area = Math.pow(radius,2)*Math.PI;
  document.getElementById("area").value = area;
  var freq =  c/(2*Math.PI)*100*Math.sqrt(area/(volume*length));
  document.getElementById("freq").value = freq.toFixed(2);
  console.log(length,volume,area,freq);
}
var slidervalue;
function frequencynear(){
  //var value=exp().toFixed(2);
  slidervalue=document.getElementById("slider").value;
 // document.getElementById("slidervalue").innerHTML = slidervalue;
  console.log(experimentfreq,slidervalue)
  if(slidervalue<(experimentfreq +5)&&(slidervalue>(experimentfreq-5)))
  { 
    context.beginPath();
    context.fillStyle = "#90ee90";
    context.arc(799,93,20, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
  }
  else{
    
    context.beginPath();
    context.fillStyle = "Red";
    context.arc(799,93,20, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
  }
  context.beginPath();
    context.clearRect(718,377,132,70);
    context.fillStyle="white";
    context.fillRect(718,377,132,70);
    context.moveTo(718,410);
    context.lineTo(850,410);
    context.moveTo(784,377);
    context.lineTo(784,447);
    context.moveTo(668,410);
    context.stroke();
    context.beginPath();
    context.lineWidth=3;
    for (intt = 1; intt <= 130; intt++)
    {   
        context.lineTo(intt+718, (27 * Math.sin(intt * Math.PI / 18000*slidervalue + 4*Math.PI/6+ 15))+410);
    }
    context.clearRect(9,175,120,100);
    context.stroke();
}
function showslider(){
  var value = document.getElementById("selection").value;
  //document.getElementById("slider").hidden="";
  //document.getElementById("slidervalue").hidden="";
  if(value=="1")
  {
    document.getElementById("slider").min="0";
    document.getElementById("slider").max="560";
    document.getElementById("slider").value="280";
  }
  if(value=="2")
  {
    document.getElementById("slider").min="560";
    document.getElementById("slider").max="1120";
    document.getElementById("slider").value="840";
  }
  if(value=="3")
  {
    document.getElementById("slider").min="1120";
    document.getElementById("slider").max="1680";
    document.getElementById("slider").value="1400";
  }
}