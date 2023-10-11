import HeaderComp from './component/header/HeaderComp' ;
import PageTitle from './component/main/PageTitle';
import About from './component/main/About';
import Service from './component/main/Service';
import Awards from './component/main/Awards';
import Team from './component/main/Team';
import Testimonial from './component/main/Testimonial';
import Footer from './component/footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/style.css';


function App() {
  return (
    <div className="App top">
	<HeaderComp/> 
	<PageTitle/>
	<About/>
	<Service/>
	<Awards/>
	<Team
		title="Meet Our Specialist"
		presentation="Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles"/>
	<Testimonial/>
{/* <!-- footer Start --> */}
	<Footer/>
    </div>
  );
}

export default App;
