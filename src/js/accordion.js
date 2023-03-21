const accordion = document.querySelector('.mywork__accordion');
const accordionBtns = document.querySelectorAll('.mywork__btn');

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.toggle('active');
	} else {
		closeAccordionItems();
		this.nextElementSibling.classList.toggle('active');
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.mywork__info');
	allActiveItems.forEach((item) => item.classList.remove('active'));
};

const clickOutsideAccordion = (e) => {
	if (
		e.target.classList.contains('mywork__btn') ||
		e.target.classList.contains('mywork__info') ||
		e.target.classList.contains('mywork__info-text') ||
		e.target.classList.contains('mywork__img') ||
		e.target.classList.contains('mywork__link')
	)
		return;

	closeAccordionItems();
};

accordionBtns.forEach((btn) =>
	btn.addEventListener('click', openAccordionItems)
);

window.addEventListener('click', clickOutsideAccordion);
