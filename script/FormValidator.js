export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  //Показ ошибки инпута
  _showInputError(inputElement, errorMessage) {
    const errorClass = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorClass.textContent = errorMessage;
    errorClass.classList.add(this._config.errorClass);
  }

  //Убираем ошибку инпута
  _hideInputError(inputElement) {
    const errorClass = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorClass.textContent = '';
    errorClass.classList.remove(this._config.errorClass);
  }

  //Проверяем условия для валидности
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //Проверка валидации инпута
  _hasInputValid(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  // Включение и выключение активации кнопки
  _toggleButtonState(inputList, submitButtonSelector) {
    if (!this._hasInputValid(inputList)) {
      submitButtonSelector.classList.remove(this._config.inactiveButtonClass)
      submitButtonSelector.removeAttribute('disabled');
    } else {
      submitButtonSelector.classList.add(this._config.inactiveButtonClass)
      submitButtonSelector.setAttribute('disabled', 'disabled');
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputElement));
    const buttonSubmit = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState(inputList, buttonSubmit);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonSubmit);
      })
    })

    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    })
  }

  enableValidation() {
    const formlist = Array.from(document.querySelectorAll(this._config.formElement));
    formlist.forEach((formElement) => {
      this._setEventListeners(formElement, this._config)
    });
  }
}
