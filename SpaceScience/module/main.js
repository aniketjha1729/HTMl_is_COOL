var phi = document.getElementById("phi")
var attempt = document.getElementById("attempt")
var hoh = document.getElementById("hoh")
var phif = document.getElementById("phif")
var alphal = document.getElementById("alphal")
var output = document.getElementById("output")
var inner = document.getElementById("inner")
var outer = document.getElementById("outer")
var canvas1=document.getElementById("myCanvas")
var canvas2=document.getElementById("myCanvas1")
var innertemp = document.getElementById("innertemp")
var outertemp = document.getElementById("outertemp")
var redcross = document.getElementById("redcross")
// var imagesource = document.getElementById("imagesource")

var Thoh = 18924.78042
var Phif = 100.9191688
var AlphaL = 79.08083116
var k=""
var buttonVal=0;
var omega1rad = 0.00118555196
var omaga2rad = 0.00007293193628
var phifrad = 1.761371774
var phiirad=""
var flag=0;

var ctx1 = canvas1.getContext("2d");
var radius=130
for(i=0;i<=1;i++){
    ctx1.beginPath();
    ctx1.arc(275, 263, radius, 0, 2 * Math.PI,false)
    ctx1.strokeStyle = "#FFFFFF";
    ctx1.lineWidth = 4;
    ctx1.stroke();
    radius=radius+119
}


window.fphi=(e)=>{  
    if(buttonVal==1){
        innertemp.style.display = "none";
        inner.style.display = "block";
        outertemp.style.display = "none";
        outer.style.display = "block"
        redcross.style.display = "none"
        canvas2.style.display="none"}
    if(e.value=="5"){
        phiirad = 0.0872664626
    }else if(e.value=="10"){
        phiirad = 0.1745329252
    } else if (e.value == "50") {
        phiirad = 0.872664626
    } else if (e.value == "90") {
        phiirad = 1.570796327
    } else if (e.value == "130") {
        phiirad = 2.268928028
    } else if (e.value == "150") {
        phiirad = 2.617993878
    } else if (e.value == "180") {
        phiirad = 3.141592654
    } else if (e.value == "220") {
        phiirad = 3.839724354
    } else if (e.value == "250") {
        phiirad = 4.36332313
    } else if (e.value == "300") {
        phiirad = 5.235987756
    } else if (e.value == "360") {
        phiirad = 6.283185307
    }
    $("#attempt").prop("selectedIndex", 0);
    attempt.style.border="2px solid red"
    phi.style.setProperty('border', 'initial')
    hoh.value=Thoh;
    hoh.style.setProperty('border', 'initial')
    phif.value=Phif;
    phif.style.setProperty('border', 'initial')
    alphal.value=AlphaL;
    alphal.style.setProperty('border', 'initial')
    output.innerHTML = "";
    canvas2.style.display="none";

}

window.fattmp=(e)=>{
    if (buttonVal == 1) {
        canvas2.style.display = "none"
        innertemp.style.display = "none";
        inner.style.display = "block";
        outertemp.style.display = "none";
        outer.style.display = "block"
        redcross.style.display = "none"
        canvas2.style.display = "none"
    }
    flag=1;
    k=attempt.value
    attempt.style.setProperty('border', 'initial')
    output.innerHTML="";
    canvas2.style.display = "none";
}

window.showResult=(e)=>{
    if(flag==1){
        buttonVal=1;
        

        radius = radius + 122
        console.log("phirad phifrad attempt omega1rad omega2rad",phiirad,phifrad,k,omega1rad,omaga2rad)
        var numerator = (phiirad - phifrad)+(2*k*3.14)
        var deno = omega1rad - omaga2rad
        console.log("phidiff",phiirad - phifrad)
        console.log("deno",deno)
        var ans=parseFloat((numerator/deno)/60).toFixed(2)
        if(ans<=60 && ans>0){
            canvas2.style.display = "block"
            innertemp.style.display = "block";
            inner.style.display = "none";
            outertemp.style.display = "block";
            outer.style.display = "none"
            redcross.style.display = "block"

            var ctx2 = canvas2.getContext("2d");
            ctx2.beginPath();
            ctx2.arc(215, 270, 190, 0, 1. * Math.PI, true)
            ctx2.strokeStyle = "#FFFF00";
            ctx2.lineWidth = 3;
            ctx2.setLineDash([5, 3]);
            ctx2.stroke();
            output.innerHTML=`Well Done! Get ready to fire your engine in ${ans} min to meet the satelite in GEO at the marked point.`;
        }else if(ans>60){
            output.innerHTML = `Oops! Its gonna take more than an hour i.e around ${ans} mins to ignite your engine for docking.
            Tweek some values to start sooner.`;
        }else if(ans<0){
            output.innerHTML = `Oh No!! Unfortunately you missed the chance to start docking at very 1st attempt. Please try again.`;
        }
        flag=0;
    }
}

