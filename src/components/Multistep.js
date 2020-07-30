import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Button from "./Elements/Button/Button";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledProgress = styled.p`
  display: flex;
  justify-content: flex-end;
`;

const StyledErrMesssage = styled.div`
  height: 10px;
`;

const WrapperContext = React.createContext({
  currentPage: 1,
  changePage: () => { },
  pageIds: [],
  changePageId: () => { }
})

const ControlsButtons = ({ errors, touched }) => {
  const { changePage, currentPage, pageIds } = useContext(WrapperContext)
  const error = (Object.keys(errors).length === 1) ? 'error' : 'errors'

  return (
    <StyledWrapper>
      <StyledButtons>
        <Button
          type='button'
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </Button>

        <Button
          type='button'
          onClick={() => changePage(currentPage + 1)}
          right
          disabled={currentPage === pageIds.length}
        >
          Next
        </Button>
      </StyledButtons>

      {
        (currentPage === pageIds.length)
          ? (
            <>
              <Button
                type="submit"
                down='true'
              >
                Submit
              </Button>
              <StyledErrMesssage>
                {
                  (Object.keys(errors).length > 0) && touched.terms ? (
                    `${Object.keys(errors).length} ${error}. Go back and check the form.`
                  ) : null
                }
              </StyledErrMesssage>
            </>
          )
          : null
      }

    </StyledWrapper>
  )
}

const Page = ({ children, pageId }) => {
  const { currentPage, changePageId } = useContext(WrapperContext)

  useEffect(() => {
    changePageId(pageId)
  })

  return (
    currentPage === pageId ? children : null
  )
}

const ProgressBar = () => {
  const { currentPage, pageIds } = useContext(WrapperContext)

  return (
    <StyledProgress>
      {
        `${currentPage}/${pageIds.length}`
      }
    </StyledProgress>
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

export { ProgressBar, Page, ControlsButtons, Wrapper, StyledErrMesssage }