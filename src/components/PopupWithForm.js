import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit ) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__container');
    this._popupButtonSubmit = this._popupForm.querySelector('.popup__button-submit');
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
  }

  setButtonText(text) {
    this._popupButtonSubmit.textContent = text;
  }

  _getInputValues() {
    const data = {};
    this._inputList.forEach((input) => {
      data[input.name] = input.value;
    });

    return data;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
      input.value = data[input.name];
    });
  }

  close () {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners () {
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues())
      this.close()
    })
    super.setEventListeners();
  }
}
