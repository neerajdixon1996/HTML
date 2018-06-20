function save() 
{
var name = document.getElementById('uname').value;
localStorage.setItem('Username',name);
document.getElementById("Username").innerHTML= localStorage.getItem('Username',name);

var pass = document.getElementById('passid').value;
localStorage.setItem('Password',pass);
document.getElementById("Password").innerHTML= localStorage.getItem('Password',pass);


var date = document.getElementById('dateid').value;
localStorage.setItem('Date',date);
document.getElementById("Date").innerHTML=localStorage.getItem('Date',date);


var time = document.getElementById('timeid').value;
localStorage.setItem('Time',time);
document.getElementById("Time").innerHTML= localStorage.getItem('Time',time);

var number = document.getElementById('numberid').value;
localStorage.setItem('Number',number);
document.getElementById("Number").innerHTML= localStorage.getItem('Number',number);
}
