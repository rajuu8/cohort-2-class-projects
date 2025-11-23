let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');

let grow = 0

btn.addEventListener('click' , ()=> {
    
    btn.style.pointerEvents = 'none'
    let num = 49 +Math.floor(Math.random()*100)
    let i = setInterval(() => {
        grow++;
        h2.innerHTML = grow + '%'
        inner.style.width =  grow + '%'
    }, num);

    setTimeout (()=> {
     
        clearInterval(i)
        btn.style.opacity = 0.5
        btn.innerHTML = ' Downloaded'
    }, num * 100)
    
})