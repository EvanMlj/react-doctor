import HeaderComp from './component/header/HeaderComp' ;
import PageTitle from './component/main/PageTitle';
import About from './component/main/About';
import Service from './component/main/Service';
import Awards from './component/main/Awards';
import Team from './component/main/Team';
import Footer from './component/footer/Footer';
import './assets/icofont/icofont.css' ;
import './assets/bootstrap/css/bootstrap.min.css' ;
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

<section className="section testimonial">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 offset-lg-6">
				<div className="section-title">
					<h2 className="mb-4">What they say about us</h2>
					<div className="divider  my-4"></div>
				</div>
			</div>
		</div>
		<div className="row align-items-center">
			<div className="col-lg-6 testimonial-wrap offset-lg-6">
				<div className="testimonial-block">
					<div className="client-info ">
						<h4>Amazing service!</h4>
						<span>John Partho</span>
					</div>
					<p>
						They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
					</p>
					<i className="icofont-quote-right"></i>
					
				</div>

				<div className="testimonial-block">
					<div className="client-info">
						<h4>Expert doctors!</h4>
						<span>Mullar Sarth</span>
					</div>
					<p>
						They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
					</p>
					<i className="icofont-quote-right"></i>
				</div>

				<div className="testimonial-block">
					<div className="client-info">
						<h4>Good Support!</h4>
						<span>Kolis Mullar</span>
					</div>
					<p>
						They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
					</p>
					<i className="icofont-quote-right"></i>
				</div>

				<div className="testimonial-block">
					<div className="client-info">
						<h4>Nice Environment!</h4>
						<span>Partho Sarothi</span>
					</div>
					<p>
						They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
					</p>
					<i className="icofont-quote-right"></i>
				</div>

				<div className="testimonial-block">
					<div className="client-info">
						<h4>Modern Service!</h4>
						<span>Kolis Mullar</span>
					</div>
					<p>
						They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
					</p>
					<i className="icofont-quote-right"></i>
				</div>
			</div>
		</div>
	</div>
</section>
{/* <!-- footer Start --> */}
	<Footer/>
    </div>
  );
}

export default App;
