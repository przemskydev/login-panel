import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  StyledMultistepWrap,
  StyledButtons,
  StyledProgress,
  StyledErrMesssage
} from '../theme/Styled';
import Button from "./Elements/Button/Button";

const WrapperContext = React.createContext({
  currentPage: 1,
  changePage: () => { },
  pageIds: [],
  changePageId: () => { },
})

const ControlsButtons = ({ errors, touched }) => {
  const { changePage, currentPage, pageIds } = useContext(WrapperContext)
  const error = (Object.keys(errors).length === 1) ? 'error' : 'errors'

  return (
    <StyledMultistepWrap>
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

    </StyledMultistepWrap>
  )
}

const Page = ({ children, pageId }) => {
  const { currentPage, changePageId } = useContext(WrapperContext);

  useEffect(() => {
    changePageId(pageId)
  });

  return (
    currentPage === pageId
      ? children
      : null
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
        changePageId
      }}>
        {children}
      </WrapperContext.Provider>
    </div>
  )
}

ControlsButtons.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired
}

Wrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired
}

export { ProgressBar, Page, ControlsButtons, Wrapper, StyledErrMesssage }