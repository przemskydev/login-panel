import React from 'react';
import GlobalStyle from '../../theme/GlobalStyles'

const Main = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  )
}

export default Main