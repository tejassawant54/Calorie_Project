function Validate(){    
    console.log("In validations !!")
    var firstName = document.getElementById("fname").value,
        lastName = document.getElementById("lname").value,
        email = document.getElementById("email").value,
        phone = document.getElementById("phone").value,
        weight = document.getElementById("weight").value,
        height = document.getElementById("height").value,
        gender = document.getElementsByName("gender"),
        wtlabel = document.getElementsByName("wt"),
        dailyAct = document.getElementById("dailyAct"),
        gndr_error = document.getElementById("gndr"),
        dailySpan = document.getElementById("dailySpan"),
        errorTxt = "",
        errorMsg1 = ""; 
    
    //------------- Set Cookies -------------------------
    
        SetCookie("FirstName",firstName);
        SetCookie("LastName",lastName);
        SetCookie("email",email);
        SetCookie("phone",phone);
        SetCookie("weight",weight);
        SetCookie("height",height);
    //------------------------------ Gender -----------------------------------
        
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked){
            console.log(gender[i].value);
            var genderCo = gender[i].value;
            SetCookie("gender",genderCo);
            break;
        }
    }
     //------------------------------ Weight -----------------------------------
        
    for(var i=0;i<wtlabel.length;i++){
        if(wtlabel[i].checked){
            console.log(wtlabel[i].value);
            var weightCo = wtlabel[i].value;
            SetCookie("wtlabel",weightCo);
            break;
        }
    }
    
    //------------------------------ Daily Activity -----------------------------------
    
    console.log(dailyAct.value);                            
    if(dailyAct.value == "default"){                        // Check if the select value is default or selected
        errorMsg1 += "Please Select Activity."
    }else{
        console.log("In else: "+dailyAct.value);
        var dailyCo = dailyAct.value;
        SetCookie("Daily_Activity",dailyCo);
    }
    
    if(errorMsg1){
        errorTxt = document.createTextNode(errorMsg1);
        dailySpan.appendChild(errorTxt);
        return false;
    }
    
    return true;

}