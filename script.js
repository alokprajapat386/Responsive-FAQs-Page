
const buttons =document.querySelectorAll('.btn');
const btnurl={}
buttons.forEach(button=>{
    
    button.addEventListener('click', function(){
        const faq=button.closest('.faq');
        faq.classList.toggle('show');
        const img=button.querySelector('img');
        img.src=faq.classList.contains('show')?
         'assets/images/icon-minus.svg':
         'assets/images/icon-plus.svg';
    });
})