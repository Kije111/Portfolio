
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const projectImages = document.querySelectorAll('.project-item img');
const modal = document.createElement('div');
modal.classList.add('modal');
modal.style.display = 'none';
document.body.appendChild(modal);

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        const modalImg = document.createElement('img');
        modalImg.src = image.src;
        modal.innerHTML = ''; 
        modal.appendChild(modalImg);
        modal.style.display = 'block';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

function checkScrollAnimation() {
  elementsToAnimate.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('animated');
    }
  });
}

window.addEventListener('scroll', checkScrollAnimation);
checkScrollAnimation()