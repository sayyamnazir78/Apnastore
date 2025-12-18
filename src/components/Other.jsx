import React, {useState} from 'react'
import O1 from '../assets/Tripod.jpg'
import O2 from '../assets/stand.jpg'
import O3 from '../assets/m stand.jpg'
import O4 from '../assets/Airpods.jpg'

export const Other = () => {
     const [readMore, setReadMore] = useState(false);
      const data = [{ id: 1, productname: "Tripod Camera Stand With Mobile Holder ", productcode: "10001 ", price: "2450 ", orignalprice: "3000", description: " Tripod TF-3120 Portable Lightweight 4 Sections Camera Black Made of high quality ABS, lightweight, easy to carry Stable built in level, can adapt to", productimag: O1, },
      { id: 2, productname: "Desktop Stand For Mobile & Tablet ", productcode: "10002 ", price: "2200 ", orignalprice: "2500", description: " Brand : JMARY, Model : MK-61, Material : Alluminium Alloy, Multi Angle Rotation, Anti slip & Anti Scratch, Weight : 230gm, Desktop Stand For ", productimag: O2, },
      { id: 3, productname: "Mobile Phone Stand", productcode: "10003 ", price: "565 ", orignalprice: "735", description: "  ", productimag: O3, },
      { id: 4, productname: "Audionic Airbud 425", productcode: "10004 ", price: "4090 ", orignalprice: "5000", description: " Buy complete range of True Wireless Earphones on Vmart.pk. We Offer home delivery all over Pakistan. ", productimag: O4, },
     
    
      ]
  return (
   <>
   <h1 className='font-extrabold text-3xl mt-44 ml-10 '>Others</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="shadow-lg p-4 h-auto relative  rounded-lg border hover:shadow-black"
          >
            <img src={item.productimag} alt={item.productname} loading="lazy" className="w-full h-40 object-cover rounded-md" />

            <h2 className="text-xl font-bold mt-2">{item.productname}</h2>
            <div className='flex justify-between mt-3'><p className="text-gray-600">Rs:<strong>{item.price} </strong></p>
              <p className="text-gray-600 line-through">Rs: {item.orignalprice}</p>
            </div>
            <p className="text-gray-600 text-xs mt-5 mb-12">
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




            <button className="bg-black text-white px-4 py-2 absolute bottom-5 right-2 rounded-2xl " onClick={() =>
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
