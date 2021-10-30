class Api {
  constructor(confing) {
    this._baseUrl= confing.baseUrl
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //получаем список всех карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkError);
  }


  //получаем информацию пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkError);
  }

  //обновляем аватар
  newAvatar(avatarUrl) {
    const newConfing = {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarUrl['avatar']
      }),

    }
    return fetch(`${this._baseUrl}/users/me/avatar`, newConfing)
    .then(this._checkError);
  }

  // удаляем карточку
  removeCard(cardId) {
    const newConfing = {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
    }
    return fetch(`${this._baseUrl}/cards/${cardId}`, newConfing)
    .then(this._checkError);
  }

  // ставим и удаляем лайк
  changeLikeCardStatus(cardId, isLiked) {
    const updateLike = {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      method: 'PUT',
    }

    const deleteLike = {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
    }
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, isLiked ? deleteLike : updateLike)
    .then(this._checkError);
  }

  // отправляем информацию
  patchProfileInfo(userData) {
    const newConfing = {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    }
    return fetch(`${this._baseUrl}/users/me`, newConfing)
    .then(this._checkError);
  }



  //создание карточки
  patchCard(inputsValue) {
    const newConfing = {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputsValue),

  }
  return fetch(`${this._baseUrl}/cards`, newConfing)
  .then(this._checkError);
}
}

export default new Api ({
  baseUrl: `https://api.mixakras.nomoredomains.club`,
});
