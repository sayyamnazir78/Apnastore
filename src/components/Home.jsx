import React,  {useState} from 'react'
import Laptop from './Laptop'
import Moblile from './Moblile'
import Footer from './Footer'
import {Other} from './Other'

const Home = () => {
    const [Catogary , setCatogary] = useState("all")
  return (
    <>
    <div className='w-full h-14 md:h-20 bg-black  text-center py-3   '> <h1 className=' text-white text-2xl font-bold  md:text-5xl md:font-extrabold md:tracking-[0.3em] '>SADEEQ STORE</h1>
    </div>
    <div class="bg-white text-black mt-5 py-3">
  <marquee class="text-2xl font-bold">
    ........WELCOME TO Sadeeq STORE........
    
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

<Footer/>

</>

  )
}

export default Home