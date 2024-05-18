import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "../axios"
function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([])
  const getsearches = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
   setsearches(data.results)

    } catch (error) {
      console.log(error)
    }
   }
 
  
  useEffect(()=>{
    getsearches();
  },[query])
  return (

 

    <div className='w-full h-[10vh]  flex items-center justify-center relative'>
<i className="ri-search-2-line text-3xl mr-2 text-zinc-300"></i>
<input onChange={(e)=>setquery(e.target.value)} 
value ={query}
className=' text-xl w-[60%] h-[60%] rounded-md bg-transparent shadow p-3 text-zinc-300 outline-none' type="text" placeholder='search' />
{query.length > 0 && ( <i onClick={()=>setquery("")}  className="ri-close-line text-3xl mr-2 text-zinc-300"></i>)}


<div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] z-20  overflow-auto '>

{searches.map((s,i)=> <Link to ={`${s.media_type}/details/${s.id}`}  key ={i}className='inline-block  w-full p-2 flex items-center '>
<img className='w-[10vw] h-[10vh] rounded object-contain z-40 mr-2' src={`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`} alt="" />

<span className='z-40'>{s.name || s.originals_name || s.original_title}</span>
</Link>)}




</div>




    </div>





  )
}

export default Topnav