import { info } from 'daisyui/src/colors/colorNames';
import { useEffect, useState } from 'react';
import Card from '../layout/Card';

function UserResults() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGitUsers();
    }, []);

    const fetchGitUsers = async () => {
        await fetch(`${process.env.REACT_APP_URL}/users`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    };
    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-12 xl:grid-cols-4 '>
                {users.map((user) =>
                    <Card key={user.id} avatar={user.avatar_url} userName={user.login} />
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
