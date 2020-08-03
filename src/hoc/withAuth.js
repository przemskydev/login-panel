import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const withAuth = (WrappedComponent) => ({ users }) => {

  const handleLogin = async (val) => {

    // const { email, password } = users

    // console.log(email, password)

    // console.log('values', val)
    console.log(users)
  }

  return (
    <WrappedComponent
      handleLogin={handleLogin}
    />
  )

}

const mapStateToProps = state => ({
  users: { ...state }
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (itemContent) => dispatch(addItemAction(itemContent)),
//   };
// };

const composeHoc = compose(
  connect(mapStateToProps, null),
  withAuth
);

export default composeHoc;
// export default withAuth