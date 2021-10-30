import PopupWithForm from "./PopupWithForm"
import {useState} from "react"

function AddPlacePopup ({isOpen, onClose, onAddPlace}) {
  const [name, setName ] = useState('');
  const [link, setLink ] = useState('');

const handleNameChange = (e) => {
  setName(e.target.value)
} 

const handlePlaceChange = (e) => {
  setLink(e.target.value)
} 

const handleSubmit = (e) => {
  e.preventDefault()
  onAddPlace({
    name,
    link,
  })
  setName('')
  setLink('')
}

return (
  <PopupWithForm
    name="add" title="Новое место" 
    isOpen={isOpen} container="popup__container popup__form" 
    onClose={onClose} handleSubmit={handleSubmit} buttonText='Сохранить'>
  <input 
    name="InputNameCard" type="text" 
    id="input__popup-CardName" className="popup__input" 
    placeholder="Название места" onChange={handleNameChange}
    minLength="2" maxLength="40" 
    value={name || ''} required />
  <span 
    id="input__popup-CardName-error" className="popup__error" />
  <input 
    type="url" className="popup__input" 
    name="InputImgCard" id="input__popup-CardImg" 
    placeholder="ссылка на картинку" value={link || ''}
    onChange={handlePlaceChange} required />
  <span 
    id="input__popup-CardImg-error" className="popup__error" />
</PopupWithForm>
)
}

export default AddPlacePopup;