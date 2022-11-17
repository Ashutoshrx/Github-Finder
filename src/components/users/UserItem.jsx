import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';

function UserItem() {
  const { fetchUser, user } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    fetchUser(params.login);
  }, []);

  return (

    <div className='text-center container mx-auto px-12 static py-12'>
      <div className="flex items-start">
        <button className='btn btn-danger'>
          <Link to='../'>Back to Search</Link>
        </button>
      </div>
      <div className="avatar ">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img className='float-right' src={user.avatar_url} alt="avatar" />
        </div>
      </div>
      <div className='static'>
        <div className='relative bottom-0 left-0 '>
          <div className='text-sky-400/100 hover:uppercase'>
            <h1 className='text-center'>{user.name}</h1>
            <p className='text-center'>{user.location}</p>
            <p className='text-center'>{user.bio}</p>
          </div>
          <div className="grid gap-4 grid-cols-2">
            <div className="relative top-5 h-32 w-32">
              <a className='btn btn-outline btn-primary'
                href={`https://www.github.com/${user.login}`}
                target='_blank' rel='noreferrer'>Visit GITHUB Profile</a>
            </div>
            <div className="absolute bottom-12 right-12 h-11 w-16">
              <button className='btn btn-outline btn-success'>
                <Link to={`/repositories`}>Show Repositories</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
