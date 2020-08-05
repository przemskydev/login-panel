import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { logged } = useSelector(state=>state.logged)
  return (
    <Route {...rest} render={props => (
      localStorage.getItem('user') ? <Component {...props}/> : <Redirect to='/login' />
    )}

    />
  )
}

export default PrivateRoute;