import React from 'react';
import { Link } from 'react-router-dom';

function Card({ user: { avatar_url, login } }) {
    return (
        <div className='flex-row items-center space-x-4 card-body bg-slate-700'>
            <div>
                <div className="avatar">
                    <div className='rounded-full shadow w-16 h-16'>
                        <img src={avatar_url} alt="profile" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">
                    {login}
                </h2>
                <Link to={`user/${login}`} className='text-base-content text-opacity-40 textarea-bordered'>
                    Visit Profile
                </Link>
            </div>

        </div>
    );
}

export default Card;
