// константы формы для профайл
const popupProfile = document.querySelector('.popup_mesto_profile');
const popupFormProfile = document.querySelector('.popup__container_mesto_profile');
const popupButtonOpenProfile = document.querySelector('.profile__button_act_edit');
const popupButtonClose = document.querySelector('.popup__button_act_close');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_name_value');
const inputDescription = document.querySelector('.popup__input_career_value');

const element = document.querySelector('.elements');

// селектор config элементов форм
const config = {
  formElement: '.popup__container',
  inputElement: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: '.popup__item-error'
}

//массыв карточек
const initialCards = [
  {
    name: 'Атланта',
    link: 'https://images.unsplash.com/photo-1560437324-cbed9eacf52c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'
  },
  {
    name: 'Сочи',
    link: 'https://images.unsplash.com/photo-1549092156-04ee20673b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Нью-Йорк',
    link: 'https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Братск',
    link: 'https://images.unsplash.com/photo-1662220396571-7d1832ec8185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Коста-Брава',
    link: 'https://images.unsplash.com/photo-1567629719056-dc194b1c52dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// константы формы создания карточек
const popupCard = document.querySelector('.popup_mesto_card');
const popupOpenCardButton = document.querySelector('.profile__button_act_add');
const inputTitle = document.querySelector('.popup__input_title_value');
const inputLink = document.querySelector('.popup__input_link_value');
const popupCloseCard = document.querySelector('.popup__button_card_close');
const popupFormCard = document.querySelector('.popup__container_mesto_card');

// константы формы с открытием картинки карточки
const popupElement = document.querySelector('.popup_mesto_image');
const popupPicture = document.querySelector('.popup__picture');
const popupPictureTitle = document.querySelector('.popup__picture-title');
const popupPictureClose = document.querySelector('.popup__button_img_close');


import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

const userInfo = new UserInfo ({
  nameusSelector: '.profile__title',
  aboutusSelector: '.profile__subtitle'
})

const handleFormSubmitProfile = (data) => {
  userInfo.setUserInfo(data.nameuser, data.aboutuser);

  console.log(data);
}

const handleFormSubmitCreateCard = (data) => {
  cardList.setPreItem(createCard({
    name: data.titlecard,
    link: data.linkcard
  }))
  console.log(data)
}

const handleCardClick = ({name, link}) => {
  popupOpenImageCard.open({
    name,
    link
  });
}

const popupUserProfile = new PopupWithForm (
 '.popup_mesto_profile', handleFormSubmitProfile
);

popupUserProfile.setEventListeners();

const popupCreateCards = new PopupWithForm (
 '.popup_mesto_card', handleFormSubmitCreateCard
)

popupCreateCards.setEventListeners();

const popupOpenImageCard = new PopupWithImage (
  '.popup_mesto_image', handleCardClick
)

popupOpenImageCard.setEventListeners();

function openPopupUserProfile({name, about}) {
  inputName.value = name;
  inputDescription.value = about;
}

popupButtonOpenProfile.addEventListener('click', () => {
  const usInfo = userInfo.getUserInfo();

  openPopupUserProfile({
    name: usInfo.nameUser,
    about: usInfo.aboutUser
  })
  popupUserProfile.open();
});

//Импорты классов Card и FormValidator
import Card from './card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js'

const popupProfileValidation = new FormValidator(config, popupFormProfile)
popupProfileValidation.enableValidation();

const popupCreateCardValidation = new FormValidator(config, popupFormCard)
popupCreateCardValidation.enableValidation();

popupOpenCardButton.addEventListener('click', function () {
  popupCreateCardValidation.resetValidation();
  popupCreateCards.open()
});


const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.setApItem(createCard(item));
    },
  },
  element
)

cardList.rendererItems();


// функция создания карточек
function createCard(item) {
  const cards = new Card(item, '#template-element', handleCardClick);
  const cardElement = cards.generateCard();
  return cardElement;
}
