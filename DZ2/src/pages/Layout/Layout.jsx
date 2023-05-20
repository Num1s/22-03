import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"


const activeLink = ({isActive}) => isActive ? 'activeLink' : ''

export default function Layout() {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li><NavLink to={'/'} className={activeLink}>Main</NavLink></li>
                    <li><NavLink to={'/about'} className={activeLink}>About</NavLink></li>
                    <li><NavLink to={'/posts'} className={activeLink}>Posts</NavLink></li>
                    <li><NavLink to={'/login'} className={activeLink}>Log In</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}