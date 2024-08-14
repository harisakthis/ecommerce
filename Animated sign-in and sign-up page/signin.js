const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');


signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    signIn.style.opacity = 0;
    signUp.style.opacity = 1;
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    signUp.style.opacity = 0;
    signIn.style.opacity = 1;
});

//signin

function SignIn() {
    var name = document.getElementById("text").value;
    var password = document.getElementById("password").value;
    const checkbox=document.getElementById('checkbox');

    // Add your validation logic here, e.g., check if fields are not empty

      if(name==''||password==''){
        alert('Enter each details correctly');
        return false;
    }
    else if(!checkbox.checked){
        alert('Remember me is not checked');
        return false;
    }
    else if(name<3){
        alert("Username must be long");
        return false;
    }
    else if(password<3){
        alert("Username must be long");
        return false;
    }
   
     
  }

  //signup

  
function SignUp() {
    var name = document.getElementById("txt").value;
    var password = document.getElementById("pass").value;
    var email = document.getElementById("mail").value;
    const checkbox=document.getElementById('box');
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  


    // Add your validation logic here, e.g., check if fields are not empty

      if(name==''||password==''||email==''){
        alert('Enter each details correctly');
        return false;
    }
    else if(!checkbox.checked){
        alert('Remember me is not checked');
        return false;
    }
    else if(name<3){
        alert("Username must be long");
        return false;
    }
    else if(password<5){
        alert("Password must be long");
        return false;
    }
    else if(!email_val.test(email)){
        alert("Invalid email format please enter valid email id");
        return false;
    }
   
     
  }