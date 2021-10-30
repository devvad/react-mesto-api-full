import PopupWithForm from "./PopupWithForm"
import {useRef} from "react"


function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {

const avaRef = useRef();

const handleSubmit = (e) => {
  e.preventDefault();
  onUpdateAvatar({
    avatar: avaRef.current.value,
  })
  e.target.reset()
}

  return(
    <PopupWithForm
      name="refresh" title="Обновить аватар" 
      isOpen={isOpen} container="popup__container popup__form" 
      buttonText='Сохранить'
      onClose={onClose} handleSubmit = {handleSubmit}>
    <input 
      type="url" className="popup__input" 
      name="avatar" id="input__popup-avatar" 
      placeholder="Ссылка на аватар" required 
      ref={avaRef} defaultValue='' />
    <span 
      id="input__popup-avatar-error" className="popup__error" />
  </PopupWithForm>
  )
}

export default EditAvatarPopup

