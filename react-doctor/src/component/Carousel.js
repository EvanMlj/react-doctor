import React from "react";
import Slider from "react-slick";

const Carousel = ({ items }) => {

  const countPropritiesInItems = (items) => {
    if (items.length === 0 ) {
      return 0 ;
    }

    const sampleItem = items[0]; 
    const propertiesCount = Object.keys(sampleItem).length ;

    return propertiesCount ; 
  }
  const numberOfProperties = countPropritiesInItems(items) ;

  const getCarouselSettings = (numberOfProperties) => {
  const settingsMap = {
    1: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
    3: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
    
    4: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  };

  return settingsMap[numberOfProperties] || null; // Default settings if not found
};

    const settings = getCarouselSettings(numberOfProperties) ;
    console.log(settings) ;
    console.log(numberOfProperties) ;

    if(!settings){
      return null;
    }

    if (numberOfProperties === 1){
      return (
        <Slider {...settings}>
          {items.map((item, index) => (
            <div className="client-thumb" key={index}>
              <img src={item.img} alt="clients-logo" className="img-fluid" />
            </div>
          ))}
        </Slider>
      )
    }
    else if (numberOfProperties === 3) {
      return (

        <Slider {...settings}>
          {items.map((item, index) => (
            <div className="testimonial-block" key={index}>
              <div className="client-info">
                <h4>{item.title}</h4>
                <span>{item.author}</span>
              </div>
              <p>
                {item.message}
              </p>
              <i className="icofont-quote-right"></i>
            </div>
          ))}
        </Slider>
      );
    } else if (numberOfProperties === 4) {
      return (
        <Slider {...settings}>
          {items.map((item,index) => (
            <div className="testimonial-block style-2 gray-bg" key={index}>
              <i className="icofont-quote-right"></i>

              <div className="testimonial-thumb">
                <img src={item.img} alt="doctor portrait" className="img-fluid" />
              </div>

              <div className="client-info">
                <h4>{item.title}</h4>
                <span>{item.author}</span>
                <p>{item.message}</p>
              </div>
            </div>
          ))}
        </Slider>
      )
 
};

}

export default Carousel;


// const getCarouselSettings = (numberOfProperties) => {
//   if(numberOfProperties === 1){

//   }
// }

  // const settingsTestimonialHome = {
  //   slidesToShow: 2,
  // slidesToScroll: 2,
  // infinite: true,
  // dots: true,
  // arrows:false,
  // autoplay: true,
  // autoplaySpeed: 6000,
  // responsive: 
  // [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow:2,
  //       slidesToScroll:2,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 900,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   },{
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]
  // };

//   const settingsTestimonialAbout = {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,
//     dots: true,
//     arrows: false,
//     autoplay: true,
//     vertical: true,
//     verticalSwiping: true,
//     autoplaySpeed: 6000,
//     responsive: 
//     [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const settingsClient = {
//     infinite: true,
//   arrows: false,
//   autoplay: true,
//   slidesToShow: 6,
//   slidesToScroll: 6,
//   autoplaySpeed: 6000,
//   responsive: 
//   [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow:6,
//         slidesToScroll: 6,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 900,
//       settings: {
//         slidesToShow:4,
//         slidesToScroll: 4
//       }
//     },{
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     }
//   ]
//   };
