const popupProfile = document.querySelector('.popup_mesto_profile');
const popupFormProfile = document.querySelector('.popup__container_mesto_profile');
const popupOpen = document.querySelector('.profile__button_act_edit');
const popupClose = document.querySelector('.popup__button_act_close')
const popupSave = document.querySelector('.popup__button_act_save')
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_name_value');
const inputDescription = document.querySelector('.popup__input_career_value');

const closeButtons = document.querySelectorAll('.popup__button_act_close');

function openPopup(popup) {
  popup.classList.add('popup_opene');
}

function closePopup(popup) {
  popup.classList.remove('popup_opene');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup(popupProfile);
}

popupOpen.addEventListener('click', function(){
  openPopup(popupProfile);
});
popupClose.addEventListener('click', function(){
  closePopup(popupProfile)
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
});
popupFormProfile.addEventListener('submit', handleFormSubmit);

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

const template = document.querySelector('#template-element').content.querySelector('.element')
const elements = document.querySelector('.elements');
const popupCard = document.querySelector('.popup_mesto_card');
const popupOpenCard = document.querySelector('.profile__button_act_add');
const inputTitle = document.querySelector('.popup__input_title_value');
const inputLink = document.querySelector('.popup__input_link_value');
const popupCloseCard = document.querySelector('.popup__button_card_close');
const popupCreate = document.querySelector('.popup__button_card_save');
const popupFormCard = document.querySelector('.popup__container_mesto_card');

popupCloseCard.addEventListener('click', function(){
  closePopup(popupCard);
  inputTitle.value = "";
  inputLink.value = "";
})

popupOpenCard.addEventListener('click', function(){
  openPopup(popupCard)
});


function cardFormSumit(evt) {
  evt.preventDefault();
  const name = inputTitle.value;
  const link = inputLink.value;

  const card = createCards({name: name, link: link});

  elements.prepend(card);
  closePopup(popupCard);
  inputTitle.value = "";
  inputLink.value = "";
}

popupFormCard.addEventListener('submit', cardFormSumit);

function renderCards() {
  const cards = initialCards.map((item) => {
    return createCards(item);
  });

  elements.append(...cards);
}

renderCards();

const popupImage = document.querySelector('.popup_mesto_image');
const popupImageOpen = document.querySelectorAll('.element__image');
const popupTitle = document.querySelectorAll('.element__title');
const popupPicture = document.querySelector('.popup__picture');
const popupPictureTitle = document.querySelector('.popup__picture-title');
const popupImageClose = document.querySelector('.popup__button_img_close')

function createCards(item){

  const card = template.cloneNode(true);
  const cardTitle = card.querySelector('.element__title')
  cardTitle.textContent = item.name;
  const cardImage = card.querySelector('.element__image')
  cardImage.src = item.link;
  cardImage.alt = item.name;
  card.querySelector('.element__buttondel').addEventListener('click', () =>{
    card.remove();
  });
  card.querySelector('.element__buttonlike').addEventListener('click', (evt) =>{
    evt.target.classList.toggle('element__buttonlike_active')
    console.log(true);
  });

  cardImage.addEventListener('click', function(){
    popupImage.classList.add('popup_opene');
    popupPicture.src = item.link;
    popupPictureTitle.textContent = item.name;
    popupPicture.alt = item.name;
  })

  return card;
};

popupImageClose.addEventListener('click', function(){
  closePopup(popupImage);
})
