import { Dropdown } from './Dropdown.js'

class DropdownWithAlert extends Dropdown {
  constructor(dropdownSelector) {
    super(dropdownSelector)
  }

  selectInitialValue() {
    this._selectButtonTextElement.textContent = this._optionElements[0].textContent
  }

  _optionClick(option) {
    super._optionClick(option)
    const optionText = option.querySelector('.header__option-text').textContent
    alert(optionText)
  }
}

export { DropdownWithAlert }
