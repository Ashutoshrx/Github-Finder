import UserResults from "../users/UserResults";

function Home() {
    const fetchGitUsersHandler = (event) => {
        // @TODO:
        console.log('Fetch Github user button clicked');

    };

    return (
        <div className="container align-middle">
            <div className='container mx-auto text-teal-500 text-align-center py-12 align-middle'>
                <center>
                    <input type="text" placeholder="Find User" onChange={fetchGitUsersHandler}
                        className="input input-bordered input-primary w-full max-w-xs py-5" />
                </center>

            </div>
            <UserResults />
        </div>
    );
}

// Home.defaultProps = {
//     'btnClass': 'btn-info',
// };
// Home.propTypes = {
//     'btnClass': PropTypes.string
// };


export default Home;