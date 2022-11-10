const gitReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users:action.payload,
        loading: true
      };

    default:
      return action;
  }
};

export default gitReducer;
