// константы формы для профайл
export const popupFormProfile = document.querySelector('.popup__container_mesto_profile');
export const popupButtonOpenProfile = document.querySelector('.profile__button_act_edit');
export const inputName = document.querySelector('.popup__input_name_value');
export const inputDescription = document.querySelector('.popup__input_career_value');

export const element = document.querySelector('.elements');

// селектор config элементов форм
export const config = {
  formElement: '.popup__container',
  inputElement: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: '.popup__item-error'
}

//массыв карточек
export const initialCards = [
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
export const popupOpenCardButton = document.querySelector('.profile__button_act_add');
export const popupFormCard = document.querySelector('.popup__container_mesto_card');
