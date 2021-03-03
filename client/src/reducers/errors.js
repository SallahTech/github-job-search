const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ERRORS':
      return {
        error: action.error,
      }

      break
    case 'RESET_ERRORS':
      return {}
    default:
      return state
      break
  }
}
