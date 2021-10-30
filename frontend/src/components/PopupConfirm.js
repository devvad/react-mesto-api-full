import close from '../images/popup/Close_Icon.svg';

const PopupConfirm = ({isOpen, onClose, container}) => {
  
  return(
    <div className={isOpen ? `popup popup_confirm popup_opened` : `popup popup_confirm` }>
      <form id='form_remove' className ={container}>
        <h2 className="popup__title">Вы Уверены</h2>
        <button type ="submit" className="popup__button" >Да</button>
      </form>
      <button  src = {close} alt="закрыть" type="button" id="close_remove" className="popup__closed" onClick={onClose}>
      
      </button>
    </div>

  )
}

export default PopupConfirm