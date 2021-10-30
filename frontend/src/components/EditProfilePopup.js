import PopupWithForm from "./PopupWithForm"
import { useContext, useEffect, useState } from "react"
import CurrentUserContext from "../contexts/CurrentUserContext"

function EditProfilePopup ({isOpen, onClose, onUpdateUser})  {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen])

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    })
  }

return(
<PopupWithForm
  name="edit" title="Редактировать профиль"   
  container="popup__container popup__form" buttonText='Редактировать'
  handleSubmit = {handleSubmit} isOpen={isOpen} onClose={onClose}>

<input onChange={onChangeName} value={name || ''} 
  type="text" className="popup__input" 
  name="input-name" id="input__popup-name" 
  minLength="2" maxLength="40" 
  placeholder="Имя" required />

<span id="input__popup-name-error" className="popup__error" />

<input onChange={onChangeDescription} value={description || ''} 
  type="text" className="popup__input" 
  name="input-about" id="input__popup-about"
  minLength="2" maxLength="200" 
  placeholder="Вид деятельности" required />

<span id="input__popup-about-error" className="popup__error" />

</PopupWithForm>
)
}

export default EditProfilePopup