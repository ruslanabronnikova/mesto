export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputElement));
    this._submitButton = this._formElement.querySelector(this._config.submitButton);
    this._inactiveButtonClass = this._config.inactiveButtonClass;
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
  _hasInputValid() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  // Включение и выключение активации кнопки
  toggleButtonState() {
    if (!this._hasInputValid()) {
      this._submitButton.classList.remove(this._inactiveButtonClass)
      this._submitButton.removeAttribute('disabled');
    } else {
      this._submitButton.classList.add(this._inactiveButtonClass)
      this._submitButton.setAttribute('disabled', 'disabled');
    }
  }

  _setEventListeners() {
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      })
    })

    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    })
  }

  // метод очищения формы
  resetValidation() {
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }

  enableValidation() {
    this._setEventListeners();
  }
}
