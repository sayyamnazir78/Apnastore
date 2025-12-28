import React from 'react'
import { FaFacebook, FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <section>
            <div className='w-full mt-16 h-96 bg-black ' >
                <h1 className='text-white font-bold text-2xl px-9 text-center tracking-normal border-b-2 py-4'>SADEEQ STORE</h1>
                <div className=' '>
                    <div className=' text-left mb-8  text-white mt-10 px-9 '>
                        <h1 className='mt-5'>Call: <strong>03197684713</strong></h1>
                        <h1 className='mt-5'>Whatsapp: <strong>03197684713</strong></h1>
                        <h1 className='mt-5'> Tiktok: <strong>@sadeeq.store0</strong></h1>


                    </div>
                    <div className="flex justify-center mt-3 gap-4 text-2xl">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/923498222027"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border-white border-2 rounded-full p-1  hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border-white border-2 rounded-full p-1  hover:scale-110 transition"
      >
        <FaFacebook />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border-white border-2 rounded-full p-1  hover:scale-110 transition"
      >
        <FaInstagram />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@sadeeq.store0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border-white border-2 rounded-full p-1  hover:scale-110 transition"
      >
        <FaTiktok />
      </a>

    </div>
                    
                </div>
                <p className='text-center align-bottom border-t-2 text-white text-xl mt-12 py-4'>2025 SADEEQSTORE. All rights reverved ❤.</p>
            </div>
        </section>
    )
}

export default Footer