const gitReducer = (state, action) => {
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
    case 'FETCH_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'CLEAR_USERS':
      return {
        ...state,
        loading: false,
        users: [],
        repos: [],
        user: null,
      };

    default:
      return action;
  }
};

export default gitReducer;
