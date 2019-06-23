let images = document.querySelectorAll(".slider-content > img");
let current = 0;
images[current].style.display = `block`;

function slideImg() {
    setInterval(function () {
        images[current].style.display = `none`;
        current = (current + 1) % images.length;
        images[current].style.display = `block`;
    }, 3000);
}

slideImg();

window.onkeydown = function (e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 37:
            images[current].style.display = `none`;
            current = current === 0 ? (images.length - 1) : current - 1;
            images[current].style.display = `block`;
            break;

        case  39:
            images[current].style.display = `none`;
            current = current + 1 === images.length ? 0 : current + 1;
            images[current].style.display = `block`;
            break;
        default:
            break;
    }
};