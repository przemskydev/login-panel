import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addItem as addItemAction } from 'actions';

const withSubmit = (WrappedComponent) => {

  return function Enhancer({ addItem }) {

    const handleSubmit = (val) => {
      addItem(val)
    }

    return (
      <WrappedComponent
        handleSubmit={handleSubmit}
        // {...props}
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
