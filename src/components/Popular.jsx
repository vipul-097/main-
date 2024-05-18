import React, { useEffect, useState } from 'react'
import axios from '../components/axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Card from './partials/Card';
import { useNavigate,Link } from "react-router-dom"




const Popular = () => {
  const navigate = useNavigate();
  const [popular, setpopular] = useState([])
  const [category, setcategory] = useState("movie")
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)

  const refresh = async ()=>{
    if(popular.length === 0 ){
     getpopular()
    }else {
  setpopular([])
  setpage(1)
  getpopular();
    }
  }








  const getpopular = async()=>{
    try {
      const {data} = await axios.get(`/${category}/popular?page=${page}`)
      if(data.results.length >0){
        setpopular((previous)=>[...previous,...data.results]);
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






  return (
    <div className='w-full h-screen'>


    <div className=' w-full h-[10vh] flex items-center justify-between p-3'>
    <Link onClick ={()=>navigate(-1)}>
      <i className ="ri-arrow-left-fill text-xl font-semibold mr-2 text-[#6556CD] "></i>
      </Link>
<h1 className='text-3xl font-black text-white'> Popular</h1>
<Topnav/>
<Dropdown title="category" options ={["tv","movie"]} func ={(e)=>setcategory(e.target.value)}/>
    </div>

<InfiniteScroll 
dataLength={popular.length}
next={getpopular}
hasMore={hasMore}
loader={<h4>Loading...</h4>}


>
<Card data={popular} title = {category} />
</InfiniteScroll>
  

    </div>
  
  )
  
}

export default Popular