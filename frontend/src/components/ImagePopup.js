

const ImagePopup = ({card, onClose}) => {
  return (
    <div className={card.isOpened ? `popup popup_opacity popup_opened` : `popup popup_opacity`}>
      <div className="popup__content">
      <figure className="popup__figure">
        <img className="popup__image" src={card.link} alt={card.name}  />
        <figcaption className="popup__figcaption">{card.name}</figcaption>
      </figure>
        <button onClick={onClose} type="button" className="popup__closed" id="ClosePopupBig" >
        </button>
      </div>
    </div>
  )
}

export default ImagePopup