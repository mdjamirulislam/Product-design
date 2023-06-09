const bars = document.querySelector('.bars');
bars.addEventListener('click', function (i) {
    i.preventDefault();

    this.querySelector('i').classList.toggle('fa-times')
    const list = document.querySelector('.navigation');

    list.classList.toggle('from');

})

const jami = document.querySelectorAll('.navigation li');

const jamilone = jami[0];
const jamiltwo = jami[1];
const jamilthree = jami[2];


jamilone.addEventListener('click',function(){
    window.location.href = "http://127.0.0.1:5500/index.html"
});

jamiltwo.addEventListener('click',function(){
    window.location.href = "http://127.0.0.1:5500/shop.html"
});

const product_details = document.querySelectorAll('.product_details');
const jahid = product_details[0];
const dd = product_details[3];
const ss = product_details[4];
const aa= product_details[5];

jahid.addEventListener('click',function(){

   
    window.location.href  = 'http://127.0.0.1:5500/hocc.htm'
})


jamilthree.addEventListener('click',function(){


      window.location.href = 'http://127.0.0.1:5501/index.html'
})

dd.addEventListener('click',function(){

    window.location.href = 'http://127.0.0.1:5500/next.html';
})


const emailInput = document.querySelector('.email_input');
const emailBtn = document.querySelector('.email_btn');

emailBtn.addEventListener('click',function(){
          
    if(emailInput.value = ""){

        alert('please insert md jamirul')
    }else{
        alert("thank you..you sign up?????")
    }

 
 
    
      
      
})
