import React, { useEffect } from 'react'
import { Outlet, useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { asyncloadmovie, removemovie } from '../actions/movieActions';
import { useNavigate,Link } from "react-router-dom"
import Footer from "../components/partials/Footer"
import Loader from './Loader';

const Moviedetails = () => {



const {info} = useSelector((state)=>state.movie)
const navigate = useNavigate();
  const {id} = useParams()
const dispatch = useDispatch();
  useEffect(()=>{
  dispatch (asyncloadmovie(id))
return()=>{
  dispatch(removemovie())
}



  },[id]);

  return info ? (
<div 
style ={{
background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url("https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}")`,
backgroundPosition:"center",

}}

className='w-full  px-[4%] py-[2%] h-[140vh] justify-around relative '>
  
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
<a className='font-semibold mr-2 text-zinc-200 hover:text-[#6556CD] mr-5'target="_blank" href={`https://www.imdb.com/title/${info.detail.imdb_id || info.external_id.imdb_id}`}>IMDB</a>

</nav>

<div className='flex w-full h-[90vh]' >
   

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




<div className=' right  ml-[60px]  max-w-[60vw]'>

<h1 className='text-5xl font-bold text-white mt-10'>{info.detail.original_title ||info.detail.original_name||info.detail.title}
<small className='text-2xl'>({info.detail.release_date.split("-")[0]})</small>
</h1>

<div className='flex text-white items-center gap-2 '>
<div className='w-[40px] h-[40px] bg-yellow-400 flex items-center justify-center rounded-full mt-2 text-zinc-800 font-semibold '>
  {info.detail.vote_average }
</div>
<p className='mr-1'>Userscore</p>
{info.detail.release_date}
{info.detail.genres && info.detail.genres.map((g)=>g.name).join(",")}
<p>{info.detail.runtime}min</p>
</div>
<h1 className='text-2xl text-white italic mb-2'>{info.detail.tagline}</h1>
<p className='text-2xl font-semibold text-white'>Overview</p>
<p className='text-zinc-200 mb-2'>{info.detail.overview}</p>
<p className='text-2xl font-semibold text-white'>Translated</p>
<div className='text-white  mt-2  mb-4 w-[40vw] '>{info.translations.map(t=>t).join (",").slice(0,130)}</div>

<Link to ="/movie/details/:id/trailer" className='bg-[#6556CD] px-3 py-2 rounded-md text-white mt-2'>Play trailer</Link>

</div>




</div>
<hr />
  <h1 className='text-zinc-200 text-3xl text-bold '>Recommendations & Similar</h1>
<Footer data ={info.recommendations ?info.recommendations:info.similar}/>




</div>





    
  ):(
    <Loader/>
  )
}

export default Moviedetails