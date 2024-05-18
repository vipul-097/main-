import React from 'react'

function Header ({data}) {


  return  (
<div className='w-full h-[50vh] relative '>
  <img className='w-full h-[50vh] object-cover object-top' src = {`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`} alt="" />
  <p className='text-zinc-300 text-3xl left-[5%] font-bold absolute top-[50%]'>{data.title || data.original_title || data.original_name}</p>
  <p className='text-zinc-900  left-[5%]  absolute top-[65%] w-[70%]'>{data.overview .slice(0,200)}</p>
  <button className='bg-[#6556CD] px-3 py-2 left-[5%] text-white font-semibold  absolute top-[82%]'>Watch trailer</button>
</div>

  
  ) 
}

export default Header;
