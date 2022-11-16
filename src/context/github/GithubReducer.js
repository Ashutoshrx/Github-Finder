const gitReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      if (action.loading) {
        return {
          ...state,
          loading: false,
        };
      } else {
        return {
          ...state,
          loading: true,
        };
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        loading: false,
        users: [],
      };

    default:
      return action;
  }
};

export default gitReducer;
