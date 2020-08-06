import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../../theme/GlobalStyles'

const Main = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Main