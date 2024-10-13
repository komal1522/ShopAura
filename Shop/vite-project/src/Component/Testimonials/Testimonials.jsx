import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinHearts } from '@fortawesome/free-solid-svg-icons'; // Correct import of the grin hearts icon

// Testimonial data
const TestimonialData = [
    {
        id: 1,
        name: "Komal",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, corporis!",
        img: "https://plus.unsplash.com/premium_photo-1676955435336-368262b6fec8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D"
    },
    {
        id: 2,
        name: "Juhi",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, corporis!",
        img: "https://images.unsplash.com/photo-1719937206589-d13b6b008196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjl8fHxlbnwwfHx8fHw%3D"
    },
    {
        id: 3,
        name: "Anjali",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, corporis!",
        img: "https://plus.unsplash.com/premium_photo-1712029123642-3797c06440a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODh8fHxlbnwwfHx8fHw%3D"
    },
    {
        id: 4,
        name: "Anji",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, corporis!",
        img: "https://images.unsplash.com/photo-1720535594368-1aee84d11b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D"
    },
    {
        id: 5,
        name: "Munmun",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, corporis!",
        img: "https://plus.unsplash.com/premium_photo-1688045560212-b218aa2f110a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzV8fHxlbnwwfHx8fHw%3D"
    }
]

// Slider settings
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: TestimonialData.length, // Show all testimonials in one slide
    slidesToScroll: TestimonialData.length,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

// Testimonials component
const Testimonials = () => {
  return ( 
    <div className='py-16 bg-gray-50 mt-14 mb-12 dark:bg-slate-800 '>
        <div className='container mx-auto'>
          <div className='text-center mb-12 max-w-2xl mx-auto'>
            <p className='text-lg text-indigo-600 font-semibold uppercase tracking-wide' data-aos="fade-up">What our customers are saying</p>
            <h1 className='text-4xl font-bold  mb-4' data-aos="fade-up">Testimonials</h1>
            <p className='text-base text-gray-500' data-aos="fade-up">
              We value our customers' feedback. Here's what some of them have to say.
            </p>
          </div>

          <div data-aos="zoom-in">
            <Slider {...settings}>
                {TestimonialData.map((data) => (
                    <div key={data.id} className='my-6'>
                        <div className='relative flex flex-col items-center shadow-xl py-8 px-6 rounded-lg bg-gradient-to-r from-pink-200 to-purple-200 hover:from-purple-200 hover:to-pink-200 mx-4 transform transition duration-300 hover:scale-105'>
                            
                            {/* Decorative Accent Bar */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>

                            {/* Testimonial Image */}
                            <div className='mb-4'>
                                <img 
                                  src={data.img} 
                                  alt={data.name} 
                                  className='rounded-full w-24 h-24 object-cover border-4 border-white shadow-lg'
                                />
                            </div>

                            {/* Testimonial Text */}
                            <div className='flex flex-col items-center text-center'>
                                <p className='text-gray-600 italic mb-4'>
                                    "{data.text}"
                                </p>
                                <h1 className='text-xl font-bold text-gray-900 mb-2'>{data.name}</h1>

                                {/* Smiley Icon */}
                                <FontAwesomeIcon icon={faGrinHearts} className='text-yellow-500 text-3xl' />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
          </div>
        </div>
    </div>
  )
}

export default Testimonials
