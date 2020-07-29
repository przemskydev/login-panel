import React from 'react'

const withSubmit = (WrappedComponent) => {
  return class withSubmit extends React.Component {

    handleSubmit = (val) => {
      console.log(val)
    }

    render() {
      return (
        <WrappedComponent
          handleSubmit={this.handleSubmit}
          {...this.props}
        />
      )
    }

  }
}

export default withSubmit;