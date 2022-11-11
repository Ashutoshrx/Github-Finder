import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
    
    return (
        <div className="container align-middle">
            <UserSearch/>
            <UserResults />
        </div>
    );
}

export default Home;