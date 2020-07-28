import React, { useState, useEffect, useContext } from 'react';
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
  changePage: () => { },
  pageIds: [],
  changePageId: () => { }
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
          right
          disabled={context.currentPage === context.pageIds.length}
        >
          Next
        </Button>
      </StyledButtons>

      <Button type="submit" down>
        Submit
      </Button>
    </StyledWrapper>
  )
}

const Page = ({ children, pageId }) => {
  const context = useContext(WrapperContext);

  useEffect(() => {
    context.changePageId(pageId)
  })

  return (
    context.currentPage === pageId ? children : null
  )
}

const Wrapper = ({ children }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageIds, setPageId] = useState([])

  const changePage = (pageId) => {
    setCurrentPage(pageId)
  }

  const changePageId = (pageId) => {

    if (pageIds.includes(pageId)) {
      return
    }

    setPageId([...pageIds, pageId])
  }

  return (
    <div>
      <WrapperContext.Provider value={{
        currentPage,
        changePage,
        pageIds,
        changePageId,
      }}>
        {children}
      </WrapperContext.Provider>
    </div>
  )
}

export { Page, ControlsButtons, Wrapper }