import { Dropdown } from './Dropdown.js'

class DropdownTitleChanger extends Dropdown {
  constructor(dropdownSelector, pageTitleSelector) {
    super(dropdownSelector)
    this._pageTitleElement = document.querySelector(pageTitleSelector)
  }

  _optionClick(option) {
    super._optionClick(option)
    this._pageTitleElement.textContent = `Заголовок ${option.getAttribute('data-value')}`
  }
}

export { DropdownTitleChanger }
