export default class UserInfo {
  constructor({nameusSelector, aboutusSelector}) {
    this._nameUser = document.querySelector(nameusSelector);
    this._aboutUser = document.querySelector(aboutusSelector);
  }

  getUserInfo() {
    const users = {
      nameUser: this._nameUser.textContent,
      aboutUser: this._aboutUser.textContent
    }
    return users
  }

  setUserInfo(nameUser, aboutUser) {
    this._nameUser.textContent = nameUser;
    this._aboutUser.textContent = aboutUser;
  }
}
