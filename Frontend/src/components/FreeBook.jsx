import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import list from '../assets/list.json';
import Cards from './Cards';

function FreeBook() {
  
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  const filterData = list.filter((data)=>data.category==="Free"); 
 

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'> 
        <div>
        <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1> 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam. Tempora amet atque expedita, quae corrupti totam sed pariatur corporis at veniam est voluptas animi!</p>
        </div> 

            <div>
        <div className="slider-container">
      <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>

    </div> 


    </>
  )
}

export default FreeBook