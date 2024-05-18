import React, { useEffect, useState } from 'react'
import axios from "../components/axios"
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from "../components/partials/Card"
import { useNavigate,Link } from "react-router-dom"
const Tvshows = () => {
  const navigate = useNavigate();
    const [tv, settv] = useState([])
    const [category, setcategory] = useState("popular")
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    
    const refresh = async ()=>{
      if(tv.length === 0 ){
       gettv()
      }else {
    settv([])
    setpage(1)
    gettv();
      }
    }
    const gettv = async()=>{
        try {
          const {data} = await axios.get(`/tv/${category}?page=${page}`)
          if(data.results.length >0){
            settv((previous)=>[...previous,...data.results]);
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
      
      },[category])











  return tv? (
    <div className='w-full h-screen'>


    <div className=' w-full h-[10vh] flex items-center justify-between p-3'>
    <Link onClick ={()=>navigate(-1)}>
      <i className ="ri-arrow-left-fill text-xl font-semibold mr-2 text-[#6556CD] "></i>
      </Link>
<h1 className='text-2xl font-black text-white'> Tv<span
>shows</span> </h1>
<Topnav/>
<Dropdown title="category" options ={["top_rated","popular","on_the_air","airing_today"]} func ={(e)=>setcategory(e.target.value)}/>
    </div>

<InfiniteScroll 
dataLength={tv.length}
next={gettv}
hasMore={hasMore}
loader={<h4>Loading...</h4>}


>
<Card data={tv} title ="tv" />
</InfiniteScroll>
  






    
    </div>
  
  ):(
  <Loader/>
  )

}

export default Tvshows