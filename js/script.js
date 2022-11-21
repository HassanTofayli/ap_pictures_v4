let darkModeToggle=document.getElementById('dark-mode');
darkModeToggle.addEventListener('click',function(){
    let bod=document.body;
    bod.classList.toggle('dark');
})
let burgerMenu=document.getElementById('burger');
let drpDwnMenu=document.getElementById('menu');

burgerMenu.addEventListener('click',function(){
    drpDwnMenu.classList.toggle('max-md:invisible');
})