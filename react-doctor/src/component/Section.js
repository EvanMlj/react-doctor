
/**
 * Renders a section component with a title, message, and custom class.
 *
 * @param {string} title - The title of the section.
 * @param {string} message - The message to display in the section.
 * @param {string} className - The custom class to apply to the section.
 * @return {JSX.Element} - The rendered section component.
 */
const Section = ({ className, children }) => {
return (
    <section className={className}>
        <div className="container">
            { children }
        </div>
    </section>
);
};

export default Section;