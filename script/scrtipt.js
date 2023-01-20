const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__body');
const popupOpen = document.querySelector('.profile__button_act_edit');
const popupClose = document.getElementById('close')
const popupSave = document.getElementById('save')
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_name');
const inputDescription = document.querySelector('.popup__input_career');

function openPopup() {
  popup.classList.add('popup__opene');
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}

function closePopup() {
  popup.classList.remove('popup__opene');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup();
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);
