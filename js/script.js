let subMobile = document.querySelector('.sub_mobile');

document.querySelector('.burger img').addEventListener('click', () => {
    if (subMobile.style.display === "none" || subMobile.style.display === "") {
        subMobile.style.display = "block";
    } else {
        subMobile.style.display = "none";
    };
});



