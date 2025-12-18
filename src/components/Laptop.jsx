import React, { useState } from 'react'
import baner from '../assets/banner.jpeg'
import p1 from '../assets/r1.jpeg'
import p2 from '../assets/r2.jpeg'
import p3 from '../assets/Asus.jpeg'
import p4 from '../assets/dell 3120.jpeg'
import p5 from '../assets/hp g6.jpeg'
import p6 from '../assets/lenvo.jpeg'
import p7 from '../assets/m7.jpeg'

const Laptop = () => {
  const [readMore, setReadMore] = useState(false);
  const data = [{ id: 1, productname: "Dell Chromebook 3100", productcode: "10001 ", price: "15000 ", orignalprice: "21000", description: " 360 Touch Display | BEST for Online Classes, Browsing, using android apps, watching movies, and Long battery hour Use.  3 Cell Li-Po Battery (8-9) Hours Battery 4GB Ram with 32 GB storage", productimag: p1, },
  { id: 2, productname: "Acer Chromebook Spin 11", productcode: "10002 ", price: "15000 ", orignalprice: "30000", description: " BEST for Online Classes, Browsing, using android apps, watching movies, 8 Hours of Battery Timing, ntel HD Graphics 500 ", productimag: p2, },
  { id: 3, productname: "ASUS C204", productcode: "10003 ", price: "12,999 ", orignalprice: "25000", description: " Display: 11.6-inch HD (1366 x 768), Anti-Glare, Processor: Intel Celeron N4020 RAM: 4GB LPDDR4 torage: 32GB Battery: Upto 10-12 hours ", productimag: p3, },
  { id: 4, productname: "Dell 3120 Touchscreen", productcode: "10004 ", price: "11,999.00 ", orignalprice: "19000", description: " CPU and Processor: Dual Core CPU Intel 4GB RAM 16GB Storage 11.6 Inches Display Celeron 2.4 GHz ", productimag: p4, },
  { id: 5, productname: "Lenovo Chrome OS", productcode: "10005 ", price: "13000 ", orignalprice: "18000", description: " Display: 11.6 Touch Screen Playstore Supported Processor: MediaTek MTK 8173C Memory: 4 GB DDR4  ", productimag: p5, },
  { id: 6, productname: "Hp g6 Playstore", productcode: "10006 ", price: "18000 ", orignalprice: "30000", description: " 16GB Storage + 64GB USB Intel HD Graphics 500  Playstore Supported Internet Browsing Best For Online classes  ", productimag: p6, },

  { id: 7, productname: "Acer Spin", productcode: "10007 ", price: "11999 ", orignalprice: "20000", description: "  ", productimag: p7, },


  ]
  return (
    <>
      <h1 className='font-extrabold text-3xl mt-44 ml-10 '>Laptops</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="shadow-lg p-4 h-auto relative rounded-lg border hover:shadow-black"
          >
            <img src={item.productimag} alt={item.productname} loading="lazy" className="w-full h-40 object-cover rounded-md" />

            <h2 className="text-xl font-bold mt-2">{item.productname}</h2>
            <div className='flex justify-between mt-3'><p className="text-gray-600">Rs: <strong>{item.price} </strong></p>
              <p className="text-gray-600 line-through">Rs: {item.orignalprice}</p>
            </div>
            <p className="text-gray-600 text-xs mt-5 mb-16">
              {readMore === item.id
                ? item.description
                : item.description.slice(0, 80) + "..."}

              {/* Read More / Less */}
              <button
                onClick={() => setReadMore(readMore === item.id ? null : item.id)}
                className="text-blue-600 text-sm  hover:underline"
              >
                {readMore == item.id ? "Read Less" : "Read More"}
              </button>
            </p>




            <button className="bg-black text-white px-4 py-2 rounded-2xl absolute bottom-5 right-2  mt-3" onClick={() =>
              window.open(
                'https://wa.me/923415394745?text=Hello%20I%20am%20interested%20in%20your%20products',
                '_blank'
              )}>
              Contact Us
            </button>
          </div>
        ))}
      </div>

    </>

  )
}

export default Laptop