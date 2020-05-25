var selectTo = document.getElementById("to")
var outputDiv = document.getElementById("outputDiv");
var Deltav = document.getElementById("deltav");
var Isp = document.getElementById("Isp");
var Ve = document.getElementById("Ve");
var Mprop = document.getElementById("Mprop");
var selectFrom = document.getElementById("from")
var selectPayLoad = document.getElementById("payLoad")
var selectRocket = document.getElementById("rocket")
var missionName = document.getElementById("missionName")
var outputLevel4 = document.getElementById("outputLevel4")
var outputLevel5 = document.getElementById("outputLevel5")
var outputLevel6 = document.getElementById("outputLevel6")

var mfinal = 0
var isp = 0;
var delta = 0;
var ve = 0;
var mstructure = 0;
var payload = 0;
var buttonValue = 0;
var result = 0;



var rockets = 0;
var payloads = 0;
var tos = 0;

window.writeThis = (e) => {
    missionName.style.setProperty('border', 'initial')
    
}
window.from = (e) => {
    selectFrom.style.setProperty('border', 'initial')
}
window.to = (e) => {

    // outputLevel3.innerHTML = "";
    outputLevel4.innerHTML = "";
    outputLevel5.innerHTML = "";
    outputLevel6.innerHTML = "";
    tos = 1
    Mprop.value = ""
    Deltav.style.setProperty('border', 'initial')
    selectTo.style.setProperty('border', 'initial')

    if (tos == 1 || payload == 1 || rockets == 1) {
        $("#rocket").prop("selectedIndex", 0);
        $("#payLoad").prop("selectedIndex", 0);
        selectPayLoad.style.border = "solid Red";
        selectRocket.style.border = "solid Red";


    }
    while (this.outputDiv.firstChild) {
        this.outputDiv.removeChild(this.outputDiv.lastChild);
    }
    Deltav.value = "";
    Isp.value = "";
    Ve.value = "";
    mstructure = ""
    Mprop.value = ""
    payload = ""
    if (e.value == "lowearth") {
        delta = 9.4
        Deltav.value = delta;

    } else if (e.value == "geotransfer") {
        delta = 11.84
        Deltav.value = delta;

    }
    else if (e.value == "moon") {
        delta = 15.07
        Deltav.value = delta;

    }
    else if (e.value == "mars") {
        delta = 18.91
        Deltav.value = delta;

    }
    if (Deltav.value && Ve.value && Isp.value && payload != 0) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
}
window.rocket = (e) => {

    // outputLevel3.innerHTML = "";
    outputLevel4.innerHTML = "";
    outputLevel5.innerHTML = "";
    outputLevel6.innerHTML = "";
    rockets = 1
    Isp.style.setProperty('border', 'initial');
    Ve.style.setProperty('border', 'initial');
    Mprop.value = ""
    if (rockets == 1 || tos == 1 || payloads == 1) {
        // $("#to").prop("selectedIndex", 0);
        $("#payLoad").prop("selectedIndex", 0);
        selectPayLoad.style.border = "solid Red"

    }
    while (this.outputDiv.firstChild) {
        this.outputDiv.removeChild(this.outputDiv.lastChild);
    }
    Isp.value = ""
    Ve.value = ""
    mstructure = ""
    payload = ""
    if (e.value == "1") {
        ve = 2793;
        ispvalue = 285;
        mstructure = 320000
        Isp.value = ispvalue;
        Ve.value = ve;
        selectRocket.style.setProperty('border', 'initial')

        var imageTag = document.createElement("img")
        imageTag.classList.add("img-fluid")
        imageTag.src = "assets/images/PSLV.jpg"
        
        outputDiv.appendChild(imageTag);
    } else if (e.value == "2") {
        ve = 3057.6;
        ispvalue = 312;
        mstructure = 414750
        Isp.value = ispvalue;
        Ve.value = ve;
        selectRocket.style.setProperty('border', 'initial')

        var imageTag = document.createElement("img")
        imageTag.classList.add("img-fluid")
        imageTag.src = "assets/images/GSLVMK2.jpg"
        
        outputDiv.appendChild(imageTag);
    }
    else if (e.value == "3") {
        ve = 3302.6;
        ispvalue = 337;
        mstructure = 640000
        Isp.value = ispvalue;
        Ve.value = ve;
        selectRocket.style.setProperty('border', 'initial')

        var imageTag = document.createElement("img")
        imageTag.classList.add("img-fluid")
        imageTag.src = "assets/images/GSLVMK3.jpg"
        outputDiv.appendChild(imageTag);
    }
    else if (e.value == "4") {
        ve = 3087;
        ispvalue = 315;
        mstructure = 549054
        Isp.value = ispvalue;
        Ve.value = ve;
        selectRocket.style.setProperty('border', 'initial')

        var imageTag = document.createElement("img")
        imageTag.classList.add("img-fluid")
        imageTag.src = "assets/images/Flacon.jpg"
        outputDiv.appendChild(imageTag);
    }
    if (Deltav.value && Ve.value && Isp.value && payload != 0) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }

}
window.payLoad = (e) => {
    // payload = 1
    // if (payload == 1 && tos == 1 && rockets == 1) {
    //     $("#to").prop("selectedIndex", 0);
    //     $("#rocket").prop("selectedIndex", 0);
    // }
    // while (this.outputDiv.firstChild) {
    //     this.outputDiv.removeChild(this.outputDiv.lastChild);
    // }

    outputLevel6.innerHTML = "";
    outputLevel4.innerHTML = "";
    outputLevel5.innerHTML = "";
    payload = ""
    Mprop.value = ""
    if (e.value == "1") {
        payload = 100
        selectPayLoad.style.setProperty('border', 'initial')
    } else if (e.value == "2") {
        payload = 500
        selectPayLoad.style.setProperty('border', 'initial')
    } else if (e.value == "3") {
        payload = 1000
        selectPayLoad.style.setProperty('border', 'initial')
    } else if (e.value == "4") {
        payload = 2000
        selectPayLoad.style.setProperty('border', 'initial')
    } else if (e.value == "5") {
        payload = 3000
        selectPayLoad.style.setProperty('border', 'initial')
    } else if (e.value == "6") {
        payload = 4000
        selectPayLoad.style.setProperty('border', 'initial')
    } else if (e.value == "7") {
        payload = 5000
        selectPayLoad.style.setProperty('border', 'initial')
    } else if (e.value == "8") {
        payload = 10000
        selectPayLoad.style.setProperty('border', 'initial')
    } else if (e.value == "9") {
        payload = 20000
        selectPayLoad.style.setProperty('border', 'initial')
    }
    console.log("deltav ve isp mstru payload", delta, ve, ispvalue, mstructure, payload)
    if (Deltav.value && Ve.value && Isp.value && payload != 0) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
}
window.showResult = (e) => {
    if (missionName.value == "") {
        missionName.style.border = "solid Red";
    } else {
        mfinal = payload + mstructure
        var frac = delta / ve
        var E = 2.718
        var temp = (Math.pow(E, frac)) - 1
        result = mfinal * temp
        Mprop.value = mfinal;

        // outputLevel3.innerHTML = `The mass of propellant required to conduct`;
        outputLevel6.innerHTML = `The mass of propellant required to conduct ${missionName.value} mission is ${result.toFixed(2)} kg`;
        outputLevel5.innerHTML = "M_Propellant(kg)"
        outputLevel4.innerHTML = `${result.toFixed(2)} `;
        console.log(result)
    }
}