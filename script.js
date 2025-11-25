let cursor = document.querySelector('#cursor');
let main = document.querySelector('main');

main.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px'; // x-coordinate in pixels
    cursor.style.top = e.clientY + 'px';  // y-coordinate in pixels
});
