import { StaticRouter } from "react-router-dom";

const initialState = {
  
}
const reducer = (state = initialState, {payload, type}) => {
  
  if(type === "ADD"){
    return {
      ...state,
      payload
    }
  }
  console.log(state)
}

export default reducer;