import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';

function UserItem() {
  const { fetchUser, user } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    fetchUser(params.login);
  }, []);

  return (
    <div>
      <h1>User</h1>
      {user.login}
      <img src={user.avatar_url} alt="avatar URL" />
    </div>
  );
}

export default UserItem;
