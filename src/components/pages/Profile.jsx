import desc from '../assets/desc.png';
import profile from '../assets/profile.jpg';

function Profile() {
    return (

        <div className="flex w-full">
            <div className="avatar">
                <div className="w-250 flex-grow card px-10 py-9 rounded">
                    <img src={profile} alt="Profile" />
                </div>
            </div>
            <div className="grid py-12 h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                <img src={desc} alt="Description" />
                <div className="card-body  bg-base-300">
                    <h2 className="card-title">Man On Mission!</h2>
                    <p> I am a Full Stack Java Developer, who is trying to upgrade the world with cutting edge technologies.
                    </p>
                </div>
            </div>

        </div>

    );
}

export default Profile;
