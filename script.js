//  location for login
function navigate_to_login()
{
    window.location="login.html";
}
//  location for sign in
function navigate_to_signin()
{
    window.location="signup.html";
}
// 
// 
function openmenu(){
    var opennav=document.getElementsByClassName('full_ul')[0];
    var demo=opennav.style.display;
    if(demo==='none')
    {
        opennav.style.display='block';
    }
    else{
        opennav.style.display='none';
    }
}