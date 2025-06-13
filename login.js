function login(){



const email = document.getElementById('email').value;
  
if(email==='a@gmail.com'){
  alert('✅ login successful')
    window.location.href="first.html";
    islogin=true;
}
else{
  alert("invalid");
  email='';
  
}
}
