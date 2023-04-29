export default class UserInfo {
  constructor({nameusSelector, aboutusSelector, avatarusSelector}) {
    this._nameUser = document.querySelector(nameusSelector);
    this._aboutUser = document.querySelector(aboutusSelector);
    this._avatarUser = document.querySelector(avatarusSelector);
  }

  getUserInfo() {
    const users = {
      nameUser: this._nameUser.textContent,
      aboutUser: this._aboutUser.textContent,
      avatarUser: this._aboutUser.src
    }

    return users
  }

  setUserInfo(name, about) {
    this._nameUser.textContent = name;
    this._aboutUser.textContent = about;
  }

  setUserAvatar(avatar) {
    this._avatarUser.src = avatar;
  }
}
