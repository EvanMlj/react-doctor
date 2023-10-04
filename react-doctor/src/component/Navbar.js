import { menuItems } from "../menuItems";
import  MenuItems  from "./MenuItem";
import Logo from '../assets/images/logo.png'

/**
 * Renders the navigation bar.
 *
 * @return {JSX.Element} The navigation bar component.
 */
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navigation">
           <div className="container">
            <img src={Logo} alt='logo entreprise' className="navbar-brand img-fluid"/>
            <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
            {menuItems.map((menu, index) => {
                return (
                <MenuItems items={menu} key={index} />
                );
                })}
            </ul>
            </div>
            </div>
        </nav>
    ) ;
} ;

export default NavBar ;