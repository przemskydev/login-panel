import React from 'react'
import { useSelector } from 'react-redux';
import Button from '../../components/Elements/Button/Button'
import {
  StyledWrapper
} from '../../theme/Styled';

const Home = () => {

  const { firstName, lastName, phone } = useSelector(state => state.users);
  console.log(firstName, lastName, phone)

  const findMe = () => {

    const succes = ({ coords }) => {
      const { latitude, longitude } = coords;

      console.log(latitude, longitude)
    }

    if (!navigator.geolocation) {
      console.log(`some problem with geolocation  `)
    } else {
      navigator.geolocation.getCurrentPosition(succes)
    }
  }

  // const crds = navigator.geolocation.getCurrentPosition(res => { return ( res.coords)})
  // console.log(crds)
  return (
    <StyledWrapper smaller>
      <h1>first_name: {firstName || 'General'}</h1>
      <h1>last_name: {lastName || 'Kenobi'}</h1>

      {/* <h1>`${latitude} ${longitude}`</h1> */}
      <Button geo type='button' onClick={() => findMe()}>GEO</Button>
    </StyledWrapper>
  )
}

export default Home;