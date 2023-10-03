import { useState } from 'react';
import Dropdown from './Dropdown';

/**
 * Generates a function comment for the given function body.
 *
 * @param {Object} items - An object containing the menu items.
 * @param {Array} items.submenu - An array of submenu items.
 * @param {string} items.title - The title of the menu item.
 * @param {string} items.url - The URL of the menu item.
 * @return {JSX.Element} The JSX element representing the menu item.
 */
const MenuItem = ({ items }) => {
    // Initialize dropdown state
    const [dropdown, setDropdown] = useState(false);

    return (
        // Render menu item element
        <li className='menu-items'>
            {items.submenu ? (
                <>
                    {/* Render dropdown button */}
                    <button
                        type='button'
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {/* Render menu item title */}
                        {items.title}{' ↓'}
                    </button>
                    {/* Render dropdown submenu */}
                    <Dropdown submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                // Render menu item link
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    );
}

export default MenuItem;
