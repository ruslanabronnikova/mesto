const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__container');
const popupOpen = document.querySelector('.profile__button_act_edit');
const popupClose = document.getElementById('close')
const popupSave = document.getElementById('save')
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_name_value');
const inputDescription = document.querySelector('.popup__input_career_value');

function openPopup() {
  popup.classList.add('popup_opene');
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opene');
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
