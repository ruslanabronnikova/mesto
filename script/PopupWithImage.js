import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupPicture = this._popup.querySelector('.popup__picture');
    this._popupPictureTitle = this._popup.querySelector('.popup__picture-title');
  }

  open ({name, link}) {
    this._popupPicture.src = link;
    this._popupPictureTitle.textContent = name;
    this._popupPictureTitle.alt = name;

    super.open();
  }
}
