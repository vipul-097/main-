import React, { useEffect, useState } from 'react'
import axios from "../components/axios"
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './partials/Card';
import { useNavigate,Link } from "react-router-dom"
import Loader from './Loader';
const People = () => {
    const [people, setpeople] = useState([])
    const navigate = useNavigate();
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    
    const refresh = async ()=>{
      if(people.length === 0 ){
       getpeople()
      }else {
    setpeople([])
    setpage(1)
    getpeople();
      }
    }
    
    
    
    
    
    
    
    const getpeople = async()=>{
      try {
        const {data} = await axios.get(`/person/popular?page=${page}`)
        if(data.results.length >0){
          setpeople((previous)=>[...previous,...data.results]);
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





  return people? (
    <div className='w-full h-screen'>


    <div className=' w-full h-[10vh] flex items-center  p-3'>
    <Link onClick ={()=>navigate(-1)}>
      <i className ="ri-arrow-left-fill text-xl font-semibold mr-2 text-[#6556CD] "></i>
      </Link>
<h1 className='text-3xl font-black text-white'> People</h1>


    </div>

<InfiniteScroll 
dataLength={people.length}
next={getpeople}
hasMore={hasMore}
loader={<h4>Loading...</h4>}


>
<Card data={people} title="person"  />
</InfiniteScroll>
  






    
    </div>
  
  ):(
    <Loader/>
  )
  
}

export default People