import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



function Navbar({ title }) {
    return (
        <div className="navbar bg-primary text-secondary-content">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">{title}</Link>
            </div>
            <div className="flex-none gap-2">
                <Link to={'/profile'} className="btn btn-ghost normal-case text-xl">
                    Profile
                </Link>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    Home
                </Link>

            </div>
        </div>
    );
}

Navbar.propTypes = {
    'title': PropTypes.string
};

Navbar.defaultProps = {
    'title': 'Github Finder',
};

export default Navbar;
