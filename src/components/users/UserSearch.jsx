import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import GithubContext from '../../context/github/GithubContext';
import Alert from '../layout/Alert';

function UserSearch() {

    const { searchUsersByUserName, users, clearUserResults } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    // console.log(setAlert);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            setAlert('Please enter something');
        }
        else {
            searchUsersByUserName(text);
            setText('');
        }
    };

    const clearUsersHandler = () => {
        clearUserResults();
    };

    return (
        <div className='container mx-auto text-teal-500 text-align-center py-12 align-middle'>
            <Alert />
            <form className='form-control' onSubmit={handleSubmit} >
                <div className="relative">
                    <input type="text" value={text} placeholder="Search User" onChange={handleChange}
                        className='w-full pr-40 bg-gray-200 input input-lg text-black' />
                    <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Search</button>
                    {users.length > 0 && (
                        <button className="btn btn-ghost" onClick={clearUsersHandler}>Clear</button>
                    )}

                </div>
            </form>
        </div>
    );
}

export default UserSearch;
