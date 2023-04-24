//Validate username

import { toast } from "react-hot-toast";



export async function usernameValidate(values){
     const errors = usernameVerify({}, values); 
     return errors;
}

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error("Username Required....!");
    }else if(values.username.includes(" ")){
        error.username = toast.error("Invalid Username....!");
    }
}


export async function passwordValidate(values){
    const errors = passwordVerify({}, values); 
    return errors;
}

function passwordVerify(error = {}, values){

   var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,}$/;

    if(!values.password){
        error.password = toast.error("Password Required....!");
    }else if(values.password.includes(" ")){
        error.password = toast.error("Invalid Password....!");
    }else if(values.password.length < 4){
        error.password = toast.error("Password must be more than 4 characters");
    }else if(!regularExpression.test(values.password)){
        error.password = toast.error("Password must contain special character and digits");
    } 
}