const jobsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return action.jobs
      break
    case 'LOAD_MORE_JOBS':
      return [...state, ...action.jobs]
      break
    default:
      return state
      break
  }
}

export default jobsReducer
