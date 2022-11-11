import { createContext, useReducer } from 'react';
import gitReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(gitReducer, initialState);

  /*Fetch Initial Users from GitHub 
 const fetchGitUsers = async () => {
    await fetch(`${process.env.REACT_APP_URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'GET_USERS',
          payload:data
        });
      })
      .catch((error) => console.log(error));
  };*/
  // Fetch Users by username
  const searchUsersByUserName = async (userName) => {
    const params = new URLSearchParams({
      q: userName,
    });

    dispatch({
      type: 'SET_LOADING',
    });
    await fetch(`${process.env.REACT_APP_URL}/search/users?${params}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'GET_USERS',
          payload: data.items,
        });
      })
      .catch((error) => console.log(error));
  };

  const clearUserResults = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsersByUserName,
        clearUserResults,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
