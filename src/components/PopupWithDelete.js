import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__container');
    this._popupButtonSubmit = this._popupForm.querySelector('.popup__button-submit');
  }

  setCallbackDelete(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners () {
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit()
    })
    super.setEventListeners();
  }
}
