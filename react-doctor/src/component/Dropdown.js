import React from 'react';


/**
 * Renders a dropdown menu with submenus.
 *
 * @param {object[]} submenus - An array of submenus to be displayed in the dropdown.
 * @param {boolean} dropdown - A flag indicating whether the dropdown should be shown or hidden.
 * @returns {JSX.Element} - The dropdown menu component.
 */
const Dropdown = ({ submenus, dropdown }) => {
    // Log a greeting message to the console
    console.log("COUCOU EVAN");

    // Render the dropdown menu component
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {/* Iterate over the submenus array and render each submenu */}
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    <a href={submenu.url}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;