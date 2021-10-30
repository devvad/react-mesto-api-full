import { useContext } from "react";
import Card from "../components/Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Main = ({ onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick, onCardLike, onCardDelete}) => {
 
  const { name, about, avatar} = useContext(CurrentUserContext)


  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image">
          <div className="profile__avatar" style={{ backgroundImage: `url(${avatar})` }}>
            <button onClick={onEditAvatar} type="button" className="profile__overlay"  ></button>
          </div>
          <div>
            <div className="profile__info">
              <h1 className="profile__name">{name}</h1>
              <button onClick={onEditProfile} type="button" className="profile__edit">
              </button>
            </div>
            <p className="profile__about">{about}</p>
          </div>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add"></button>
      </section>

      <section className="cards">
        
         {cards.map((card) => (
        <Card 
        key={card._id} 
        card={card} 
        onCardClick={onCardClick} 
        onCardLike={onCardLike} 
        onCardDelete={onCardDelete}/>))}
      
      </section>
    </main>
  )
}
export default Main