import { createContext, useReducer } from 'react';
import gitReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(gitReducer, initialState);

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

  // Fetching a single user from the list of users
  const fetchUser = async (login) => {
    dispatch({
      type: 'SET_LOADING',
    });
    await fetch(`${process.env.REACT_APP_URL}/users/${login}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'GET_USER',
          payload: data,
        });
      })
      .catch((error) => console.log(error));
  };

  // Fetch user repositories of a particular user
  const fetchRepo = async (login) => {
    dispatch({
      type: 'SET_LOADING',
    });
    await fetch(`${process.env.REACT_APP_URL}/users/${login}/repos`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'FETCH_REPOS',
          payload: data,
        });
      });
  };

  const clearUserResults = () => {
    dispatch({
      type: 'SET_LOADING',
    });
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsersByUserName,
        clearUserResults,
        fetchUser,
        fetchRepo,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
