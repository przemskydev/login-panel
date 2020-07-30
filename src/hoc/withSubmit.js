import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addItem as addItemAction } from 'actions';

const withSubmit = (WrappedComponent) => {

  return function Enhancer({ addItem }) {

    const handleSubmit = async (val) => {

      const id = Date.now();

      const content = {
        id,
        ...val
      }

      try {
        await addItem(content)
      } catch (error) {
        console.log(error)
      }
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
