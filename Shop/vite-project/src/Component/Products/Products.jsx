import React from 'react'
import Img1 from "/img/img1.png";
import Img2 from "/img/img2.png";
import Img3 from "/img/img3.png";
import Img4 from "/img/img4.png";
import Img5 from "/img/img5.png";
import{FaStar} from "react-icons/fa6";

const productsData =[
    {
        id:1,
        img:Img1,
        title:"Women Ethnic",
        rating:5.0,
        author:"white",
        aosDelay:"0",
    },
    {
        id:2,
        img:Img2,
        title:"Women Western",
        rating:4.5,
        author:"Red",
        aosDelay:"200",
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        rating:4.7,
        author:"brown",
        aosDelay:"400",
    },
    {
        id:4,
        img:Img4,
        title:"Shoes",
        rating:5.0,
        author:"white",
        aosDelay:"300",
    },
    {
        id:5,
        img:Img5,
        title:"Watch",
        rating:4.4,
        author:"orange",
        aosDelay:"300",
    },
]
const Products = () => {
  return (
    <div className='mt-14 mb-12 bg-slate-400'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
           <p   data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
           <h1  data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
           <p  data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet ,
            consectetur adipisicing elit.
             Ipsa labor</p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'>
                {productsData.map((data)=>(
                    <div 
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id}

                    className='space-y-3'>
                        <img src={data.img} alt=""
                        className='h-[200px] w-[150px] object-cover rounded-md' />
                        <div>
                            <h3 className='font-semibold'>{data.title} 
                            </h3>
                            <p className='text-sm text-gray-600'>{data.color}</p>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-yellow-400'></FaStar>
                                <span>{data.rating}</span>
                            </div>
                        </div>
                    </div>

                ))}
                </div>
                {/* View all button */}
                <div className='flex justify-center'>
                  <button className='text-center mt-10 cursor-pointer 
                  bg-primary text-white  py-1 px-5
                  rounder-md '>View all Button</button>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products