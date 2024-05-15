class Dropdown {
  constructor(dropdownSelector) {
    this._dropdownElement = document.querySelector(dropdownSelector);
    this._selectBtnElement = this._dropdownElement.querySelector('.header__button');
    this._selectBtnIconElement = this._selectBtnElement.querySelector('.header__button-icon');
    this._selectButtonTextElement = this._selectBtnElement.querySelector('.header__text');
    this._optionsContainerElement = this._dropdownElement.querySelector('.header__options-container');
    this._optionElements = this._optionsContainerElement.querySelectorAll('.header__option');
  }

  toggle() {
    this._optionsContainerElement.classList.toggle('header__options-container_is-opened');
    this._selectBtnIconElement.classList.toggle('header__button-icon_is-rotated');
  }

  updateSelectButtonText(option) {
    let selectedOption = option.querySelector('.header__option-text').textContent;
    this._selectButtonTextElement.textContent = selectedOption;
    if (this._selectButtonTextElement.classList.contains('.header__text_is-active')) {
      return
    } else {
      this._selectButtonTextElement.classList.add('header__text_is-active')
    }
  }

  _optionClick(option) {
    this.updateSelectButtonText(option)
    this.toggle()
  }

  setEventListeners() {
    this._selectBtnElement.addEventListener('click', this.toggle.bind(this))

    this._optionElements.forEach(option => {
      option.addEventListener('click', () => {
        this._optionClick(option)
      })
    })
  }
}

export { Dropdown }
