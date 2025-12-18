import React from 'react'
import m1 from '../assets/m1.jpeg'
import m2 from '../assets/m2.jpeg'
import m3 from '../assets/m3.jpeg'
import m4 from '../assets/m4.jpeg'
import m5 from '../assets/m5.jpeg'
import m6 from '../assets/m6.jpeg'
import m7 from '../assets/m7.jpeg'

const Moblile = () => {
     const data =  [  { id: 1, productname:"techno spark", productcode:"10001 " , price:"27000 ", orignalprice:"35000", description:" this is hp brand laptop with higher discount " , productimag:m1, },
            { id: 1, productname:"infinix", productcode:"10001 " , price:"27000 ", orignalprice:"35000", description:" this is hp brand laptop with higher discount " , productimag:m2, },
            { id: 1, productname:"itel", productcode:"10001 " , price:"27000 ", orignalprice:"35000", description:" this is hp brand laptop with higher discount " , productimag:m3, },
            { id: 1, productname:"realme", productcode:"10001 " , price:"27000 ", orignalprice:"35000", description:" this is hp brand laptop with higher discount " , productimag:m4, },
            { id: 1, productname:"redme", productcode:"10001 " , price:"27000 ", orignalprice:"35000", description:" this is hp brand laptop with higher discount " , productimag:m5, },
            { id: 1, productname:"I phone 7 ", productcode:"10001 " , price:"10000 ", orignalprice:"35000", description:" this is hp brand laptop with higher discount " , productimag:m6, },
    
            { id: 1, productname:"samsung", productcode:"10001 " , price:"27000 ", orignalprice:"35000", description:" this is hp brand laptop with higher discount " , productimag:m7, },
    
    
        ]
  return (
    <>
    <h1 className='font-extrabold text-3xl mt-44 ml-10 '>Mobiles</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="shadow-lg p-4 h-96 rounded-lg border hover:shadow-black"
        >
          <img src={item.productimag} alt="" className="w-full h-40 object-cover rounded-md"/>

          <h2 className="text-2xl font-bold mt-3">{item.productname}</h2>
          <div className='flex justify-between'><p className="text-gray-600">Rs: <strong>{item.price} </strong></p>
          <p className="text-gray-600 line-through">Rs: {item.orignalprice}</p>
          </div>
          <p className='py-3'>{item.description}</p>
          

          <button className="bg-black text-white px-4 py-2 rounded-2xl mt-3" onClick={() =>
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