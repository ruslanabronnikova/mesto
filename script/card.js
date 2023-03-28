export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }

  //метод удаления карточки
  _deleteCard() {
    this._element.remove();
  }

  //метод нажатия на лайк в карточке
  _toggleLike() {
    this._likeButton.classList.toggle('element__buttonlike_active');
  }

  //метод обработчиков событий
  _setEventListener() {
    this._likeButton = this._element.querySelector('.element__buttonlike');
    this._deleteButton = this._element.querySelector('.element__buttondel');
    this._image = this._element.querySelector('.element__image');

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });

    this._likeButton.addEventListener('click', () => {
      this._toggleLike();
    });
  };
};


