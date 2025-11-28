let play  = document.querySelector('.play');
let h2 = document.querySelectorAll('h2')

let count = 0;

play.addEventListener('click', ()=> {

   count++;
   
   h2.innerHTML = count;

})