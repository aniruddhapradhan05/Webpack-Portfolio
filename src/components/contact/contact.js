export function addFormListener(){
    const submit = document.querySelector("#submit");
    const form = document.querySelector("#form");
    const inputs = form.getElementsByTagName('input');
    form.addEventListener('input', (e)=>{
        if (e.target.name === 'name') {
            checkName();
        } else if (e.target.name === 'email') {
            checkEmail();
        } else if (e.target.name === 'password') {
            checkPassword();
        } else if (e.target.name === 'phone') {
            checkPhone();
        }
    })
    Array.from(inputs).forEach(input => {
        input.addEventListener('blur', (e) => {
            if (e.target.name === 'name') {
                checkName();
            } else if (e.target.name === 'email') {
                checkEmail();
            } else if (e.target.name === 'password') {
                checkPassword();
            } else if (e.target.name === 'phone') {
                checkPhone();
            }
        });
    });
    form.addEventListener('submit', (e)=>{
        console.log("ani")
        e.preventDefault();
        const name = checkName();
        const email = checkEmail();
        const password = checkPassword();
        let phone = checkPhone();
        if(name && email && password){
            if(phone === 'ani'){
                const user = {
                    "name" : name,
                    "email" : email,
                    "password" : password
                }
                console.log(user)
                form.reset();
            }
            else if(phone){
                const user = {
                    "name" : name,
                    "email" : email,
                    "password" : password
                }
                console.log(user)
                form.reset();
            }
            
        }
    });
    function checkName(){
        const regExp_name = /^[A-Za-z\s]+$/
        const name = document.querySelector("#name");
        const err_name = document.querySelector(".error_name");
        err_name.innerHTML = "";
        if(!name.value){
        err_name.innerHTML = "* Name is required";
        return false;
        }
        else if(name.value.length <= 3){
            err_name.innerHTML = "* Name length should be greater than 3" ;
            return false;
        }
        else if(!regExp_name.test(name.value)){
            err_name.innerHTML = "* Name should not have any number or symbol"  ;
            return false;
        }
        return name.value;
    }
    function checkEmail(){
        const email = document.querySelector("#email");
        const err_email = document.querySelector(".error_email");
        err_email.innerHTML = "";
        const regExp_email = /^[a-zA-Z][a-z0-9A-Z\.]*@[a-zA-Z]+\.(com|co|in)$/;
        if(!email.value){
            err_email.innerHTML = "* Email is required";
            return false;
        }
        else if(!regExp_email.test(email.value)){
            err_email.innerHTML = "* Email Format is Incorrect";    
            return false;  
        }
        return email.value;
    }
    
    function checkPassword(){
        const password = document.querySelector("#password");
        const err_password = document.querySelector(".error_password");
        err_password.innerHTML = "";
        const regExp_password_upper = /[A-Z]/
        const regExp_password_lower = /[a-z]/
        const regExp_password_special = /[^A-Za-z0-9]/
    
        if(!password.value){
            err_password.innerHTML = "* Password is required";
            return false;
        }
        else if(password.value.length <8){
            err_password.innerHTML = "* Password length should be grater than or equal to 8";
            return false;
        }
        else if(!password.value.match(regExp_password_lower)){
            err_password.innerHTML = "* Password should have atleast one lower letter";
            return false;
        }
        else if(!password.value.match(regExp_password_upper)){
            err_password.innerHTML = "* Password should have atleast one upper letter";
            return false;
        }
        else if(!password.value.match(regExp_password_special)){
            err_password.innerHTML = "* Password should have atleast one special character";
            return false;
        }
        return password.value;
    }
    
    function checkPhone(){
        const phone = document.querySelector("#phone");
        const err_phone = document.querySelector(".error_phone");
        err_phone.innerHTML = "";
        const regExp_phone = /^[6-9][0-9]{9}$/
        if(!phone.value){
            return 'ani';
        }
        else if(phone.value.length !== 10){
            err_phone.innerHTML = "* Phone number should be of 10 digits";
            return false;
        }
        else if(!regExp_phone.test(phone.value)){
            err_phone.innerHTML = "* Invalid phone number";
            return false;
        }
        return phone.value;
    
    }
    
}

