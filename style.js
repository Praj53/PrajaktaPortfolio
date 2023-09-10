
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
//  ScrollReveal
ScrollReveal({
    // reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 100
});
ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img,.pimg', { origin: 'left' });
ScrollReveal().reveal('.pimgs,.home-content p,.about-content', { origin: 'right' });


const name = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('msg');
const submit = document.getElementsByClassName('form-contact')[0];

function SendMail()
{
    
     var name =document.getElementById("name").value;
    //  var phn =document.getElementById("phn").value;
     var body =document.getElementById("msg").value;
     window.location.href="mailto:prajaktaghanwat25@gmail.com?body=\n"+body;
    

}

