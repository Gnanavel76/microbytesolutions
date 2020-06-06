const header = document.querySelector('#header1');
const headercontainer = document.querySelector('.headersection');
const nav = document.querySelectorAll('nav ul li a');
const toppos = header.offsetTop;
const burger = document.querySelector('.toggle_icon');
const navtab = document.querySelector('nav');
const loader = document.getElementById('loader');
const msg = document.getElementById('msg');
const msgdiv = document.querySelector('.msgdiv');
let d = new Date().getHours();
if(msg!==null){
    showMsg();
}
function showMsg(){
    if(d>=5 && d<12){
        msg.innerHTML = 'Good Morning'
    }
    else if(d>=12 && d<17){
        msg.innerHTML = 'Good Afternoon'
    }
    if(d>=17 || d<5){
        msg.innerHTML = 'Good Evening'
    }
    setTimeout(hide,3000)
    function hide(){
        msgdiv.style.left= '-100%';
    }
}
nav.forEach(function(link){
    let currentLocation = location.href;
    link.onclick = function(){
        let active = document.querySelector('nav ul li a.active');
        active.classList.remove('active');
        this.className = 'active'
    }
    for(i=0;i<nav.length;i++){
        if(nav[i].href === currentLocation || nav[i].href==='javascript:void(0)'){
            nav[i].className = 'active';
        }
        else{
            nav[i].className = '';
        }
    }
});
window.addEventListener('load', (event) => {
    loader.style.display =  'none';
});
window.addEventListener('scroll',function(){
    if(window.scrollY >= toppos){
        header.classList.add('fixednav');
        headercontainer.style.paddingTop = header.offsetHeight+'px';
    }
    else{
        header.classList.remove('fixednav');
        headercontainer.style.paddingTop = '0px';
    }
    nav.forEach(function(link){
        let id = link.getAttribute('href');
        let active = document.querySelector('nav ul li a.active');
        if(id!=='blog.html'){
            if(window.scrollY >= document.querySelector(id).offsetTop-100){
                if(active!==null){
                    active.classList.remove('active');
                };
                link.className = 'active';
            }
        }
    })
});
burger.addEventListener('click',function(){
    navtab.classList.toggle('toggle_nav');
    burger.classList.toggle('toggle_icon1');
    nav.forEach(function(link){
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = 'navlink 0.3s linear 0.5s forwards';
        }
    })
})