const sliderBox = document.querySelector('.slider__box');
const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');
const allSections = document.querySelectorAll('.section');

const sliderBoxWidth = 25;
const sliderSpeed = 3000;

let index = 0;

const handleSlider = () => {
	index++;
};

const changeSection = () => {
	if (index > allSections.length - 1) {
		index = 0;
	} else if (index < 0) {
        index = allSections.length - 1
	}

    sliderBox.style.transform = `translateX(${-index * sliderBoxWidth}%)`;
};

const handleRightArrow = () => {
    index++;
    changeSection();
}

const handleLeftArrow = () => {
    index--;
    changeSection();
}

btnLeft.addEventListener('click', handleLeftArrow)
btnRight.addEventListener('click', handleRightArrow)