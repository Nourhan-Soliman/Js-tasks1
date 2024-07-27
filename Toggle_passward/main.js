var theInput =document.querySelector(" .passward-box input");
var btn =document.querySelector(" .passward-box button");

btn.onclick= function(){

if(btn.getAttribute('data-text')=="show"){

theInput.setAttribute('type','text');
btn.setAttribute('data-text','hide');
btn.innerHTML="Hide";
}
else{
    theInput.setAttribute('type','password');
    btn.setAttribute('data-text','show');
    btn.innerHTML="Show";
    
}
};
