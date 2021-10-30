const BASE_URL = 'https://api.mixakras.nomoredomains.club';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status)
    }
  })
}

export const authorization = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status)
    }
  })
}

export const tokenCheck = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`}
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status)
    }
  })
}
