import React from 'react'

function Card ({item}) {
  return (
   <>
   <div className='mt-4 my-3 p-3'>
   <div className="card w-92 bg-base-100 shadow-xl hover:shadow-gray-600 px-1 transition-all hover:scale-105 duration-200">
  <figure><img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=626&ext=jpg&ga=GA1.1.412201418.1699648792&semt=sph" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex  justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="badge badge-outline hover:bg-white hover:text-black transition-all cursor-pointer px-2 py-1 rounded-full hover:border-black">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Card