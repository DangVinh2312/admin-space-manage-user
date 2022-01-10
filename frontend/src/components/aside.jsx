import { NavLink } from "react-router-dom";

export default function Aside() {
    return <aside>
        <div id="sidebar" className="nav-collapse ">
            <ul className="sidebar-menu" id="nav-accordion">
                <p className="centered"><a href="profile.html"><img src="/img/ui-sam.jpg" alt="" className="img-circle" width="80" /></a></p>
                <h5 className="centered">Quang Vinh</h5>
                <li className="mt">
                    <NavLink to="/" activeclassname="active">
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li className="sub-menu">
                    <NavLink to="/users" activeclassname="active">
                        <i className="fa fa-users"></i>
                        <span>Manage Users</span>
                    </NavLink>
                </li>
            </ul>

        </div>
    </aside>
}