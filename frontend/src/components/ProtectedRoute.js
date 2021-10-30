import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtecedRoute ({component: Component, ...props}) {
  return(
    <Route>
      {props.loggedIn ? <Component {...props} /> : <Redirect to='/sign-in' />}
    </Route>
  )
}

export default ProtecedRoute;