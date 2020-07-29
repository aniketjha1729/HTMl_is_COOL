// alert("js connectd")
var bodyImage=document.getElementById("mainBody")
var outputDiv = document.getElementById("outputDiv");
var Deltav=document.getElementById("deltav");
var Isp=document.getElementById("Isp");
var Ve=document.getElementById("Ve");
var outputLevel = document.getElementById("outputLevel1");
var outputLevel = document.getElementById("outputLevel2")
var selectpropellent = document.getElementById("propellent");
var selectengine=document.getElementById("engine");
var selectTo = document.getElementById("to");
var selectFrom = document.getElementById("from");
var rocketTitle = document.getElementById("rocketTitle")
var targetoption1 = document.createElement("option");
var targetoption2 = document.createElement("option");
var targetoption3 = document.createElement("option");
var targetoption4 = document.createElement("option");
var propellentoption1=document.createElement("option");
var propellentoption2=document.createElement("option");
var propellentoption3=document.createElement("option");
var propellentoption4=document.createElement("option");
var defaultPropellent=document.createElement("option")

var result=0
var ispvalue=0;
var delta=0;
var ve=0;
var buttonValue=0;




window.from = function (e) {
    
    
    delta = Deltav.value;
    ispvalue = Isp.value;
    ve = Ve.value;
    this.console.log(delta)
    
   
    if (propellentoption1.value || propellentoption2.value || propellentoption3.value || propellentoption4.value) {
        selectpropellent.remove(propellentoption1)
        selectpropellent.remove(propellentoption2)
        selectpropellent.remove(propellentoption3)
        selectpropellent.remove(propellentoption4)
        
        defaultPropellent.text="Propellent"
        selectpropellent.add(defaultPropellent);
        $("#engine").prop("selectedIndex", 0);
        $("#to").prop("selectedIndex", 0); 
          
                
        
    }
    // var count=this.outputDiv.childElementCount;
    // this.console.log("child nodes",count)
    while (this.outputDiv.firstChild) {
        this.outputDiv.removeChild(this.outputDiv.lastChild);
    }
    while (this.outputLevel1.firstChild) {
        this.outputLevel1.removeChild(this.outputLevel1.lastChild);
    }
    while (this.outputLevel2.firstChild) {
        this.outputLevel2.removeChild(this.outputLevel2.lastChild);
    }
    Deltav.value = "";
    Isp.value = "";
    Ve.value = "";
    
    if(e.value =="Mars"){
        if (targetoption1.value || targetoption2.value || targetoption3.value || targetoption4.value) {
            this.selectTo.remove(targetoption1);
            this.selectTo.remove(targetoption2);
            this.selectTo.remove(targetoption3);
            this.selectTo.remove(targetoption4);
        } 

        //selectFrom.disabled=true;
        bodyImage.style.backgroundImage = "url('assets/images/From/Mars.jpg')";
        this.document.getElementById("heading").style.color = "black";

       
        targetoption1.text = "Low mars Orbit"; targetoption1.value = "Low mars Orbit";
        targetoption2.text = "Phobos Transfer Orbit"; targetoption2.value = "Phobos Transfer Orbit";
        targetoption3.text = "Deimos Transfer Orbit"; targetoption3.value = "Deimos Transfer Orbit";
        targetoption4.text = "Earth"; targetoption4.text = "Earth";
        selectTo.add(targetoption1);
        selectTo.add(targetoption2);
        selectTo.add(targetoption3);
        selectTo.add(targetoption4);
    }else if(e.value=="Earth"){
        if (targetoption1.value || targetoption2.value || targetoption3.value || targetoption4.value) {
            this.selectTo.remove(targetoption1);
            this.selectTo.remove(targetoption2);
            this.selectTo.remove(targetoption3);
            this.selectTo.remove(targetoption4);
        } 
        //selectFrom.disabled = true;
        bodyImage.style.backgroundImage = "url('assets/images/From/Earth.jpg')";
        this.document.getElementById("heading").style.color="black";
        
        targetoption1.text = "LEO"; targetoption1.value = "LEO"; 
        targetoption2.text = "GTO"; targetoption2.value = "GTO"; 
        targetoption3.text = "MTO"; targetoption3.value = "MTO"; 
        targetoption4.text = "Mars"; targetoption4.value = "Mars"; 
        selectTo.add(targetoption1);
        selectTo.add(targetoption2); 
        selectTo.add(targetoption3);
        selectTo.add(targetoption4);
    }else if(e.value=="Saturn"){
        if (targetoption1.value || targetoption2.value || targetoption3.value || targetoption4.value) {
            this.selectTo.remove(targetoption1);
            this.selectTo.remove(targetoption2);
            this.selectTo.remove(targetoption3);
            this.selectTo.remove(targetoption4);
        }
        //selectFrom.disabled = true;
        bodyImage.style.backgroundImage = "url('assets/images/From/Saturn.jpg')";
        
        
        targetoption1.text = "Low Saturn Orbit"; targetoption1.value = "Low Saturn Orbit";
        targetoption2.text = "Titan Transfer"; targetoption2.value = "Titan Transfer";
        targetoption3.text = "Earth"; targetoption3.value = "Earth";
        
        selectTo.add(targetoption1);
        selectTo.add(targetoption2);
        selectTo.add(targetoption3);
        
    }
}

window.to = function (e) {
    engine.style.border = "solid Red";
    document.getElementById("submit").disabled = false;
    if (propellentoption1.value || propellentoption2.value || propellentoption3.value || propellentoption4.value) {
        this.console.log("peoplelletft")
        selectpropellent.remove(propellentoption1)
        selectpropellent.remove(propellentoption2)
        selectpropellent.remove(propellentoption3)
        selectpropellent.remove(propellentoption4)
        $("#engine").prop("selectedIndex", 0);
        
        defaultPropellent.text = "Propellent"
        selectpropellent.add(defaultPropellent);
       
    }
    
    // var count = this.outputDiv.childElementCount;
    // this.console.log("child nodes", count)
    while (this.outputDiv.firstChild) {
        this.outputDiv.removeChild(this.outputDiv.lastChild);
    }
    while (this.outputLevel1.firstChild) {
        this.outputLevel1.removeChild(this.outputLevel1.lastChild);
    }
    while (this.outputLevel2.firstChild) {
        this.outputLevel2.removeChild(this.outputLevel2.lastChild);
    }
    Deltav.value = "";
    Isp.value = "";
    Ve.value = "";
    if (e.value == "GTO") {
        // selectFrom.disabled = true;
        // selectTo.disabled=true;
        delta=11.84
        Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Earth_GTO.png')";
        this.document.getElementById("heading").style.color = "white";
        
    } else if (e.value == "LEO") {
        // selectFrom.disabled = true;
        // selectTo.disabled=true;
        delta = 9.4
        Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Earth_LEO.jpg')";
        this.document.getElementById("heading").style.color = "white";

        
        
    } else if (e.value == "Mars") {
        // selectFrom.disabled = true;
        // selectTo.disabled=true;
        delta = 18.91
         Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Earth_MArs.jpg')";
        this.document.getElementById("heading").style.color = "white";

        
    }else if (e.value == "MTO") {
        // selectFrom.disabled = true;
        // selectTo.disabled=true;
        delta = 12.52
         Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Earth_MTO.jpeg')";
        this.document.getElementById("heading").style.color = "white";

        
    }else if (e.value == "Deimos Transfer Orbit") {
        // selectFrom.disabled = true;
        // selectTo.disabled=true;
        delta = 4.9
         Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Mars_Deimos.jpg')";
        this.document.getElementById("heading").style.color = "white";

        
    } else if (e.value == "Earth" && selectFrom.value == "Mars") {
        
        // selectFrom.disabled=true;
        // selectTo.disabled=true;
        delta = 18.91
         Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Mars_Earth.jpg')";
        
    }else if (e.value == "Low mars Orbit") {
        // selectFrom.disabled=true;
        delta = 3.8
         Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Mars_Low_Mars_Orbit.jpg')";
        this.document.getElementById("heading").style.color = "white";

        
    }else if (e.value == "Phobos Transfer Orbit") {
        // selectFrom.disabled=true;
        // selectTo.disabled=true;
        delta = 4.5
         Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Mars_Phobos.jpg')";
        this.document.getElementById("heading").style.color = "white";

        
    } else if (e.value == "Earth" && selectFrom.value == "Saturn") {
        // selectFrom.disabled=true;
        // selectTo.disabled=true;
        delta = 57.34
         Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Saturn_Earth.jpg')";
        
    }else if (e.value == "Low Saturn Orbit") {
        // selectFrom.disabled=true;
        // selectTo.disabled=true;
        delta = 30
        Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Saturn_Low_Saturn_Orbit.jpg')";
        
    }else if (e.value == "Titan Transfer") {
        // selectFrom.disabled=true;
        // selectTo.disabled=true;
        delta = 39.37
         Deltav.value=delta;
        bodyImage.style.backgroundImage = "url('assets/images/To/Saturn_Titan_Transfer_orbit.jpg')";
        this.document.getElementById("heading").style.color = "white";

        
    }
}

var enginevalue=0;
window.propellent = function (e) {
    selectpropellent.style.border = "solid Red";
    

    enginevalue=1;
    
    if (propellentoption1.value || propellentoption2.value || propellentoption3.value || propellentoption4.value) {
        selectpropellent.remove(propellentoption1)
        selectpropellent.remove(propellentoption2)
        selectpropellent.remove(propellentoption3)
        selectpropellent.remove(propellentoption4)
        if (this.enginevalue !== 0) {
            console.log("propleletnt has")
            document.getElementById("submit").disabled = true;
        }
    } 
    

    while (this.outputDiv.firstChild) {
        this.outputDiv.removeChild(this.outputDiv.lastChild);
    }
    while (this.outputLevel1.firstChild) {
        this.outputLevel1.removeChild(this.outputLevel1.lastChild);
    }
    while (this.outputLevel2.firstChild) {
        this.outputLevel2.removeChild(this.outputLevel2.lastChild);
    }
    
    if (e.value == "1") {
        if (Isp.value || Ve.value){
            Isp.value=""
            Ve.value=""
        }
       

        propellentoption1.text = "HTPB"; propellentoption1.value = "HTPB";
        propellentoption2.text = "NitroBased"; propellentoption2.value = "NitroBased";
        propellentoption3.text = "AmmoniumBased"; propellentoption3.value = "AmmoniumBased";
        selectpropellent.add(propellentoption1);
        selectpropellent.add(propellentoption2);
        selectpropellent.add(propellentoption3);
        engine.style.setProperty('border', 'initial')

    } else if (e.value == "2") {
        if (Isp.value || Ve.value) {
            Isp.value = ""
            Ve.value = ""
        }
       
        
        propellentoption1.text = "LOx/LH2"; propellentoption1.value = "LOx/LH2";
        propellentoption2.text = "MMH/MON"; propellentoption2.value = "MMH/MON";
        propellentoption3.text = "LOx/RP-1"; propellentoption3.value = "LOx/RP-1";
        selectpropellent.add(propellentoption1);
        selectpropellent.add(propellentoption2);
        selectpropellent.add(propellentoption3);
        engine.style.setProperty('border', 'initial')
    } else if (e.value == "3") {
        if (Isp.value || Ve.value) {
            Isp.value = ""
            Ve.value = ""
        }
        
       
        propellentoption1.text = "Lithium/FLOx"; propellentoption1.value = "Lithium/FLOx";
        propellentoption2.text = "H2O2/HTPB"; propellentoption2.value = "H2O2/HTPB";

        selectpropellent.add(propellentoption1);
        selectpropellent.add(propellentoption2);
        engine.style.setProperty('border', 'initial')

    }
    // console.log(isp)    
}


window.showValue = function (e) {
    selectpropellent.style.setProperty('border', 'initial')
    engine.style.setProperty('border', 'initial')
    Ve.style.setProperty('border', 'initial')
    Isp.style.setProperty('border', 'initial')
    //Isp.style.border = "solid red";
    while (this.outputDiv.firstChild) {
        this.outputDiv.removeChild(this.outputDiv.lastChild);
    }
    while (this.outputLevel1.firstChild) {
        this.outputLevel1.removeChild(this.outputLevel1.lastChild);
    }
    while (this.outputLevel2.firstChild) {
        this.outputLevel2.removeChild(this.outputLevel2.lastChild);
    }
    document.getElementById("submit").disabled = false;
    
    if (e.value == "HTPB") {
        ve = 2.891;
        ispvalue = 295;
        Isp.value = ispvalue;
        Ve.value = ve;
    } else if (e.value == "NitroBased") {
        ve = 2.303;
        ispvalue = 235;
        Isp.value = ispvalue;
        Ve.value = ve;
    } else if (e.value == "AmmoniumBased") {
        ve = 2.9008;
        ispvalue = 296;
        Isp.value = ispvalue;
        Ve.value = ve;
    } else if (e.value == "LOx/LH2") {
        ve = 4.41;
        ispvalue = 450;
        Isp.value = ispvalue;
        Ve.value = ve;
    } else if (e.value == "MMH/MON") {
        ve = 2.94;
        ispvalue = 300;
        Isp.value = ispvalue;
        Ve.value = ve;
    } else if (e.value == "LOx/RP-1") {
        ve = 3.136;
        ispvalue = 320;
        Isp.value = ispvalue;
        Ve.value = ve;
    } else if (e.value == "Lithium/FLOx") {
        ve = 3.724;
        ispvalue = 380;
        Isp.value = ispvalue;
        Ve.value = ve;
    } else if (e.value == "H2O2/HTPB") {
        ve = 2.352;
        ispvalue = 240;
        Isp.value = ispvalue;
        Ve.value = ve;
    }
}




window.showResult = function (e) {
    this.buttonValue=1;
    delta = Deltav.value;
    ispvalue = Isp.value;
    ve=Ve.value;

    if(Deltav.value && Isp.value && Ve.value){
        
        
        // this.console.log(delta)
        // this.console.log(ispvalue)
        // this.console.log(ve)
        result=this.Math.round((1.12*delta)/ve);
        this.console.log("reslut",this.result)
        selectpropellent.style.setProperty('border', 'initial')
        engine.style.setProperty('border', 'initial')
        Deltav.style.setProperty('border', 'initial')



        // console.log(result)
        if(result>6){

            outputLevel1.innerHTML= `Number of Stage = ${result}`;
            //outputLevel.add(this.document.createElement("br"));
            outputLevel2.innerHTML = `Oh no! Number of stages exceeds 6! Which means you cannot carry the payload !`;
            // console.log("Not Possible")
        }else if(isNaN(result)){
            this.alert("Please Selct All the fields")
        }else if(this.result===1){

            outputLevel.innerHTML
                = `Congratulation! Your ${result} stage Rocket is ready to launch!`;
            var imageTag = document.createElement("img")
            imageTag.src = "assets/images/Rocket/Satge1.jpg"
            imageTag.style.height = "300px";
            imageTag.style.width = "200px";
            outputDiv.appendChild(imageTag);
        }else{

            outputLevel.innerHTML
                = `Congratulation! Your ${result} stage Rocket is ready to launch!`;
            // console.log("Not Possible")
            var imageTag = document.createElement("img")
            imageTag.src = "assets/images/Rocket/Front.jpg"
            imageTag.style.height = "125px";
            imageTag.style.width = "200px";
            outputDiv.appendChild(imageTag);
            if(result>1){
                for(i=1;i<result;i++){
                    var imageTag = document.createElement("img")
                    imageTag.src = "assets/images/Rocket/Middle.jpg"
                    imageTag.style.height = "125px";
                    imageTag.style.width = "200px";
                    outputDiv.appendChild(imageTag);
                }
                }else{
                //    this.console.log("nothing")
                }
            var imageTag = document.createElement("img")
            imageTag.src = "assets/images/Rocket/Lower.jpg"
            imageTag.style.height = "125px";
            imageTag.style.width = "200px";
            outputDiv.appendChild(imageTag);
        }
        if(this.buttonValue==0){
            this.console("button ok")
        }else{
            document.getElementById("submit").disabled = true;
        }
        var count = this.outputDiv.childElementCount;
        result = 0
        ispvalue = 0;
        delta = 0;
    } else if (!(Isp.value) && !(Ve.value)){
        Ve.style.border="solid red";
        Isp.style.border="solid red";
        // this.alert("Please Select all fields")
        
    }else{
        this.Deltav.style.border = "solid red"
        
    }

    
    
    // this.console.log("child nodes",count)
   
}
