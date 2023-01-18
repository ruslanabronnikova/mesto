const popup = document.querySelector('.popup');
const popupcontainer = document.querySelector('.popup__container');
const popupopen = document.querySelector('.profile__button_edit');
const popupbody = document.querySelector('.popup__body');
const inputname = document.querySelector('.popup__name');
const inputdescription = document.querySelector('.popup__description');
const popupsubmit = document.querySelector('.popup__button-save')
const popupclose = document.querySelector('.popup__button-close');
const nameprofile = document.querySelector('.profile__title');
const descritpionprofile = document.querySelector('.profile__subtitle');


popupopen.addEventListener('click', function(){
  popup.classList.add('active');
  inputname.value = nameprofile.textContent;
  inputdescription.value = descritpionprofile.textContent;
})

popupclose.addEventListener('click', function(){
  popup.classList.remove('active');
})

popupcontainer.addEventListener('submit', function addName (evt){
  evt.preventDefault();
  nameprofile.textContent = '${inputname.value}';
  descritpionprofile.textContent = '${inputdescription.value}';
  popupclose();
})










