const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__container_mesto_profile');
const popupOpen = document.querySelector('.profile__button_act_edit');
const popupClose = document.getElementById('close')
const popupSave = document.getElementById('save')
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_name_value');
const inputDescription = document.querySelector('.popup__input_career_value');

function openPopup(popup) {
  popup.classList.add('popup_opene');
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup_opene');
  inputTitle.value = "";
  inputLink.value = "";
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup(popup);
}

popupOpen.addEventListener('click', function(){
  openPopup(popup);
});
popupClose.addEventListener('click', function(){
  closePopup(popup)
});
popupForm.addEventListener('submit', handleFormSubmit);

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
const popupCloseCard = document.getElementById('closecard');
const popupCreate = document.getElementById('create');

function openPopupForCard(){
  popupCard.classList.add('popup_opene');
};

popupCloseCard.addEventListener('click', function(){
  closePopup(popupCard);
  inputTitle.value = "";
  inputLink.value = "";
})

popupOpenCard.addEventListener('click', function(){
  openPopup(popupCard)
});


popupCreate.addEventListener('click', (evt) =>{
  evt.preventDefault();
  const name = inputTitle.value;
  const link = inputLink.value;

  const card = createCards({name: name, link: link});

  elements.prepend(card);
  closePopup(popupCard);
})

function renderCards() {
  const cards = initialCards.map((item) => {
    return createCards(item);
  });

  elements.append(...cards);
}

renderCards();

function createCards(item){
  const card = template.cloneNode(true);
  card.querySelector('.element__title').textContent = item.name;
  card.querySelector('.element__image').src = item.link;
  card.querySelector('.element__buttondel').addEventListener('click', () =>{
    card.remove();
  });
  card.querySelector('.element__buttonlike').addEventListener('click', (evt) =>{
    evt.target.classList.toggle('element__buttonlike_active')
    console.log(true);
  });
  return card;
};

const popupImage = document.querySelector('.popup_mesto_image');
const popupImageOpen = document.querySelectorAll('.element__image');
const popupTitle = document.querySelectorAll('.element__title');
const popupPicture = document.querySelector('.popup__picture');
const popupPictureTitle = document.querySelector('.popup__picture-title');
const popupImageClose = document.getElementById('closeimage')

function openPictures() {
  for (let i = 0; i< popupImageOpen.length; i++) {
    popupImageOpen[i].addEventListener('click', function(){
      popupImage.classList.add('popup_opene');
      popupPicture.src = popupImageOpen[i].getAttribute('src');
      popupPictureTitle.textContent = popupTitle[i].textContent
    })
  }
}

openPictures();

popupImageClose.addEventListener('click', function(){
  closePopup(popupImage);
})



