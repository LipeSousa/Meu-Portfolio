window.sr = ScrollReveal({ origin: 'right',
distance: '70px', reset: true });

sr.reveal('.text-one', { duration: 2000 });
sr.reveal('.text-three-visibility', { duration: 4000 });
sr.reveal('.nav-bar', { duration: 2000 });
sr.reveal('.animation', { duration: 1000 });
sr.reveal('.about-container', { duration: 4000 });
sr.reveal('.txt-two', { duration: 3000 });
sr.reveal('.one', { duration: 4000 });
sr.reveal('.three', { duration: 2000 });
sr.reveal('.five', { duration: 1000 });

const srLeft = ScrollReveal({ origin: 'left', 
duration: 2000, reset: true });

srLeft.reveal('.social-media');
srLeft.reveal('.text-two', { duration: 3000 });
srLeft.reveal('.logo', { duration: 1000 });
srLeft.reveal('.conctact-container', { duration: 5000 });
srLeft.reveal('.txt-one', { duration: 4000 });
srLeft.reveal('.txt-three', { duration: 3000 });
srLeft.reveal('.two', { duration: 3000 });
srLeft.reveal('.four', { duration: 1000 });
srLeft.reveal('.a-hrefs', { duration: 1000 });

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 1000}px)`;
}

setInterval(carrossel, 1800);