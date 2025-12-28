import React, {useState} from 'react'
import O1 from '../assets/Tripod.jpg'
import O2 from '../assets/stand.jpg'
import O3 from '../assets/m stand.jpg'
import O4 from '../assets/Airpods.jpg'
import O5 from '../assets/bag.jpg'
import O6 from '../assets/cspeaker.jpg'
import O7 from '../assets/laptopspeaker.jpg'
import O8 from '../assets/speaker.jpg'
import O9 from '../assets/minic.jpg'
import speaker1 from '../assets/speaker1.jpg'
import M10 from '../assets/M10.jpg'
import minij from '../assets/minij.jpg'
import wireh from '../assets/wireh.jpg'
import penc from '../assets/penc.jpg'



export const Other = () => {
     const [readMore, setReadMore] = useState(false);
      const data = [{ id: 1, productname: "Tripod Camera Stand With Mobile Holder ", productcode: "10001 ", price: "2450 ", orignalprice: "3000", description: " Tripod TF-3120 Portable Lightweight 4 Sections Camera Black Made of high quality ABS, lightweight, easy to carry Stable built in level, can adapt to", productimag: O1, },
      { id: 2, productname: "Desktop Stand For Mobile & Tablet ", productcode: "10002 ", price: "2200 ", orignalprice: "2500", description: " Brand : JMARY, Model : MK-61, Material : Alluminium Alloy, Multi Angle Rotation, Anti slip & Anti Scratch, Weight : 230gm, Desktop Stand For ", productimag: O2, },
      { id: 3, productname: "Mobile Phone Stand", productcode: "10003 ", price: "565 ", orignalprice: "735", description: "  ", productimag: O3, },
      { id: 4, productname: "Audionic Airbud 425", productcode: "10004 ", price: "4090 ", orignalprice: "5000", description: " Buy complete range of True Wireless Earphones on Vmart.pk. We Offer home delivery all over Pakistan. ", productimag: O4, },
      { id: 5, productname: "Laptop bag. ", productcode: "10005 ", price: "1800 ", orignalprice: "2500", description: " Premium quality laptop bag with smart design and strong stitching. Best choice for work and travel. ", productimag: O5, },
      { id: 6, productname: "Portable Computer Speakers ", productcode: "10006 ", price: "1,188 ", orignalprice: "2000", description: " Portable Computer Speakers USB Powered Desktop Mini Speaker Bass Sound  Music Player System Wired Small Speaker ", productimag: O6, },
      { id: 7, productname: "Pc Computer Speakers", productcode: "10007 ", price: "2500 ", orignalprice: "3500", description: " Pc Computer Speakers With Surround Sound Usb Wired Laptop Deep Bass For  Desktop - Fire Doors London", productimag: O7, },
      { id: 8, productname: "AUDIONIC MONSTER MS-100", productcode: "10008 ", price: "8000 ", orignalprice: "10000", description: " AUDIONIC MONSTER MS-100 delivers loud, clear sound with strong bass for an amazing music experience. ", productimag: O8, },
      { id: 9, productname: "1080p Hd Magnetic Wifi", productcode: "10009 ", price: "3,330 ", orignalprice: "4000", description: " Compact 1080p HD WiFi mini camera with strong magnetic mount. View live footage anytime through the HDSF app. ", productimag: O9, },
      { id: 10, productname: "Pc speaker", productcode: "10010 ", price: "2300", orignalprice: "3000", description: " High-quality PC speaker delivering powerful sound and deep bass for an enhanced audio experience. ", productimag: speaker1, },
      { id: 11, productname: "M10 Wireless Earbuds ", productcode: "10011 ", price: "1,750 ", orignalprice: "2200", description: " Enjoy crystal-clear sound with M10 Wireless Bluetooth Earbuds featuring noise cancellation and long-lasting performance. ", productimag: M10, },
      { id: 12, productname: "Mini jusier", productcode: "10012 ", price: "1,890 ", orignalprice: "2500", description: " Blend fresh juices on the go with this electric mini portable juicer. USB rechargeable with 4 powerful blades.", productimag: minij, },
      { id: 13, productname: "Airox.", productcode: "10013 ", price: "999", orignalprice: "1500", description: " Enjoy quality sound with Airox rechargeable handfree, long battery life and easy charging. ", productimag: wireh, },
      { id: 14, productname: "Spy Camera HD Quality.", productcode: "10014 ", price: "3200", orignalprice: "4000", description: " High-definition spy camera delivering clear video in a small and hidden design. Ideal for security use. ", productimag: penc, },
     
    
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
            <img src={item.productimag} alt={item.productname} loading="lazy" className="w-full h-72 object-cover rounded-md" />

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
