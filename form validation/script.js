let username = document.getElementById('text');
let password = document.getElementById('password');
let flag = 1;

function formvalidate(){
    if(username.value == ""){
        document.getElementById("usererror").innerHTML= "Username is empty";
        flag = 0;
    }

    else if(username.value .length< 3){
        document.getElementById("usererror").innerHTML= "Username is less than 3 characters";
        flag = 0;
    }
    else{
        document.getElementById("usererror").innerHTML = "";
        flag = 1;
    }

    if(password.value == ""){
        document.getElementById('passerror').innerHTML = "Password is empty";
        flag = 0;
    }

    else if(password.value.length<8){
        document.getElementById('passerror').innerHTML = "Password required min 8 character";
        flag = 0;
    }

    else{
        document.getElementById("passerror").innerHTML = "";
        flag = 1;
    }

    if(flag){
        return true;
     }

     else{
        return false;
     }
}


