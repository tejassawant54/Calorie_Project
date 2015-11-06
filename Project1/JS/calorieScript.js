var container = document.getElementById("container"),
    select = "",
    divs = "",
    divResult = "",
    divWtId = "",
    selActVal = "",
    Duration = ["---- Please select ----",10,15,20,30,45,60],
    Weight = ["---- Please select ----","lbs","kg"],
    Activities = ["---- Please select ----","General","Sports","Cycling","Stationary","Running","Exercise","Swimming","Walking","Rowing","Dancing"],
    Dancing = ["---- Please select ----","Dancing (general)","Aerobics (low impact)","Aerobics (high impact)","Jazz"],
    Rowing = ["---- Please select ----","Rowing (50W)","Rowing (100W)","Rowing (150W)","Rowing (150W)"],
    Walking = ["---- Please select ----","Walking (3 mph 20 min/mile)","Walking (3.5 mph, 17 min/mile)","Walking (4 mph 15 min/mile)"],
    Swimming = ["---- Please select ----","Swimming (light)","Swimming (moderate)"],
    Exercise = ["---- Please select ----","Circuit Training","Weight Training (light)","Weight Training (hard)","Stretching/Yoga"],
    Running = ["---- Please select ----","Running (5 mph, 12 min/mile)","Running 5.5 mph (11 min/mile)","Running (6 mph, 10 min/mile)","Running (6.6 mph, 9 min/mile)","Running (7.5 mph 8 min/mile)","Running (8.6 mph, 7 min/mile)","Running (10 mph, 6 min/mile)"],
    CyclingStationary = ["---- Please select ----","Cycling (stationary, 50W)","Cycling (stationary, 100W)","Cycling (stationary, 150W)","Cycling(stationary, 200W)","Cycling (stationary, 250W)"],
    Cycling = ["---- Please select ----","Cycling (light, <10 mph)","Cycling (light-moderate, 10-12 mph)","Cycling (moderate, 12.1-14 mph)","Cycling (hard, 14.1-16 mph)","Cycling (v. hard, 16.1-19 mph)"],
    Sports = ["---- Please select ----","Racquetball (recreational)","Volleyball (recreational)","Golf (walking + bag)","Kayaking (leisure)"],
    General = ["---- Please select ----","Chopping Wood","Mowing Lawn (walking, power)","Trimming (manual)","Weeding/Gardening","Sitting Activities (very light)","Standing (very light)","Washing Car","Cooking Food","Sleeping"],
    divActLabel = document.createElement("label"),
    divActtxt = "",
    divSubSelLabel = document.createElement("label"),
    divSubSeltxt = "",
    divDurLabel = document.createElement("label"),
    divDurtxt = "",
    flag = false,
    flagSS = false,
    flagSD = false,
    flagRe = false;

/*----------------------------------------------------------------------------
    Browser Detection
------------------------------------------------------------------------------*/

/*console.log(BrowserDetect.browser);
if(BrowserDetect.browser == "Safari"){
    alert("Please Change Your Browser to Chorme, Firefox or IE9 and above !!!");
}else{
    console.log(BrowserDetect.browser);
    //selectWt();
}*/

var coWtLabel = GetCookie("wtlabel"),       // Get Cookie values and store locally
    coWtValue = GetCookie("weight");

console.log("from Form: "+coWtLabel+" "+coWtValue);

selectAct(coWtValue);       // call to create first select upon registering 

/*----------------------------------------------------------------------------
    Function selectAct(): Creates a select element for Activities
------------------------------------------------------------------------------*/

function selectAct(txtValue){
    //console.log(txtValue);
    flag = true;
    
    localStorage.setItem("weight",txtValue);            // store weight value in local storage
    createEle(Activities,"selAct","divAct");
    var actId = document.getElementById("selAct");
    
    var divActId = document.getElementById("divAct");
    
    divActtxt = document.createTextNode(" Select Activity to Search: ");
    divActLabel.appendChild(divActtxt);
    divActLabel.className = "labelStyle";
    divActId.appendChild(divActLabel);
    
    actId.setAttribute("onchange","subSelect(this.value);");        // onchange call next select element
    
}

/*----------------------------------------------------------------------------
    Function subSelect(): Creates a select element for subCategory
------------------------------------------------------------------------------*/

function subSelect(seleAct){
    var parNode = document.getElementById("selAct");
    localStorage.setItem("activity",seleAct);
    
    if(flag == false || flagSS == false){
    
    if(seleAct == "Rowing"){
        createEle(Rowing,"selRow","divSubSelect");
        createLabel();
        flag = true;
        flagSS = true;
        var selRow = document.getElementById("selRow");
        selRow.setAttribute("onchange","selDur(this.value);");
    }else if(seleAct == "Walking"){
        createEle(Walking,"selWalk","divSubSelect");
        createLabel();
        flag = true;
        flagSS = true;
        var selWalk = document.getElementById("selWalk");
        selWalk.setAttribute("onchange","selDur(this.value);");
    }else if(seleAct == "Dancing"){
        createEle(Dancing,"selDance","divSubSelect");
        createLabel();
        flag = true;
        flagSS = true;
        var selDance = document.getElementById("selDance");
        selDance.setAttribute("onchange","selDur(this.value);");
    }else if(seleAct == "Swimming"){
        createEle(Swimming,"selSwim","divSubSelect");
        createLabel();
        flag = true;
        flagSS = true;
        var selSwim = document.getElementById("selSwim");
        selSwim.setAttribute("onchange","selDur(this.value);");
    }else if(seleAct == "Exercise"){
        createEle(Exercise,"selExe","divSubSelect");
        createLabel();
        flag = true;
        flagSS = true;
        var selExe = document.getElementById("selExe");
        selExe.setAttribute("onchange","selDur(this.value);");
    }else if(seleAct == "Running"){
        createEle(Running,"selRun","divSubSelect");
        createLabel();
        flag = true;
        flagSS = true;
        var selRun = document.getElementById("selRun");
        selRun.setAttribute("onchange","selDur(this.value);");
    }else if(seleAct == "Stationary"){
        createEle(CyclingStationary,"selStat","divSubSelect");
        createLabel();
        flag = true;
        flagSS = true;
        var selStat = document.getElementById("selStat");
        selStat.setAttribute("onchange","selDur(this.value);");
    }else if(seleAct == "Cycling"){
        createEle(Cycling,"selCyc","divSubSelect");
        createLabel();
        flag = true;
        flagSS = true;
        var selCyc = document.getElementById("selCyc");
        selCyc.setAttribute("onchange","selDur(this.value);");
    }else if(seleAct == "Sports"){
        createEle(Sports,"selSport","divSubSelect");
        createLabel();
        flag = true;
        flagSS = true;
        var selSport = document.getElementById("selSport");
        selSport.setAttribute("onchange","selDur(this.value);");
    }else if(seleAct == "General"){
        createEle(General,"selGen","divSubSelect");
        createLabel();
        flag = true;
        flagSS = true;
        var selGen = document.getElementById("selGen");
        selGen.setAttribute("onchange","selDur(this.value);");
        
    }
    }else{
        rmvChildNodes(seleAct);         // call to remove child if flag is set 
    }
}

function createLabel(){
    
    var divSubSelId = document.getElementById("divSubSelect");
        divSubSeltxt = document.createTextNode("Select SubCategory:");
        divSubSelLabel.appendChild(divSubSeltxt);
        divSubSelLabel.className = "labelStyle";
        divSubSelId.appendChild(divSubSelLabel);
}

/*----------------------------------------------------------------------------
    Function selDur(): Creates Select element for Duration
------------------------------------------------------------------------------*/

function selDur(subSelectVal){
    
    if(flagSD == false){
        flagSD = true;
        localStorage.setItem("subCategory",subSelectVal);
    
        createEle(Duration,"selDur","divDur");
        var durId = document.getElementById("selDur"),
            divDurId =document.getElementById("divDur");
        
        divDurtxt = document.createTextNode(" Select Duration in Mins: ");
        divDurLabel.appendChild(divDurtxt);
        divDurLabel.className = "labelStyle";
        divDurId.appendChild(divDurLabel);
    
        durId.setAttribute("onchange","computeCal(this.value);")
    }else{
        rmvLastChild(subSelectVal);         // call to remove child if flag set
    }
    
}

/*----------------------------------------------------------------------------
    Function createEle(): Create select elements and respective divs. 
                          Takes array of elements, select and div ID 
                          string as input.
------------------------------------------------------------------------------*/

function createEle(arr,name,divName){
    
                                                    //Creating div and assigning ID and class
    divs = document.createElement("div");
    divs.setAttribute("id",divName);                    
    divs.className = "divStyle slideRight";
    
                                                    //Creating select element with options
    select = document.createElement("select");
    select.setAttribute("id",name);
    
    for(var i=0;i<arr.length;i++){

        var options = document.createElement("option");
        options.value = arr[i];
        options.text = arr[i];
        select.appendChild(options);
        divs.appendChild(select);                   //Appends to the container
        container.appendChild(divs);
    }
}

/*----------------------------------------------------------------------------
    Function rmvChild(): Removes the nodes on value change
------------------------------------------------------------------------------*/

function rmvChild(valueOpt){
    
    var parNode = document.getElementById("container"),
        chlNode = document.getElementById("divAct"),
        divSSel = document.getElementById("divSubSelect"),
        divDur = document.getElementById("divDur"),
        divRe = document.getElementById("divResult");

    if(flag == true){
        parNode.removeChild(chlNode);
        flag = false;
        divActtxt.nodeValue = "";
    }
    if(flagSS == true){
        parNode.removeChild(divSSel);
        flagSS = false;
        divSubSeltxt.nodeValue = "";
    }
    if(flagSD == true){
        parNode.removeChild(divDur);
        flagSD = false;
        divDurtxt.nodeValue = "";
    }
    
    if(flagRe == true){
        parNode.removeChild(divRe);
        flagRe = false;
    }
}

/*----------------------------------------------------------------------------
    Function rmvChildNodes(): Removes the nodes on value change
------------------------------------------------------------------------------*/

function rmvChildNodes(secSubSelect){
    
    //console.log(" In rmvChildNodes "+secSubSelect);
    var parNode = document.getElementById("container"),
        chlNode = document.getElementById("divSubSelect"),
        divDur = document.getElementById("divDur"),
        divRe = document.getElementById("divResult");
    
    flag = false;
    
    if(flagSS == true){
        divSubSeltxt.nodeValue = " ";
        parNode.removeChild(chlNode);
        flagSS = false;
        subSelect(secSubSelect);
    }
    
    if(flagSD == true){
        divDurtxt.nodeValue = " ";
        parNode.removeChild(divDur);
        flagSD = false;   
    }
    if(flagRe == true){
        parNode.removeChild(divRe);
        flagRe = false;
    }
    
}

/*----------------------------------------------------------------------------
    Function rmvLastChild(): Removes the nodes on value change
------------------------------------------------------------------------------*/

function rmvLastChild(lastSelectVal){
    var parNode = document.getElementById("container"),
        divDur = document.getElementById("divDur"),
        divRe = document.getElementById("divResult");
    
        parNode.removeChild(divDur);
        flagSD = false;
        divDurtxt.nodeValue = "";
        selDur(lastSelectVal);
        
        if(flagRe == true){
            parNode.removeChild(divRe);
            flagRe = false;
        }
}


/*----------------------------------------------------------------------------
    Function animate(): Compute necessary animation while creating element
------------------------------------------------------------------------------*/

function animate(element){

    var opacity = parseFloat(element.style.opacity),            //convert string to muber format
        timer = "";
    
     opacity += 0.1;                                //increment opacity
     var newopa = opacity.toString();
     element.style.opacity = newopa;                //append new opacity to element
    
       if(opacity < 1){                              //check perform to come out of settimeout   
          timer = setTimeout(function(){animate(element)},50);
       }else{
          clearTimeout(timer);
       }    
}


/*----------------------------------------------------------------------------
    Function computeCal(): Calls for loading data
------------------------------------------------------------------------------*/

function computeCal(selectDuration){
    
    var parNode = document.getElementById("container"),
        chldNode = document.getElementById("divResult");
    
    if(flagRe == false){
    flagRe = true;    
    localStorage.setItem("Duration",selectDuration);
    loadJSON();                                         //call to loadJSON 
    }else{
        parNode.removeChild(chldNode);
        flagRe = false;
        computeCal(selectDuration);
    }
}

/*----------------------------------------------------------------------------
    Function loadJSON(): Loading data from JSON file using AJAX request
------------------------------------------------------------------------------*/

function loadJSON(){
    
    var xmlhttp = new XMLHttpRequest();
    var url = "http://people.rit.edu/tas1960/data.txt";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {         //check for ready state and status
            var myArr = JSON.parse(xmlhttp.responseText);               //Parses string into JSON
            calorieValue(myArr);                                        
        }
    }
    xmlhttp.open("GET", url, true);                             //Send a request to the server
    xmlhttp.send();
}

/*----------------------------------------------------------------------------
    Function calorieValue(): Compute necessary calorie calculation.
                             Input array of data.
------------------------------------------------------------------------------*/

function calorieValue(myArr){
    
    //console.log(myArr);
    var weightVal = localStorage.getItem("weight"),             //Retriving data from local Storage
        activity = localStorage.getItem("activity"),
        subCategory = localStorage.getItem("subCategory"),
        duration = localStorage.getItem("Duration"),
        divResultp = document.createElement("p"),               //Dynamically creating p tags on result div
        divResultp1 = document.createElement("p"),
        divResultSAp = document.createElement("p"),
        divResultSSAp = document.createElement("p"),
        divResultVal = document.createElement("p");
    
    divResult = document.createElement("div");
    //Div Result attributes
    divResult.setAttribute("id","divResult");
    divResult.style.opacity = 0;
    animate(divResult);                     //Calling animate function on div to fadeIn
    divResult.className = "resultDiv";      //Adding class from CSS

    
    
    if(coWtLabel == "lbs"){
        weightVal = Math.round(weightVal/2.20462262);      //converting and rounding pounds to kg's for ease of calculation 
    }
    
   // console.log("weight: "+weightVal+" activity: "+activity+" subCategory: "+subCategory+" Duration: "+duration+" WtMeasure: "+wtMeasure);
    for(var i=0;i<myArr.length;i++){
        //console.log(myArr[i].activityName);
        if(subCategory == myArr[i].activityName){
            var energyExpenditure = myArr[i].activityVal;
            var calories = (energyExpenditure * weightVal * duration).toFixed(2);          //Calculating total calories burned
            
            /* Appending Final result to Result div */
            
            var divResultxtp = document.createTextNode("RESULT FOR TOTAL CALORIE BURNED");
            divResultp.className = "divResultp";
            var divResultxtp1 = document.createTextNode(calories);
            divResultp1.className = "divResultp1";
            var divResulttxtSAp = document.createTextNode("ACTIVITY: "+activity);
            divResultSAp.className = "divResultSAp";
            var divResulttxtSSAp = document.createTextNode(subCategory);
            divResultSSAp.className = "divResultSSAp";
            var divResulttxtVal = document.createTextNode(energyExpenditure+" (calories/min/kg)");
            divResultVal.className = "divResultVal";
            
            divResultp.appendChild(divResultxtp);
            divResultp1.appendChild(divResultxtp1);
            divResultSAp.appendChild(divResulttxtSAp);
            divResultSSAp.appendChild(divResulttxtSSAp);
            divResultVal.appendChild(divResulttxtVal);
            
            divResult.appendChild(divResultp);
            divResult.appendChild(divResultp1);
            divResult.appendChild(divResultSAp);
            divResult.appendChild(divResultSSAp);
            divResult.appendChild(divResultVal);
            
            container.appendChild(divResult);
            console.log("Calories Burned: "+calories);
        }
    }
}