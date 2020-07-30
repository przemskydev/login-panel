
const initialState = {
  
}

const reducer = (state = initialState, {payload, type}) => {
  
  if(type === "ADD"){
    return {
      ...state,
      ...payload
    }
  }
  
}

export default reducer;