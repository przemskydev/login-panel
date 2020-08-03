import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

const withAuth = (WrappedComponent) => {

  return function Enhancer({ login }) {

    const handleLogin = async (val) => {

      // const id = Date.now();

      // const content = {
      //   id,
      //   ...val
      // }

      // try {
      //   await addItem(content)
      // } catch (error) {
      //   console.log(error)
      // }
      console.log(val)
    }

    return (
      <WrappedComponent
        handleLogin={handleLogin}
      />
    )

  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (itemContent) => dispatch(addItemAction(itemContent)),
//   };
// };

// const composeHoc = compose(
//   connect(null, mapDispatchToProps),
//   withSubmit
// )

// export default composeHoc;
export default withAuth;