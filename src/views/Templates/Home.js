import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Button from '../../components/Elements/Button/Button';
import MyComponent from '../../components/Maps/index'
import {
  StyledWrapper
} from '../../theme/Styled';

const Home = () => {
  const { firstName, lastName } = useSelector(state => state.users);
  const [crds, setCoords] = useState({})

  const findMe = () => {

    const succes = ({ coords }) => {
      const { latitude, longitude } = coords;
      setCoords({latitude, longitude})
    }

    if (!navigator.geolocation) {
      console.log(`some problem with geolocation  `)
    } else {
      navigator.geolocation.getCurrentPosition(succes)
    }

  }

  return (
    <StyledWrapper smaller>
      <h1>first_name: {firstName || 'General'}</h1>
      <h1>last_name: {lastName || 'Kenobi'}</h1>

      <Button geo type='button' onClick={() => findMe()}>GEO</Button>
      <MyComponent isMarkedShown coords={crds}/>
    </StyledWrapper>
  )
}

export default Home;