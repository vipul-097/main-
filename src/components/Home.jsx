import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import Header from './partials/Header';
import Footer from './partials/Footer';
import axios from "./axios"
import Dropdown from "./partials/Dropdown"
import Loader from './Loader';

function Home() {
  const [wallpaper, setwallpaper] = useState(null)
const [movies, setmovies] = useState(null);
const [category, setcategory] = useState("all")
const trending = async()=>{
    try {
        const {data} = await axios.get("/trending/all/day");
        
let random = data.results[(Math.random()* data.results.length +1).toFixed()]
    setwallpaper(random);  
   
    
    } catch (error) {
        console.log(error)
    }
}
const gettrending = async()=>{
  try {
      const {data} = await axios.get(`/trending/${category}/day`);
      setmovies(data.results) 
 
  
  } catch (error) {
      console.log(error)
  }
}

useEffect(()=>{
!wallpaper &&  trending();
 !movies && gettrending();
},[category])






  return wallpaper ? (
  <>
<Sidenav/>
<div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
  <Topnav/>
  <Header data = {wallpaper}/>
  <div className='flex items-center justify-between w-full p-3 '>
    <h1 className='font-black text-2xl text-zinc-400 ml-2'>Trending</h1>
    <Dropdown title="filter" options ={["tv","movie","all"]}  func={(e)=>setcategory(e.target.value)} />
    </div>
  <Footer data ={movies}/>
</div>

  </>
  ):(
    <Loader/>
  )
}

export default Home;