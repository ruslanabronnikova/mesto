import './index.css';
//Импорты констант проекта
import {
  popupFormProfile,
  popupButtonOpenProfile,
  inputName,
  inputDescription,
  element,
  config,
  initialCards,
  popupOpenCardButton,
  popupFormCard
} from '../utils/constants.js'

//Импорты классов проекта
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js'

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const userInfo = new UserInfo ({
  nameusSelector: '.profile__title',
  aboutusSelector: '.profile__subtitle'
})

const handleFormSubmitProfile = (data) => {
  userInfo.setUserInfo(data.nameuser, data.aboutuser);

  console.log(data);
}

const handleFormSubmitCreateCard = (data) => {
  cardList.prependItem(createCard({
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


popupButtonOpenProfile.addEventListener('click', () => {
  const usInfo = userInfo.getUserInfo();

  popupUserProfile.setInputValues({
    nameuser: usInfo.nameUser,
    aboutuser: usInfo.aboutUser
  });

  popupUserProfile.open();
});

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
      cardList.appendItem(createCard(item));
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
