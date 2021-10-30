export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inputError: '.popup__error'
}  

export const popupProfile = document.querySelector('#popup-profile'); /*поиск формы */
export const editButton = document.querySelector('.profile__edit'); /*Кнопка редактирования*/

export const nameInput = document.querySelector('#input__popup-name'); /* 1 значение  */
export const aboutInput = document.querySelector('#input__popup-about'); /*2 значение */

export const formEditProfile = document.querySelector('#form-profile') /* попап по форме */

// форма добавления карточек
export const popupCard = document.querySelector('#popup-card'); // форма
export const openPopupCardButton = document.querySelector('.profile__add'); // кнопка добавления карточки
export const formAddCard = document.querySelector('#form-card');

//template
export const cardsTemplate = document.querySelector('#templatecard').content; //получаем заготовки для карточек
export const cardContainer = document.querySelector('.cards'); //контейнер с карточками

export const popupCardSaveButton = document.querySelector('#save-popup-card'); // кнопка сохранения форм
export const popupBig = document.querySelector('#popupbig'); // попап-картинка

export const nameProfile = '.profile__name'; // поиск имени 
export const aboutProfile = '.profile__about'; // поиск о себе 
export const avatarProfile = '.profile__avatar'; // аватар профиля 


export const popupConfirm = document.querySelector('.popup_confirm')// форма попапа удаления
export const popupEditAvatar = document.querySelector('.profile__avatar') //попап аватара
export const saveNewAvatar = document.querySelector('#form-avatar') //форма аватара
export const popupAvatarSelector = document.querySelector('.popup_avatar');

export const popupImg = document.querySelector('.popup__image');
export const popupImgText = document.querySelector('.popup__figcaption');
export const likeButton = document.querySelector('.card__like'); // кнопка лайка