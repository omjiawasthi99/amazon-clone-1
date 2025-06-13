function login(){



const email = document.getElementById('email').value;
  
if(email==='a@gmail.com'){
  alert('✅ login successful')
    window.location.href="index.html";
    islogin=true;
}
else{
  alert("invalid");
  email='';
  
}
}
