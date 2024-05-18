import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import { useNavigate,Link } from "react-router-dom"
import axios from "../components/axios"
import Card from './partials/Card';
const Movies = () => {
  const navigate = useNavigate();
    const [movies, setmovies] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)  

  const refresh = async ()=>{
    if(movies.length === 0 ){
     getmovies()
    }else {
  setmovies([])
  setpage(1)
  getmovies();
    }
  }

  const getmovies = async()=>{
    try {
      const {data} = await axios.get(`/movie/top_rated?page=${page}`)
      if(data.results.length >0){
        setmovies((previous)=>[...previous,...data.results]);
        setpage(page+1)
      }else{
  sethasMore(false)
      }
     
   
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
   refresh();
  
  },[])






  return (
    <div className='w-full h-screen'>


    <div className=' w-full h-[10vh] flex items-center justify-between p-3'>
    <Link onClick ={()=>navigate(-1)}>
      <i className ="ri-arrow-left-fill text-xl font-semibold mr-2 text-[#6556CD] "></i>
      </Link>
<h1 className='text-3xl font-black text-white'> Movies</h1>
<Topnav/>

    </div>

<InfiniteScroll 
dataLength={movies.length}
next={getmovies}
hasMore={hasMore}
loader={<h4>Loading...</h4>}


>
<Card data={movies} title="movie" />
</InfiniteScroll>
  

    </div>
  )
}

export default Movies