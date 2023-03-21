const sliderBox = document.querySelector('.slider__box');
const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');
const allSections = document.querySelectorAll('.section');
const gear = document.querySelectorAll('.deco-gear')

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

const rotateGear = () => {
    let deg = 0;

    setInterval(() => {
        if(deg == 360){
            deg = 0;
        }
        gear.forEach(item => {
            item.style.transform = `translate(-50%) rotateZ(${deg+=0.5}deg)`
        })
        // gear.style.transform = `translate(-50%) rotateZ(${deg+=0.5}deg)`
    }, 30)
}

btnLeft.addEventListener('click', handleLeftArrow)
btnRight.addEventListener('click', handleRightArrow)
window.addEventListener('DOMContentLoaded', rotateGear)