import React from 'react';

function UserRepos() {
    return (
        <div>
            <div className='text-center mx-auto px-12 py-12'>
                <table className="border-separate border-spacing-x-0.5 border border-sky-400">
                    <thead>
                        <tr>
                            {/* @TODO add repos */}
                            {/* {user.map()} */}
                            <th className="border border-slate-600">REPOSITORIES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-700 ...">Indiana</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default UserRepos;
