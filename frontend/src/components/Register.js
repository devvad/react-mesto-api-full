import React from "react";
import { Link } from 'react-router-dom';

function Register (props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {setEmail(e.target.value)};
  const handlePasswordChange = (e) => {setPassword(e.target.value)};
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSignup(email, password);
  }

  const handlePathChange = (newPath) => {props.onPathChange(newPath)};

  React.useEffect(() => {
    handlePathChange('/sign-up')
  },);


  return (
    <div>
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Регистрация</h1>
      <input type='email' onChange={handleEmailChange}
      className="form__item" id='signin-email' placeholder="Email"
      required ></input>
      <input type='password' onChange={handlePasswordChange}
      className="form__item" id='signin-password'
      placeholder="Password" required></input>
      <button type='submit' className='form__button'>Регистрация</button>
      <p className="form__caption">Уже зарегистрированы?
      <Link className="form__link" to="/sign-in">Войти</Link>
      </p>
    </form>
  </div>
  )
}

export default Register;
