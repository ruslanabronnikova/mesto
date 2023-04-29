import './index.css';
//Импорты констант проекта
import {
  popupFormProfile,
  popupButtonOpenProfile,
  element,
  config,
  popupOpenCardButton,
  popupFormCard,
  popupButtonOpenEditAvatar,
  popupFormEditAvatar
} from '../utils/constants.js'

//Импорты классов проекта
import Api from '../components/Api.js'
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js'

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithDelete from '../components/PopupWithDelete';
import UserInfo from '../components/UserInfo.js';

const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-64/',
  headers: {
    authorization: '72ff067e-abfa-44ed-80cf-18e7baf90e31',
    'Content-Type': 'application/json',
  }
})

let userId;

Promise.all([api.getInitialCards(), api.getInfoUsers()])
  .then(([initialCards, data]) => {
    userId = data._id;
    userInfo.setUserInfo(data.name, data.about);
    userInfo.setUserAvatar(data.avatar);
    cardList.rendererItems(initialCards, userId);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })

const userInfo = new UserInfo ({
  nameusSelector: '.profile__title',
  aboutusSelector: '.profile__subtitle',
  avatarusSelector: '.profile__avatar'
})

// сабмит формы редактирования профиля
const handleFormSubmitProfile = (data) => {
  popupUserProfile.setButtonText('Сoхранение...')
  api.editProfileUsers(data)
  .then((data) => {
    userInfo.setUserInfo(data.name, data.about);
    popupUserProfile.close()
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })
  .finally((popupUserProfile.setButtonText('Сохранить')))
}

// сабмит формы добавления новой карточки
const handleFormSubmitCreateCard = (data) => {
  popupCreateCards.setButtonText('Сoхранение...')
  api.addNewCards(data)
  .then((data) => {
    cardList.prependItem(createCard(data, userId));
    popupCreateCards.close()
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })
  .finally((popupCreateCards.setButtonText('Сохранить')))
}

// сабмит формы открытия попапа с изображением карточки
const handleCardClick = ({name, link}) => {
  popupOpenImageCard.open({
    name,
    link
  });
}

// сабмит формы изменения Аватара пользователя
const handleFormNewAvatar = (data) => {
  popupNewAvatar.setButtonText('Сoхранение...')
  api.editAvatarProfile(data)
  .then(() => {
    userInfo.setUserAvatar(data.avatar)
    popupNewAvatar.close()
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })
  .finally((popupNewAvatar.setButtonText('Сохранить')))
}

const popupUserProfile = new PopupWithForm (
 '.popup_mesto_profile', handleFormSubmitProfile
);

popupUserProfile.setEventListeners();

const popupCreateCards = new PopupWithForm (
 '.popup_mesto_card', handleFormSubmitCreateCard
);

popupCreateCards.setEventListeners();

const popupOpenImageCard = new PopupWithImage (
  '.popup_mesto_image', handleCardClick
);

popupOpenImageCard.setEventListeners();

const popupSureDeleteCard = new PopupWithDelete('.popup_mesto_sure');

popupSureDeleteCard.setEventListeners();

const popupNewAvatar = new PopupWithForm(
  '.popup_mesto_avatar', handleFormNewAvatar
);

popupNewAvatar.setEventListeners()

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

const popupNewAvatarValidation = new FormValidator(config, popupFormEditAvatar)
popupNewAvatarValidation.enableValidation();

popupOpenCardButton.addEventListener('click', function () {
  popupCreateCardValidation.resetValidation();
  popupCreateCards.open()
});

// событие на открытие попапа редактирования аватара
popupButtonOpenEditAvatar.addEventListener('click', function () {
  popupNewAvatarValidation.resetValidation();
  popupNewAvatar.open()
});

const cardList = new Section(
  {
    renderer: (item, usersId) => {
      cardList.appendItem(createCard(item, usersId));
    },
  },
  element
)

// функция создания карточек
const createCard = (data, user) => {
  const cards = new Card({
    data: data,
    templateSelector: '.template-element',
    userId: user,
    handleCardClick,
    handleDeleteClick: () => {
      const delCard = () => {
        api.deleteCard(cards.cardId)
          .then(() => {
            cards.deleteCard()
            popupSureDeleteCard.close()
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          })
      }
      popupSureDeleteCard.open()
      popupSureDeleteCard.setCallbackDelete(delCard);
    },
    handleLikeClick: () => {
      api.putLikeCard(cards.cardId)
      .then((like) => {
        // console.log('Лайк', like)
        cards.likeOnCard(like.likes)})
      .catch((err) => console.log(err));
    },
    hahdleDeleteLikeClick: () => {
      api.deleteLikeCard(cards.cardId)
      .then((like) => cards.likeOnCard(like.likes))
      .catch((err) => console.log(err));
    }
  })

  return cards.generateCard();
}
