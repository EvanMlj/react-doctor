import Section from "../Section"
import Carousel from "../Carousel";
function Testimonial(){
    const donnnesTestimonial=[
        {
            title : "Amazing service!",
            author : "John Partho",
            message : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.",
        },
        {
            title : "Expert doctors!",
            author : "Mullar Sarth",
            message : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod."
        },
        {
            title : "Good Support!",
            author : "Siamon john",
            message : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod."
        },
        {
            title : "Nice Environnement!",
            author : "Partho Sarothi",
            message : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod."
        },
        {
            title: "Modern Services",
            author: "Anna Yang",
            message : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod."
        }
    ];
    return (
        <Section className="section testimonial">
		<div className="row">
        <div className="col-lg-6 offset-lg-6">
            <div className="section-title">
                <h2 className="mb-4">What they say about us</h2>
                <div className="divider my-4"></div>
            </div>
        </div>
        </div>
        <div className="row align-items-center">
        <div className="col-lg-6 testimonial-wrap offset-lg-6">
            <Carousel
                items={donnnesTestimonial}
            />
        </div>
        </div>
        </Section>
    )
}

export default Testimonial
