import React, { useState, useContext } from 'react';
import Button from '../components/Elements/Button/Button';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const WrapperContext = React.createContext({
  currentPage: 1,
  changePage: () => { }
})

const ControlsButtons = () => {
  const context = useContext(WrapperContext)

  return (
    <StyledWrapper>
      <StyledButtons>
        <Button
          onClick={() => context.changePage(context.currentPage - 1)}
          disabled={context.currentPage === 1}
        >
          Prev
        </Button>
        {/* 
                
        try to make hover effect from left to right 
        on the 'next' button

        */}
        <Button
          onClick={() => context.changePage(context.currentPage + 1)}
          right={true}
        >
          Next
        </Button>
      </StyledButtons>

      <Button type="submit">
        Submit
      </Button>
    </StyledWrapper>
  )
}

const Wrapper = ({ children }) => {

  const [currentPage, setCurrentPage] = useState(1)

  const changePage = (pageId) => {
    console.log(pageId)
    setCurrentPage(pageId)
  }

  return (
    <div>
      <WrapperContext.Provider value={{
        currentPage,
        changePage
      }}>
        {children}
      </WrapperContext.Provider>
    </div>
  )
}

export { ControlsButtons, Wrapper }