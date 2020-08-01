const time = document.querySelector('#time'),
greeting = document.querySelector('#greeting'),
name = document.querySelector('#name'),
focus = document.querySelector('#focus');


const showAmPm = true;

function showtime(){
    let today = new Date(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();


    const amPm = hour >=12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(minute)}<span>:</span>${addZero(second)} ${showAmPm? amPm : ''}`
    

  setTimeout(showtime,1000);  
}
function addZero (n){
    return(parseInt(n,10)<10?'0':'') + n;
    }
function setBg (){
    let today  = new Date(),
    hour = today.getHours();
    if(hour < 12){
       document.body.style.backgroundImage ="url('../images/morning.jpg')"
       greeting.textContent = 'Good Morning';
      
    }
    else if(hour < 18){
        document.body.style.backgroundImage ="url('../images/afternoon.jpg')"
       
        greeting.textContent = 'Good Afternoon';
       
    }
    else {
        document.body.style.backgroundImage ="url('../images/evening.jpg')"
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
       
    }
}
function setName(e){
    if(e.type === 'keypress'){
        if(e.keyCode == 13){
         localStorage.setItem('name',e.target.innerText);
         name.blur();
        }
    }
    else {
     localStorage.setItem('name', e.target.innerText);
    }
}
function setFocus(e){
    if(e.type === 'keypress'){
        if(e.keyCode == 13){
         localStorage.setItem('focus',e.target.innerText);
         focus.blur();
        }
    }
    else {
     localStorage.setItem('focus', e.target.innerText);
    }
}




function getName(){
    if(localStorage.getItem('name')===null){
   name.textContent='(Enter Name)';
    }
    else {
        name.textContent = localStorage.getItem('name');
    }
}



function getFocus(){
    if(localStorage.getItem('focus')===null){
   focus.textContent='(My goal for today is...)';
    }
    else {
        focus.textContent = localStorage.getItem('focus');
    }
}
name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);
getFocus();
getName();
setBg()
showtime();

