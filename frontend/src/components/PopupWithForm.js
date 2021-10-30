const PopupWithForm = ({ name, title, isOpen, onClose, children, container, handleSubmit, buttonText}) => {
  return (
    <div
      className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}
    >
      <form onSubmit={handleSubmit} name={name} className={container}>
        <button type="button" className="popup__closed" onClick={onClose} >
        </button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button className="popup__button" type="submit">{buttonText}</button>

      </form>
    </div>
  )
}
export default PopupWithForm