
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

   
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

function verifys()
{
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if(email == "likissit@gmail.com" && password == "12345678"){
        window.location.assign("mainpage.html")
    }
    else{
        alert("Invalid username")
    }
    

    
}