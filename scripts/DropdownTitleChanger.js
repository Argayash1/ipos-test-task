import { Dropdown } from './Dropdown.js'

class DropdownTitleChanger extends Dropdown {
  constructor(dropdownSelector, pageTitleSelector, titleText) {
    super(dropdownSelector)
    this._pageTitleElement = document.querySelector(pageTitleSelector)
    this._titleText = titleText
  }

  _optionClick(option) {
    super._optionClick(option)
    this._pageTitleElement.textContent = `${this._titleText} ${option.getAttribute('data-value')}`
  }
}

export { DropdownTitleChanger }
