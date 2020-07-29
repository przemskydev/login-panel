import React from 'react'

const withSubmit = (WrappedComponent) => {
  return class withSubmit extends React.Component {

    handleSubmit = ({firstName, lastName, email, phone, password, terms, mailing}) => {

      console.log(firstName, lastName, email, phone, password, terms, mailing)
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