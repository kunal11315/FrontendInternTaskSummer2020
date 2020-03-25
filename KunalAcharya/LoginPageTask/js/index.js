save = function(){
    var userName = document.getElementById("uName").value;
    if (isBlankText(userName)){
        alert("UserName can't be blank!!!!");
        return;
    }
    var emailId = document.getElementById("email").value;
    isValidEmailAdress(emailId);
    var phoneNumber = document.getElementById("phone").value;
    if(!isValidPhoneNumber(phoneNumber)){
        alert("Please Enter Valid Indian Phone Number");
        return;
    }
    var password = document.getElementById("password").value;
    if (isBlankText(password)){
        alert("Password can't be blak");
        return;
    }
    if (password.length < 6){
        alert("Please enter password greater than 6 character!!!")
        return
    }
    var confirmedPassword = document.getElementById("cnfPassword").value;
    

    if (!isTwoTextSame(password,confirmedPassword)){
        alert("Please enter same password!!!!!")
        return;
    };
    
    if(document.getElementById("belowEighteen").checked){
        var age = "Below 18"
    }
    if(document.getElementById("eighteen").checked){
        var age = "18"
    }
    if(document.getElementById("aboveEighteen").checked){
        var age = "Above 18"
    }
    // window.open("~/success.html")
    return;
}

function isBlankText(text){
    if (text.localeCompare("") == 0){
        return true;
    }
    return false;
}

function isTwoTextSame(text1, text2){
    if (text1.localeCompare(text2) == 0){
        return true;
    };
    return false;
}

function isValidPhoneNumber(phoneNumber){
    if (isBlankText(phoneNumber)){
        alert("Phone number cant be blank")
        return;
    }
    var phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(phoneNumber)){
        return true;
    }
    return false;
}

function isValidEmailAdress(emailId){
    if(isBlankText(emailId)){
        alert("Email can't be blank");
        return;
    }
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (pattern.test(emailId)){
        return true;
    }
    return false;
}