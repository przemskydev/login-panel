const initialState = {
  users: [],
  logged: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        users: action.payload
      };
    case 'AUTH':
      return {
        ...state,
        logged: true
      }
    case 'LOGOUT':
      return {
        ...state,
        users: [],
        logged: false
      }
    default:
      return state
  }

}

export default reducer;