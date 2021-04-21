

var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.callout');
var closeBtn=document.querySelector('.closebtn');



modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});

closeBtn.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
});