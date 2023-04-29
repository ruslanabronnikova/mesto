export default class Card {
  constructor({ data, templateSelector, handleCardClick, handleDeleteClick, userId, handleLikeClick, hahdleDeleteLikeClick }) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._usersId = userId;
    this.cardId = data._id;
    this.dataCard = data;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._hahdleDeleteLikeClick = hahdleDeleteLikeClick;
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

    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._counterLike = this._element.querySelector('.element__counterlike');
    this._counterLike.textContent = this._likes.length;

    if (this._ownerId !== this._usersId) {
      this._deleteButton.remove();
    }

    this.toggleLike();

    return this._element;
  }

  // метод который убирает активный лайк с карточки
  deleteLikeOnCard() {
    this._likeButton.classList.remove('element__buttonlike_active');
  }

  // метод который добавляет активный лайк с карточки
  addLikeOnCard() {
    this._likeButton.classList.add('element__buttonlike_active');
  }

  // метод проверки лайка пользователя
  checkLike() {
    return this._likes.some((like) => like._id === this._usersId)
  }

  // метод добавления лайка на карточку
  likeOnCard(likes) {
    this._likes = likes;
    this.toggleLike()
  }

  toggleLike() {
    this._counterLike.textContent = this._likes.length;
    this.checkLike() ? this.addLikeOnCard() : this.deleteLikeOnCard()
  }

  //метод удаления карточки
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  //метод обработчиков событий
  _setEventListener() {
    this._likeButton = this._element.querySelector('.element__buttonlike');
    this._deleteButton = this._element.querySelector('.element__buttondel');
    this._image = this._element.querySelector('.element__image');

    this._image.addEventListener('click', () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick()
    });

    this._likeButton.addEventListener('click', () => {
      this.checkLike() ? this._hahdleDeleteLikeClick() : this._handleLikeClick()
    })
  };
};


