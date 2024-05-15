const optionMenuElement = document.querySelector('.header__dropdown');
const selectBtnElement = optionMenuElement.querySelector('.header__button');
const selectBtnIconElement = selectBtnElement.querySelector('.header__button-icon')
const optionElements = optionMenuElement.querySelectorAll('.header__option');
const selectButtonTextElement = optionMenuElement.querySelector('.header__text');
const optionContainerElement = document.querySelector('.header__options-container')
const pageTitleElement = document.querySelector('.main-section__title')

selectBtnElement.addEventListener('click', () => {
  optionContainerElement.classList.toggle('header__options-container_is-opened')
  selectBtnIconElement.classList.toggle('header__button-icon_is-rotated')
})

optionElements.forEach(option => {
  option.addEventListener('click', () => {
    let selectedOption = option.querySelector('.header__option-text').textContent;
    selectButtonTextElement.textContent = selectedOption;
    pageTitleElement.textContent = `Заголовок ${option.getAttribute('data-value')}`
    optionContainerElement.classList.remove('header__options-container_is-opened')
    selectBtnIconElement.classList.remove('header__button-icon_is-rotated')
  })
})
