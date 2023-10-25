import React from "react";
import Logo from "../../assets/images/logo.png";

function Footer(){

    const socialMedia = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/themefisher",
            icone : "icofont-facebook",
        },
        {
            name: "Twitter",   
            url: "https://twitter.com/themefisher",
            icone : "icofont-twitter"
        },
        {
            name: "Instagram",
            url: "https://www.pinterest.com/themefisher/",
            icone: "icofont-linkedin"
        }
    ]
    const footerLinks = [
        {
            title : 'Support',
            url : '/support',
            submenu :[
                {
                    title : 'Terms & Conditions',
                    url : 'terms-conditions'
                },
                {
                    title : 'Privacy Policy',
                    url : 'rivacy-policy'
                },
                {
                    title : 'Company Support',
                    url : 'company-support'
                },
                {
                    title : 'FAQuestions',
                    url : 'faq'
                },
                {
                    title : 'Company Licence',
                    url : 'company-licence'
                }
            ]
        },
        {
            title : 'Departement',
            url : '/department',
            submenu : [
                {
                    title : 'Surgery',
                    url : 'surgery'
                },
                {
                    title : 'Womens Health',
                    url : 'womens-health'
                },
                {
                    title : 'Radiology',
                    url : 'radiology'
                },
                {
                    title : 'Cariology',
                    url : 'cardiology'
                },
                {
                    title : 'Medicine',
                    url : 'medicine'
                },
            ]
        }
    ]
	const getIntouch = [
		{
			icon : "icofont-email",
			info : "Support Available for 24/7",
			contactInfo : "support@novena.com",
			link : "mailto:support@novena.com"
		},
		{
			icon : "iconfont-support",
			info : "Mon to Fri : 08:30 - 18:00",
			contactInfo : "823-4565-13456",
			link : "tel:+23-456-6588"
		}
	]
    return(
<footer className="footer section gray-bg">
	<div className="container">
		<div className="row">
			<div className="col-lg-4 mr-auto col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<div className="logo mb-4">
						<img src={Logo} alt="logo Novena" className="img-fluid"/>
					</div>
					<p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>

					<ul className="list-inline footer-socials mt-4">
						{socialMedia.map((social, index) => (
							<li className="list-inline-item" key={index}><a href={social.url}><i className={social.icone}></i></a></li>
							))}
					</ul>
				</div>
			</div>

			{ footerLinks.map((links, index) => (
				<div className="col-lg-2 col-md-6 col-sm-6" key={index}>
					<div className="widget mb-5 mb-lg-0">
						<h4 className="text-capitalize mb-3">{links.title}</h4>
						<div className="divider mb-4"></div>
						
					</div>

					{links.submenu.map((submenu, index) => (
						<ul className="list-unstyled footer-menu lh-35" key={index}>
							<li>
								<a href={submenu.url}>{submenu.title}</a>
							
							</li>
							</ul>
					))}
					
				</div>
			))}

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget widget-contact mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">Get in Touch</h4>
					<div className="divider mb-4"></div>

					{getIntouch.map((info, index) => (
						<div className="media mb-4" key={index}>
							<i className={info.icon}></i>
							<div className="media-body ml-3">
								<h6 className="text-capitalize mb-1">{info.info}</h6>
								<a href={info.link}>{info.contactInfo}</a>
							</div>
						</div>
					))}
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
						<form action="/" className="subscribe">
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
    )
}

export default Footer ;