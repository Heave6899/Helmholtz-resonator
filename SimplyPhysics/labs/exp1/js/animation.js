var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var i=0;
var on=0;
var vol=0;
var t;
var tb1=document.getElementById("tb1");
var datav=[];
var datainv=[];
var length = Math.random(6)*0.1+3;   
var temp = Math.random(8)*.1+27;
var c=331+temp*0.607;
var img=document.createElement("img");
img.src="img/setup.png";
var text=document.getElementById("freqtext");
function startanimation(){
    var ele=document.getElementById("start");
    ele.remove();
    startanim();
    document.getElementById("temp").value=(temp).toFixed(2);
    document.getElementById("neckarea").value="4.52";
    document.getElementById("velsound").value=c.toFixed(2);
    document.getElementById("lengthneck").value=length.toFixed(2);
    document.getElementById("neckvol").value=(length*0.452).toFixed(2);
}
function starttable(){
    setInterval(singenerator,500);
    document.getElementById("volstart").hidden="";
    document.getElementById("volstop").hidden="";
    document.getElementById("addobv").hidden="";
    //document.getElementById("sound").hidden="";
}
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
}
function stopcount(){
    clearTimeout(t);
    on=0;
    text.value=(exp()).toFixed(2);
}
datax=[];
datay1=[];
datay2=[];
function getdatapoints(){
    for(var j=4;j<tb1.rows.length;j++)
    {
        var x0=parseFloat(document.getElementById("t"+j+j).value);
        var y0=parseFloat(document.getElementById("t"+j+j+j).value);
        datav.push({x: x0,y: y0});
        datax.push(x0);
        datay1.push(y0);
        var y1=parseFloat(document.getElementById("t"+j+j+j+j).value);
        datainv.push({x: x0, y: y1});
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
         { "name": "Theoretical Frequency", "data": datainv}
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
            axisTitle: '(1/V)^(1/2)',
            axisClass: 'ct-axis-title',
            textAnchor: 'middle'
          },
          plugins: [
            Chartist.plugins.ctAxisTitle({
              axisX: {
                axisTitle: '(1/v)^(1/2)',
                axisClass: 'ct-axis-title',
                offset: {
                  x: 0,
                  y: 50
                },
                textAnchor: 'middle'
              },
              axisY: {
                axisTitle: 'Freq (Hz)',
                axisClass: 'ct-axis-title',
                offset: {
                  x: 0,
                  y: 0
                },
                textAnchor: 'middle',
                flipTitle: false
              }
            })
          ]
      };
    new Chartist.Line('.ct-chart1', datavalues2, options);
    
}
var x=100; var y=10;
function startvolume(){
    vol+=5;
    context.beginPath();
    if(y<=55)
    context.clearRect(481,212,17,y);
    context.fillStyle="#00A8F3";
    context.fillRect(433, 570, 115, -y);
    context.stroke();
    if(y<=90)
    y+=3;
    if(vol!=300){
    t=setTimeout(startvolume,500);
    }
}
var L;
function getlength(){
 //   var len=7;
   // var x1=document.getElementById("t"+6+6).value;
   // var x2=document.getElementById("t"+len+len).value;
   // var delX=(x2*x2*1000)-(x1*x1*1000);
  //  var y1x1=document.getElementById("t"+6+6+6).value;
  //  var y2x1=document.getElementById("t"+len+len+len).value;
  //  var delY1=y2x1-y1x1;
  //  var y1x2=document.getElementById("t"+6+6+6+6).value;
   // var y2x2=document.getElementById("t"+len+len+len+len).value;
   // var delY2=y2x2-y1x2;
   // var mthet=delY2/delX;
   // var mexp=delY1/delX;
    L=length*2+1.1567;
    //console.log("x1: "+x1,"x2: "+x2,"delX"+delX,"y1x1: "+y1x1,"y1x2: "+y1x2,"y2x1: "+y2x1,"y2x2: "+y2x2,"delY1: "+delY1,"delY2: "+delY2,"y1x1: "+mthet,"y1x1: "+mexp,L);
    document.getElementById("lengthmod").value=length*2+1.1567;
    correctfreq();
}
function correctfreq(){
    for(var i=4;i<tb1.rows.length+3;i++){
        var t=document.getElementById("t"+i).value;
        document.getElementById("t"+i+i+i+i+i).value=correctlenghtfrequecy(t);
    }
}
function correctlenghtfrequecy(t){
    return ((331+temp*0.607)/(2*Math.PI))*Math.sqrt((0.452*0.1)/(t*L))*1000;
    //console.log("ok");
}
var j=0;
function startcount(){
    if(!on){
        on=1;
        startvolume();
    }
}
function cal()
{
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
}
function exp(){
    return -235.12128988*Math.log(vol)+1578.29579924;
}
function thetfreq(){
    return ((331+temp*0.607)/(2*Math.PI))*Math.sqrt((0.452*0.1)/(vol*length))*1000;
}
function volume(){
    vol+=5;
    return vol;
}       
function volumeinv(){
    return Math.sqrt(1/vol);
}
function startanim(){
    starttable();
    canvas.width=900;
    canvas.height=700;
    context.drawImage(img,0,0);
}