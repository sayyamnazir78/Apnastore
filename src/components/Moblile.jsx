import React, {useState} from 'react'
import m1 from '../assets/iphone6.jpg'
import m2 from '../assets/iphone6s.jpeg'

import m3 from '../assets/iphone8.jpg'
import m4 from '../assets/iphone8..jpg'
import m5 from '../assets/iphone8+.jpg'
import m6 from '../assets/iphone7.jpg'
import m7 from '../assets/iphone7+.jpg'
import m8 from '../assets/iphone5.jpg'
import m9 from '../assets/iphone5p.jpg'
import m10 from '../assets/iphone6pta.jpg'


const Moblile = () => {
  const [readMore, setReadMore] = useState(false);
  const data = [{ id: 1, productname: "Apple iPhone 6 ", productcode: "10001 ", price: "6500 ", orignalprice: "7000", description: " Apple iPhone 6  16GB and 32 Silver and golden colour Good condition  ", productimag: m1, },
  {
    id: 2, productname: "Iphone 6plus", productcode: "10002 ", price: "7000 ", orignalprice: "8000", description: " Iphone 6 and 6plus. Both model available 10/9 condition.Only 3 pices available. 6K  and  8K. ", productimag: m2,
  },
  { id: 3, productname: "Iphone 8", productcode: "10003 ", price: "28000 ", orignalprice: "30000", description: " Iphone 8 128Gb. 97% battery health WaterpakAll ok  pta ", productimag: m3, },
 { id: 4, productname: "Iphone 8", productcode: "10004 ", price: "22000 ", orignalprice: "25000", description: " Iphone 8 64Gb. 95% battery health WaterpakAll ok non pta ", productimag: m4, },
  { id: 5, productname: "Iphone 8 plus. ", productcode: "10005 ", price: "29999 ", orignalprice: "32000", description: " Iphone 8 plus 64Gb. 97% battery health WaterpakAll ok non pta  ", productimag: m5, },
  { id: 6, productname: "I phone 7 ", productcode: "10006 ", price: "13000 ", orignalprice: "15000", description: " Iphone 7 92% battery health Waterpak Non pta", productimag: m6, },

  { id: 7, productname: "Iphone 7 plus. ", productcode: "10007 ", price: "15999 ", orignalprice: "20000", description: " Iphone 7 plus. 64Gb. 92% battery health Waterpak Non pta  Pta price 19999 ", productimag: m7, },
  { id: 8, productname: "Iphone 5. ", productcode: "10008 ", price: "3900 ", orignalprice: "5000", description: " Iphone 5.  91% battery health Waterpak Non pta   ", productimag: m8, },
  { id: 9, productname: "Iphone 5 PTA. ", productcode: "10009 ", price: "5999 ", orignalprice: "8000", description: " Iphone 5 . 10/10  92% battery health Waterpak pta   ", productimag: m9, },
  { id: 10, productname: "Iphone 6s. ", productcode: "10010 ", price: " 9999 ", orignalprice: "12000", description: " Iphone 6s.  92% battery health Waterpak   Pta approved   ", productimag: m10, },


  ]
  return (
    <>
      <h1 className='font-extrabold text-3xl mt-44 ml-10 '>Mobiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="shadow-lg p-4 h-auto relative rounded-lg border hover:shadow-black"
          >
            <img src={item.productimag} alt="" className="w-full h-72 object-cover rounded-md" />

            <h2 className="text-2xl font-bold mt-3">{item.productname}</h2>
            <div className='flex justify-between'><p className="text-gray-600">Rs: <strong>{item.price} </strong></p>
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

export default Moblile