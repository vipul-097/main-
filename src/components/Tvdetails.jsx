import React, { useEffect } from 'react'
import { useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { asyncloadtv, removetv } from '../actions/tvActions';
import { useNavigate,Link } from "react-router-dom"
import Footer from "../components/partials/Footer"
import Loader from './Loader';
const Tvdetails = () => {
  const {info} = useSelector((state)=>state.tv)
  const navigate = useNavigate();
    const {id} = useParams()
  const dispatch = useDispatch();
    useEffect(()=>{
    dispatch (asyncloadtv(id))
  return()=>{
    dispatch(removetv())
  }
  
  
  
    },[id]);

  

  return info? (
    <div 
style ={{
background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url("https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}")`,
backgroundPosition:"center",

}}

className='w-full h-[110vh] px-[4%] py-[2%] justify-around overflow-x-hidden   '>
  
<nav className='w-full'>
  <Link onClick ={()=>navigate(-1)}>
  <i className="ri-arrow-left-fill text-2xl font-semibold mr-2 text-zinc-200 hover:text-[#6556CD] mr-5 "></i>
  </Link>
  <a target="_blank" href={info.detail.homepage}>
     <i className="ri-earth-fill text-2xl font-semibold mr-2 text-zinc-200 hover:text-[#6556CD] mr-5 "></i>
  </a>
 <a target="_blank" href="">
 <i class="ri-external-link-line text-2xl font-semibold mr-2 text-zinc-200 hover:text-[#6556CD] mr-5"></i>
 </a>
 <a className='font-semibold mr-2 text-zinc-200 hover:text-[#6556CD] mr-5'target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>IMDB</a>
</nav>

<div className='flex w-full ' >
   

   <div className=' left  min-w-[35vh]' >
   <img className='w-[100%] h-[60vh] object-cover mt-10 rounded-md shadow-md mb-4 ' src= {`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`}alt="" />
 
    <div className='flex gap-2 mb-2 text-white font-semibold '>
    <h1>Available on platforms</h1>
  {info.watchproviders &&info.watchproviders.flatrate && info.watchproviders.flatrate.map(w=>
<img className='h-[40px] object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
    )
    }
    </div>
 
<div className='flex gap-2 mb-2 text-white font-semibold '>
<h1>Available to buy</h1>
  {info.watchproviders &&info.watchproviders.buy && info.watchproviders.buy.map(w=>
<img className='h-[40px] object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
    )
    }
</div>

<div className='flex gap-2 mb-2 text-white font-semibold'>
<h1>Available on rent</h1>
  {info.watchproviders &&info.watchproviders.rent && info.watchproviders.rent.map(w=>
<img className='h-[40px] object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
    )
    }
</div>

   </div>




<div className=' right  ml-[60px] min-w-[50vh] '>
<h1 className='text-5xl font-bold text-white mt-10'>{info.detail.original_title ||info.detail.original_name||info.detail.title}
<small className='text-2xl'></small>
</h1>

<div className='flex text-white items-center gap-2 w-[50vh]]'>
<div className='w-[40px] h-[40px] bg-yellow-400 flex items-center justify-center rounded-full mt-2 text-zinc-800 font-semibold '>
  {info.detail.vote_average }
</div>
<p className='mr-1'>Userscore</p>
{info.detail.first_air_date}
{info.detail.genres && info.detail.genres.map((g)=>g.name).join(",")}

</div>
<h1 className='text-2xl text-white italic mb-2'>{info.detail.tagline}</h1>
<p className='text-2xl font-semibold text-white'>Overview</p>
<p className='text-zinc-200 w-[70%] mb-2'>{info.detail.overview}</p>
<p className='text-2xl font-semibold text-white'>Translated</p>

<p className='text-white  mt-2 mb-4 w-[30%] '>{info.translations.map(t=>t).join (",").slice(0,150)}</p>



<Link to ="/tv/details/:id/trailer" className='bg-[#6556CD] px-3 py-2 rounded-md text-white mt-2'>Play trailer</Link>

</div>




</div>
  
<h1 className='text-zinc-200 text-3xl text-bold '>Recommendations & Similar</h1>
<Footer data ={info.recommendations ?info.recommendations:info.similar}/>




</div>





    
  ):(
    <Loader/>
  )
  
}

export default Tvdetails