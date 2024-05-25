import React, { useEffect, useState } from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'
import axios from 'axios';
function Course () {
 const[book,setbook]=useState([])
 useEffect(()=>{
 const getbook=async()=>{
    try{
    const res=await axios.get("http://localhost:4001/book");
    console.log(res.data);
    setbook(res.data)
    }
    catch(error){
        console.log(error)
    }
 }
 getbook();

 },[])
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className=' mt-28 items-center justify-center text-center'>
            <h1 className='text-white text-2xl md:text-4xl'>We delighted tjhat you are <span className=' text-orange-400'>Here! :)</span></h1>
            <p className=' text-lg mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minus accusantium id velit? Quaerat rerum ratione est iusto dolorum modi. Suscipit veniam molestiae harum officiis porro iste nesciunt quisquam ab.</p>
            <Link to={"/"}>
            <button className='px-4 py-4 mt-4 bg-orange-400   w-40 rounded-lg text-black font-bold text-lg sm:w-32 sm:text-sm hover:bg-orange-300 border border-black shadow-zinc-950' >
                Back
            </button>
            </Link>
        </div>
        <div className=' mt-12 grid grid-cols-1 md:grid-cols-4 '>
            {
           book.map((item)=>(
            <Card key={item.id} item={item}/>
           ))
        }
        </div>
    </div>
   </>
  )
}

export default Course