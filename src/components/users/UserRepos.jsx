import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';

function UserRepos() {
    const { repos, fetchRepo } = useContext(GithubContext);
    const params = useParams();

    useEffect(() => {
        fetchRepo(params.login);
    }, []);


    return (
        <div className="flex flex-col w-full border-opacity-50 mockup-window border bg-base-300 ">
            <div className='text-center mx-auto px-12 py-12'>
                <table className="border-separate border-spacing-x-0.5 border border-sky-400">
                    <thead>
                        <tr>
                            <th className="border border-slate-600">COUNT</th>
                            <th className="border border-slate-600">REPOSITORIES</th>
                            <th className="border border-slate-600">DATE CREATED</th>
                        </tr>
                    </thead>
                    <tbody >
                        {repos.map(repo =>
                            <tr key={repo.id}>
                                <td id='tdIdCon' className="border border-slate-700 ...">1</td>
                                <td className="border border-slate-700 ...">{repo.name.toUpperCase()}</td>
                                <td className="border border-slate-700 ...">{repo.created_at.substring(0, 4)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserRepos;
