import { Dropdown } from './Dropdown.js'

class DropdownWithAlert extends Dropdown {
  constructor(dropdownSelector) {
    super(dropdownSelector)
  }

  _optionClick(option) {
    super._optionClick(option)
    const optionText = option.querySelector('.header__option-text').textContent
    alert(optionText)
  }
}

export { DropdownWithAlert }
