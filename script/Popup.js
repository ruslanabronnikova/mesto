export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
    this._popup = document.querySelector(this._popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
        this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opene');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opene');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleOverlayClose);

    this._popupClose = this._popup.querySelector('.popup__button-close');
    this._popupClose.addEventListener('click', this.close.bind(this));
  }
}
