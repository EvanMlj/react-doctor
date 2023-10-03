import { menuItems } from "../menuItems";
import  MenuItems  from "./MenuItem";

/**
 * Renders the navigation bar.
 *
 * @return {JSX.Element} The navigation bar component.
 */
const NavBar = () => {
    return (
        <nav>
            <ul className="menus">
            {menuItems.map((menu, index) => {
                return (
                <MenuItems items={menu} key={index} />
                );
                })}
            </ul>
        </nav>
    ) ;
} ;

export default NavBar ;