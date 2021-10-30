import React from 'react';

function InfoTooltip(props) {
  return(
    <div className={props.isOpen ? 'popup popup_opened' : 'popup'} id={`popup-${props.name}`} onClick={props.onClose}>
      <div className="popup__container">
        <img className="popup__status-image" src={props.statusImage} alt={`картинка регистрации: ${props.status}`}/>
        <p className="popup__status-caption">{props.title}</p>
        <button className="popup__closed" type="button" onClick={props.onClose} />
      </div>
    </div>
  )
}

export default InfoTooltip;