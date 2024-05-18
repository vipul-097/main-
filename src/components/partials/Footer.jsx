import React from 'react'
import { Link } from 'react-router-dom'

function Footer({data,func}) {
   
  return (
    <div className='w-full h-[40vh] p-2 '>
   

<div className='w-[100%]  flex overflow-x-auto'>
{ data && data.map((d,i)=><Link to ={`/${d.media_type || title}/details/${d.id}`} key={i} className='min-w-[15%]   rounded-md shadow  mr-2'>
  <img className=' min-w-[15%] h-[25vh] object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`} alt="" />
  <p className='text-white font-semibold text-md'>{d.name || d.originals_name || d.original_title}</p>
  <p className='text-white text-xs font-semibold'>{d.overview .slice(0,50)}...
  </p>
</Link>)}




</div>
  </div>
  )
}

export default Footer