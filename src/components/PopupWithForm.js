import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit ) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._popupForms = this._popup.querySelector('.popup__container');
    this._popupButtonSubmit = this._popupForms.querySelector('.popup__button-submit');
    this._inputList = this._popupForms.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const data = {};
    this._inputList.forEach((input) => {
      data[input.name] = input.value;
    });

    return data;
  }

  close () {
    this._popupForms.reset();
    super.close();
  }

  setEventListeners () {
    this._popupForms.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues())
      this.close()
    })
    super.setEventListeners();
  }
}
