import React from 'react'
import {Link} from "react-router-dom"
const Card = ({data ,title}) => {
   console.log(title)
  return (
   <div className='w-full h-[90vh] overflow-y-auto flex flex-wrap justify-around '>
{data.map((c,i)=><Link to ={`/${c.media_type || title}/details/${c.id}`}
key ={i}className='w-[18%]   mr-2 mb-2 rounded-md shadow-2xl '>
  <img className='w-full h-[44vh] object-cover rounded-md  ' src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.profile_path ||c.poster_path}`} alt="" />
  <h1 className='text-m font-bold text-white'>{c.name || c.originals_name || c.original_title}</h1>
</Link>)}


   </div>
  )
}

export default Card