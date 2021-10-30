import React from 'react';

function Login(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlePathChange = (newPath) => {props.onPathChange(newPath)};

  React.useEffect(() => {
    handlePathChange('/sign-in')
  },);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
  e.preventDefault();
  props.onSignin(email, password);
}

return (
  <div>
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Вход</h1>
      <input type='email' onChange={handleEmailChange} className="form__item" id='signin-email' placeholder="Email" required ></input>
      <input type='password' onChange={handlePasswordChange} className="form__item" id='signin-password' placeholder="Password" required></input>
      <button type='submit' className='form__button' >Войти</button>
    </form>
  </div>
)
}

export default Login;
