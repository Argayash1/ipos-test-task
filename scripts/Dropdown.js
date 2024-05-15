class Dropdown {
  constructor(dropdownSelector) {
    this._dropdownElement = document.querySelector(dropdownSelector);
  }

  open() {
    this._dropdownElement.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._dropdownElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._dropdownElement.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
    });
  }
}

export { Dropdown }
