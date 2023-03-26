const popupElement = document.querySelector('.popup_mesto_image');
const popupPicture = document.querySelector('.popup__picture');
const popupPictureTitle = document.querySelector('.popup__picture-title');
const popupImageClose = document.querySelector('.popup__button_img_close');

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  //метод создание карточек
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }

  //метод открытия попапа с изображением карточки
  _handleOpenPopup() {
    popupPicture.src = this._link;
    popupPictureTitle.textContent = this._name;
    popupPicture.alt = this._name;
    popupElement.classList.add('popup_opene');
  }

  //метод закрытия попапа с изображением карточки
  _handleCLosePopup() {
    popupPicture.src = '';
    popupElement.classList.remove('popup_opene');
  }

  //метод обработчиков событий
  _setEventListener() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupImageClose.addEventListener('click', () => {
      this._handleCLosePopup();
    });

    this._element.querySelector('.element__buttondel').addEventListener('click', () => {
      this._element.remove();
    });

    this._element.querySelector('.element__buttonlike').addEventListener('click', () => {
      this._element.querySelector('.element__buttonlike').classList.toggle('element__buttonlike_active')
    });
  };
};


