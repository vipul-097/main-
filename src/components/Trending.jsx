import React, { useEffect, useState } from 'react'
import Topnav from "./partials/Topnav"
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "../components/axios"
import Card from './partials/Card'
import Dropdown from "./partials/Dropdown"
import { useNavigate,Link } from "react-router-dom"

const Trending = () => {
  const navigate = useNavigate();
const [trending, settrending] = useState([])
const [category, setcategory] = useState("all")
const [page, setpage] = useState(1)
const [hasMore, sethasMore] = useState(true)

const refresh = async ()=>{
  if(trending.length === 0 ){
   gettrending()
  }else {
settrending([])
setpage(1)
gettrending();
  }
}







const gettrending = async()=>{
  try {
    const {data} = await axios.get(`/trending/${category}/week?page=${page}`)
    if(data.results.length >0){
      settrending((previous)=>[...previous,...data.results]);
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




  return trending ? (
  
  <div className='w-full h-screen'>


    <div className=' w-full h-[10vh] flex items-center justify-between p-3'>
      <Link onClick ={()=>navigate(-1)}>
      <i className ="ri-arrow-left-fill text-xl font-semibold mr-2 text-[#6556CD] "></i>
      </Link>
<h1 className='text-2xl font-black text-white'>

   Trending</h1>
<Topnav/>
<Dropdown title="category" options ={["tv","movie","all"]} func ={(e)=>setcategory(e.target.value)}/>
    </div>

<InfiniteScroll 
dataLength={trending.length}
next={gettrending}
hasMore={hasMore}
loader={<h4>Loading...</h4>}


>
<Card data={trending} title = {category} />
</InfiniteScroll>
  






    
    </div>
  
  ):(
    <Loader/>
  )
}
export default Trending