/***Tableaux des images et des texte sur l'image***/

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

const arrows = document.querySelectorAll('.arrow');
const dotsContainer = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');


/***Mise en place d'un compteur pour les images et dots***/

let currentSlideIndex = 0;


/***L'écouteur d'evenement pour le clic sur les fleches***/

arrows.forEach((arrow) => {
	arrow.addEventListener('click', (event) => {
		const isArrowLeft = event.target.dataset.side === 'left';

		if (isArrowLeft) {
			console.log("Tu as cliqué sur la flèche gauche");
			currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
		} else {
			console.log("Tu as cliqué sur la flèche droite");
			currentSlideIndex = (currentSlideIndex + 1) % slides.length;
		}
		
		updateSlide();
		updateDots();
	})
})


/***Fonction pour les dots et les images ***/

function updateDots() {
	const dots = document.querySelectorAll(".dot")
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	dots[currentSlideIndex].classList.add("dot_selected")
}

function updateSlide() {
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	tagLine.innerHTML = slides[currentSlideIndex].tagLine;
}


/***Création des premiers dots***/

function createDots() {
	const fragment = document.createDocumentFragment()
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (i === currentSlideIndex) {
			dot.classList.add('dot_selected');
		}
		fragment.appendChild(dot);
	}
	dotsContainer.appendChild(fragment)
}

createDots();