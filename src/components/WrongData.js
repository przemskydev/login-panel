import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledWrongData
} from '../theme/Styled';
import Warning from '../assets/warn'


const WrongData = ({ isntLogged, logged}) => {

  return (
    
      !isntLogged && !logged ? (
        <StyledWrongData>
          <Warning />
          <h4>wrong_data: try_again</h4>
        </StyledWrongData>) : null
    
  )
}

WrongData.propTypes = {
  isntLogged: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired
}

export default WrongData;