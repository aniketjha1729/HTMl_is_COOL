var phi = document.getElementById("phi")
var attempt = document.getElementById("attempt")
var hoh = document.getElementById("hoh")
var phif = document.getElementById("phif")
var alphal = document.getElementById("alphal")
var output = document.getElementById("output")
// var imagesource = document.getElementById("imagesource")

var Thoh = 18924.78042
var Phif = 100.9191688
var AlphaL = 79.08083116
var k=""

var omega1rad = 0.00118555196
var omaga2rad = 0.00007293193628
var phifrad = 1.761371774
var phiirad=""


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var radius=100
for(i=0;i<=1;i++){
    ctx.beginPath();
    ctx.arc(252, 225, radius, 0, 2 * Math.PI,false)
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    radius=radius+100
}


window.fphi=(e)=>{  
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
}

window.fattmp=(e)=>{
    k=attempt.value
    attempt.style.setProperty('border', 'initial')
    output.innerHTML="";
}

window.showResult=(e)=>{
    console.log("phirad phifrad attempt omega1rad omega2rad",phiirad,phifrad,k,omega1rad,omaga2rad)
    var numerator = (phiirad - phifrad)+(2*k*3.14)
    var deno = omega1rad - omaga2rad
    console.log("phidiff",phiirad - phifrad)
    console.log("deno",deno)
    var ans=(numerator/deno)/60
    if(ans<=60 && ans>0){
        output.innerHTML=`Well Done! Get Ready to fire your engine in ${ans} minutes`;
    }else if(ans>60){
        output.innerHTML = `Oops! Its gone a take more than an hour ${ans} mins to inginte your engine for docking,
        Tweek some values to start sooner`;
    }else if(ans<0){
        output.innerHTML = `Oh No!! Unfortunately you missed the chance to start docking at very 1st attempt. Please try again `;

    }
}

