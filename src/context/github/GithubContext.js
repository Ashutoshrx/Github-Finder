import { createContext, useReducer } from 'react';
import gitReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(gitReducer, initialState);
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
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchGitUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
