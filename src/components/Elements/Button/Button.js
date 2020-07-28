import styled, { css } from 'styled-components'


const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  text-decoration: none;
  padding: 0;
  margin-top: 50px;
  width: 220px;
  height: 47px;
  padding-top: 5px;
  border: 1px solid red;
  border-bottom: 5px solid red;
  background-color: transparent;
  transition: 
    color .8s ease-in-out, 
    letter-spacing 1s ease-in-out, 
    font-size .8s ease-in-out;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    width: 220px;
    height: 43px;
    background-color: red;
    z-index: -1;
    top: 0;
    right: -101%;
    transition: transform .5s ease-in-out;
    will-change: transform;
  }

  :hover::after {
    transform: translatex(-100%);
  }

  :hover {
    color: black;
    letter-spacing: 4px;
    font-size: 1.8rem;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid #590000;
      border-bottom: 5px solid #590000;
      color: #590000;
      pointer-events: none;
    `
  }


${({ right }) =>
    right &&
    css`
      color: red;
      
      ::after {
        content: '';
        position: absolute;
        width: 220px;
        height: 43px;
        background-color: red;
        z-index: -1;
        top: 0;
        right: 100%;
        transition: transform .5s ease-in-out;
        will-change: transform;
      }

      :hover::after {
        transform: translatex(100%);
      }
    `
  }


${({ down }) =>
    down &&
    css`
      color: red;
      
      ::after {
        content: '';
        position: absolute;
        width: 220px;
        height: 43px;
        background-color: red;
        z-index: -1;
        top: 100%;
        right: 0%;
        transition: transform .5s ease-in-out;
        will-change: transform;
      }

      :hover::after {
        transform: translatey(-100%);
      }
    `
  }


`;

export default Button;