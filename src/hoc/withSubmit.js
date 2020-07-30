import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addItem as addItemAction } from 'actions';

const withSubmit = (WrappedComponent) => {

  return function Enhancer({ addItem }) {

    const handleSubmit = (val) => {
      const userID = () => {
        return Date.now()
      }
      addItem(val)
    }

    return (
      <WrappedComponent
        handleSubmit={handleSubmit}
      />
    )

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemContent) => dispatch(addItemAction(itemContent)),
  };
};

const composeHoc = compose(
  connect(null, mapDispatchToProps),
  withSubmit
)

export default composeHoc;
