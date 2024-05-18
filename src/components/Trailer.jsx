import React from 'react'
import ReactPlayer from "react-player"
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
const Trailer = () => {
   const {pathname} = useLocation();
   const category = pathname.includes("movie") ? "movie" :"tv"
   const ytvideo = useSelector(state=>state[category].info.videos);
  
  return (
    <div className='bg-zinc-900 h-screen w-full flex items-center justify-center'>
    <ReactPlayer height={600} width={1400} url ={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>
      </div>
  )
}

export default Trailer 