const config = {
  formElement: '.popup__container',
  inputElement: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: '.popup__item-error'
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorClass = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorClass.textContent = errorMessage;
  console.log(errorMessage)
  errorClass.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorClass = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorClass.textContent = '';
  errorClass.classList.remove(config.errorClass);
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement, {submitButtonSelector, inputElement}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputElement));
    const buttonSubmit = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonSubmit);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonSubmit);
      });
    });
}

const toggleButtonState = (inputList, submitButtonSelector) => {
  const formIsValid = inputList.every(({ validity }) => validity.valid);
  if (formIsValid) {
    submitButtonSelector.classList.remove(config.inactiveButtonClass)
    submitButtonSelector.removeAttribute('disabled');
  }else{
    submitButtonSelector.classList.add(config.inactiveButtonClass)
    submitButtonSelector.setAttribute('disabled', 'disabled');
  }
}

function enableValidation (config) {
  const formlist = Array.from(document.querySelectorAll(config.formElement));
  formlist.forEach((formElement) => {
    setEventListeners(formElement, config)
  });
}

enableValidation (config);
