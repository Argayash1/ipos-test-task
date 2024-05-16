import { DropdownTitleChanger } from './DropdownTitleChanger.js';
import { DropdownWithAlert } from './DropdownWithAlert.js';

const titleText = document.querySelector('.main-section__title').textContent

const dropdownWithTitleChange = new DropdownTitleChanger('.header__dropdown_type_change-title', '.main-section__title', titleText)
dropdownWithTitleChange.setEventListeners()

const dropdownWithAlert = new DropdownWithAlert('.header__dropdown_type_alert')
dropdownWithAlert.setEventListeners()
dropdownWithAlert.selectInitialValue()
