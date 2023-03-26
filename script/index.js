const popup = document.querySelector('.popup')

const popupProfile = document.querySelector('.popup_mesto_profile');
const popupFormProfile = document.querySelector('.popup__container_mesto_profile');
const popupButtonOpen = document.querySelector('.profile__button_act_edit');
const popupButtonClose = document.querySelector('.popup__button_act_close');
const popupButtonSave = popupFormProfile.querySelector('.popup__button_act_save');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_name_value');
const inputDescription = document.querySelector('.popup__input_career_value');

function openPopup(popup) {
  popup.classList.add('popup_opene');
  document.addEventListener('keydown', closePopupKeyESC)
  console.log('openPopup')
}

function closePopup(popup) {
  popup.classList.remove('popup_opene');
  document.removeEventListener('keydown', closePopupKeyESC)
}

function closePopupKeyESC(evt) {
  console.log('evt', evt)
  if (evt.keyCode === 27) {
    const openedPopup = document.querySelector('.popup_opene');
    closePopup(openedPopup);
  }
}

const popupCloseOverlay = document.querySelectorAll('.popup')

popupCloseOverlay.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closePopup(popup)
    }
  })
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup(popupProfile);
}

popupButtonOpen.addEventListener('click', function () {
  openPopup(popupProfile);
  openPopupProfile()
  popupButtonSave.removeAttribute('disabled')
  popupButtonSave.classList.remove('popup__button-submit_disabled')
});


function openPopupProfile() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}

popupButtonClose.addEventListener('click', function () {
  closePopup(popupProfile)
});

popupFormProfile.addEventListener('submit', handleFormSubmit);

//Импорты классов Card и FormValidator
import Card from './card.js';
import FormValidator from './FormValidator.js';

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

initialCards.forEach((item) => {
  const cards = new Card(item, '#template-element');
  const cardElement = cards.generateCard();

  document.querySelector('.elements').append(cardElement);
});

const popupCard = document.querySelector('.popup_mesto_card');
const popupOpenCard = document.querySelector('.profile__button_act_add');
const inputTitle = document.querySelector('.popup__input_title_value');
const inputLink = document.querySelector('.popup__input_link_value');
const popupCloseCard = document.querySelector('.popup__button_card_close');
const popupCreate = document.querySelector('.popup__button_card_save');
const popupFormCard = document.querySelector('.popup__container_mesto_card');

const popupProfileValidation = new FormValidator(config, popupFormProfile)
popupProfileValidation.enableValidation();

const popupCreateCardValidation = new FormValidator(config, popupCard)
popupCreateCardValidation.enableValidation();


popupCloseCard.addEventListener('click', function () {
  closePopup(popupCard);
  popupFormCard.reset();
  document.removeEventListener('keydown', keyHundler(evt))
})

popupOpenCard.addEventListener('click', function () {
  openPopup(popupCard)
  popupCreate.setAttribute('disabled', 'disabled')
  popupCreate.classList.add('popup__button-submit_disabled')
});


function keyHundler(evt) {
  if (evt.key === 'Enter') {
    cardFormSumit(evt);
  }
}

function cardFormSumit(evt) {
  evt.preventDefault();
  const name = inputTitle.value;
  const link = inputLink.value;

  const cards = new Card({ name: name, link: link }, '#template-element');
  const card = cards.generateCard();

  document.querySelector('.elements').prepend(card);
  closePopup(popupCard);
  popupFormCard.reset();
}

popupFormCard.addEventListener('submit', cardFormSumit);
