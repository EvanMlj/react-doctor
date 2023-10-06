import HeaderComp from './component/header/HeaderComp' ;
import PageTitle from './component/main/PageTitle';
import About from './component/main/About';
import Service from './component/main/Service';
import Awards from './component/main/Awards';
import Team from './component/main/Team';
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
	  <Team/>
	  

{/* <section className="section team">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-6">
				<div className="section-title text-center">
					<h2 className="mb-4">Meet Our Specialist</h2>
					<div className="divider mx-auto my-4"></div>
					<p>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</p>
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block mb-5 mb-lg-0">
					<img src="images/team/1.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single.html">John Marshal</a></h4>
						<p>Internist, Emergency Physician</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block mb-5 mb-lg-0">
					<img src="images/team/2.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single.html">Marshal Root</a></h4>
						<p>Surgeon, Сardiologist</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block mb-5 mb-lg-0">
					<img src="images/team/3.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single.html">Siamon john</a></h4>
						<p>Internist, General Practitioner</p>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block">
					<img src="images/team/4.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single.html">Rishat Ahmed</a></h4>
						<p>Orthopedic Surgeon</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> */}

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
<footer className="footer section gray-bg">
	<div className="container">
		<div className="row">
			<div className="col-lg-4 mr-auto col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<div className="logo mb-4">
						<img src="images/logo.png" alt="" className="img-fluid"/>
					</div>
					<p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>

					<ul className="list-inline footer-socials mt-4">
						<li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="icofont-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="icofont-twitter"></i></a></li>
						<li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="icofont-linkedin"></i></a></li>
					</ul>
				</div>
			</div>

			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">Department</h4>
					<div className="divider mb-4"></div>

					<ul className="list-unstyled footer-menu lh-35">
						<li><a href="/">Surgery </a></li>
						<li><a href="/">Wome's Health</a></li>
						<li><a href="/">Radiology</a></li>
						<li><a href="/">Cardioc</a></li>
						<li><a href="/">Medicine</a></li>
					</ul>
				</div>
			</div>

			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">Support</h4>
					<div className="divider mb-4"></div>

					<ul className="list-unstyled footer-menu lh-35">
						<li><a href="/">Terms & Conditions</a></li>
						<li><a href="/">Privacy Policy</a></li>
						<li><a href="/">Company Support </a></li>
						<li><a href="/">FAQuestions</a></li>
						<li><a href="/">Company Licence</a></li>
					</ul>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget widget-contact mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">Get in Touch</h4>
					<div className="divider mb-4"></div>

					<div className="footer-contact-block mb-4">
						<div className="icon d-flex align-items-center">
							<i className="icofont-email mr-3"></i>
							<span className="h6 mb-0">Support Available for 24/7</span>
						</div>
						<h4 className="mt-2"><a href="tel:+23-345-67890">Support@email.com</a></h4>
					</div>

					<div className="footer-contact-block">
						<div className="icon d-flex align-items-center">
							<i className="icofont-support mr-3"></i>
							<span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
						</div>
						<h4 className="mt-2"><a href="tel:+23-345-67890">+23-456-6588</a></h4>
					</div>
				</div>
			</div>
		</div>
		
		<div className="footer-btm py-4 mt-5">
			<div className="row align-items-center justify-content-between">
				<div className="col-lg-6">
					<div className="copyright">
						&copy; Copyright Reserved to <span className="text-color">Novena</span> by <a href="/" target="_blank">Themefisher</a>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="subscribe-form text-lg-right mt-5 mt-lg-0">
						<form action="#" className="subscribe">
							<input type="text" className="form-control" placeholder="Your Email address"/>
							<a href="/" className="btn btn-main-2 btn-round-full">Subscribe</a>
						</form>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4">
					<a className="backtop js-scroll-trigger" href="#top">
						<i className="icofont-long-arrow-up"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
    </div>
  );
}

export default App;
