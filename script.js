let btnOpen=document.querySelector('button');
let input=document.querySelector('input');
btnOpen.addEventListener('click',()=> {
    window.open("https://api.whatsapp.com/send/?phone="+input.value+"&text&app_absent=0",'_blank');
})