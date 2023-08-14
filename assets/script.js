const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/***Appel des elements html***/

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');


/***Mise en place d'un compteur pour les images et dots***/

let currentSlideIndex = 0;


/***Les écouteurs d'evenement pour le clic sur les fleches***/

arrowLeft.addEventListener('click', () => {
	console.log("Tu as cliquer sur la fleche gauche");
	currentSlideIndex = (currentSlideIndex - 1);
	updateSlide()
	updateDots();
});

arrowRight.addEventListener('click', () => {
	console.log("Tu as cliquer sur la fleche droite");
	currentSlideIndex = (currentSlideIndex + 1);
	updateSlide()
	updateDots();
});


/***Fonction pour les dots et les images ***/

function updateDots() {
	dotsContainer.innerHTML = '';

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (i === currentSlideIndex) {
			dot.classList.add('dot_selected');
		}
		dotsContainer.appendChild(dot);
	}
}

function updateSlide() {
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	tagLine.innerHTML = slides[currentSlideIndex].tagLine;
}


/***Création des dots***/

updateDots();