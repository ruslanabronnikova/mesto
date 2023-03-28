// константы формы для профайл
const popupProfile = document.querySelector('.popup_mesto_profile');
const popupFormProfile = document.querySelector('.popup__container_mesto_profile');
const popupButtonOpen = document.querySelector('.profile__button_act_edit');
const popupButtonClose = document.querySelector('.popup__button_act_close');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_name_value');
const inputDescription = document.querySelector('.popup__input_career_value');

const elements = document.querySelector('.elements')

function openPopup(popup) {
  popup.classList.add('popup_opene');
  document.addEventListener('keydown', closePopupKeyESC)
}

function closePopup(popup) {
  popup.classList.remove('popup_opene');
  popup.remove
  document.removeEventListener('keydown', closePopupKeyESC)
}

function closePopupKeyESC(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opene');
    closePopup(openedPopup);
  }
}

// константа для закрытия карточки при нажатии на оверлей
const popupCloseOverlay = document.querySelectorAll('.popup')

popupCloseOverlay.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closePopup(popup)
    }
  })
});

//Импорты классов Card и FormValidator
import Card from './card.js';
import FormValidator from './FormValidator.js';

// селектор config элементов форм
const config = {
  formElement: '.popup__container',
  inputElement: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: '.popup__item-error'
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Функция добавления карточек из массива
function renderCards() {
  const cards = initialCards.map((item) => {
    const card = createCard(item);
    return card;
  });

  elements.append(...cards);
}

renderCards();

// функция создания карточек
function createCard(item) {
  const cards = new Card(item, '#template-element', handleCardClick);
  const cardElement = cards.generateCard();
  return cardElement;
}

// константы формы создания карточек
const popupCard = document.querySelector('.popup_mesto_card');
const popupOpenCard = document.querySelector('.profile__button_act_add');
const inputTitle = document.querySelector('.popup__input_title_value');
const inputLink = document.querySelector('.popup__input_link_value');
const popupCloseCard = document.querySelector('.popup__button_card_close');
const popupFormCard = document.querySelector('.popup__container_mesto_card');

const popupProfileValidation = new FormValidator(config, popupFormProfile)
popupProfileValidation.enableValidation();

const popupCreateCardValidation = new FormValidator(config, popupCard, popupOpenCard)
popupCreateCardValidation.enableValidation();

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup(popupProfile);
}

popupButtonOpen.addEventListener('click', function () {
  openPopup(popupProfile);
  openPopupProfile()
});

function openPopupProfile() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}

popupButtonClose.addEventListener('click', function () {
  closePopup(popupProfile)
});

popupFormProfile.addEventListener('submit', handleFormSubmit);

popupCloseCard.addEventListener('click', function () {
  closePopup(popupCard);
})

popupOpenCard.addEventListener('click', function () {
  openPopup(popupCard)
  popupCreateCardValidation.resetValidation();
  popupFormCard.reset();
});

// константы формы с открытием картинки карточки
const popupElement = document.querySelector('.popup_mesto_image');
const popupPicture = document.querySelector('.popup__picture');
const popupPictureTitle = document.querySelector('.popup__picture-title');
const popupImageClose = document.querySelector('.popup__button_img_close');

function handleCardClick(name, link) {
  popupPicture.src = link;
  popupPictureTitle.textContent = name;
  popupPicture.alt = name;
  openPopup(popupElement, popupImageClose);
}

popupImageClose.addEventListener('click', function () {
  closePopup(popupElement);
})

function cardFormSumit(evt) {
  evt.preventDefault();
  const name = inputTitle.value;
  const link = inputLink.value;

  const card = createCard({ name: name, link: link });

  elements.prepend(card);
  closePopup(popupCard);
  popupFormCard.reset();
}

popupFormCard.addEventListener('submit', cardFormSumit);
