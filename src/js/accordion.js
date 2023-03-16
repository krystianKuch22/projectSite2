const accordion = document.querySelector('.mywork__accordion')
const accordionBtns = document.querySelectorAll('.mywork__btn')

function openAccordionItems() {
    this.nextElementSibling.classList.toggle('active')
}

accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))