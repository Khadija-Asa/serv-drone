let first_img = document.querySelector('.team:first-child');
let last_img = document.querySelector('.team:last-child');
let show_img = false;


document.addEventListener('scroll', event => {
    if (!show_img) {
        if (window.scrollY >= 400 && window.scrollY <= 1000) {
            first_img.style.marginRight = '0';
            last_img.style.marginLeft = '0';
            show_img = true;
        }
    }
})