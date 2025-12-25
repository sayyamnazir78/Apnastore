import React,  {useState} from 'react'
import Laptop from './Laptop'
import Moblile from './Moblile'
import Footer from './Footer'
import {Other} from './Other'
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
    const [Catogary , setCatogary] = useState("all")
  return (
    <>
    <div className='w-full h-14 md:h-20 bg-black  text-center py-3   '> <h1 className=' text-white text-2xl font-bold  md:text-5xl md:font-extrabold md:tracking-[0.3em] '>SADEEQ STORE</h1>
    </div>
    <div className="bg-white text-black mt-5 py-3">
  <marquee className="text-2xl font-bold">
    ........WELCOME TO SADEEQ STORE........
    
  </marquee>
  
</div>
<div className='w-full h-14 bg-slate-300 flex justify-start gap-4'><button onClick={()=> setCatogary('all')} className='w-20 h-10 bg-slate-300  font-serif text-black p-4'>ALL</button>
<button onClick={() => setCatogary('Laptop')} className='w-20 h-10 bg-slate-300  font-serif text-black p-4'>LAPTOPS</button>
<button onClick={() =>setCatogary('Mobiles')} className='w-20 h-10 bg-slate-300  font-serif text-black p-4'>MOBILES</button>
<button onClick={() =>setCatogary('Other')} className='w-20 h-10 bg-slate-300  font-serif text-black p-4'>OTHERS</button> 
</div>

<section>
    {Catogary === 'all' && (
        <>
        <Laptop/>
        <Moblile/>
        <Other/>
        </>
    )}

    {Catogary === 'Laptop'&& <Laptop/>}
    {Catogary === 'Mobiles'&& <Moblile/>}
    {Catogary === 'Other'&& <Other/>}
</section>

  <a
      href="https://wa.me/923415394745"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
    >
      <FaWhatsapp size={30} />
    </a>

<Footer/>

</>

  )
}

export default Home