import { Link, useNavigate } from "react-router-dom";
import defaultProfilePic from "../assets/img/default-profile-pic.webp";
import useSession from '../useSession';


function Header() {
    const { user, setUser } = useSession();
    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Docsolutions</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav me-3">
                            <li className="nav-item">
                                <Link to="/users/all" className="nav-link">Users</Link>
                            </li>
                        </ul>
                    </div>

                    <img src={defaultProfilePic} width={25} className="rounded-circle me-2" alt="" />
                    <div className="dropdown">
                        <a className="text-decoration-none text-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {user.full_name}
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                            <li><a onClick={handleLogout} className="dropdown-item" href="#">Log out</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
