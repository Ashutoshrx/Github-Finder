import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Card from '../layout/Card';

function UserResults() {
    const { users, loading } = useContext(GithubContext);

    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-12 xl:grid-cols-4 '>
                {users.map((user) =>
                    <Card key={user.id} user={user} />
                )}
            </div>
        );
    } else {
        return (
            <div className='container pt-11 stroke-indigo-50'>
                <progress className="progress progress-error  w-56">Loading...</progress>
            </div>
        );
    }


}

export default UserResults;
