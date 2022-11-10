import { createContext, useState } from 'react';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGitUsers = async () => {
    await fetch(`${process.env.REACT_APP_URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchGitUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
