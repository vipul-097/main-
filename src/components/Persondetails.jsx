
import React, { useEffect } from 'react'
import {  useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { asyncloadperson, removeperson } from '../actions/personActions';
import { useNavigate,Link } from "react-router-dom"
import Footer from "../components/partials/Footer"
import Loader from './Loader';


const Persondetails = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const {info} = useSelector((state)=>state.person)
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch (asyncloadperson(id))
  return()=>{
    dispatch(removeperson())
  }
},[id]);



  return info ? (
    <div className='px-[10%] w-full flex flex-col  bg-zinc-800  h-[160vh] '>

<nav className='w-full'>
  <Link onClick ={()=>navigate(-1)}>
  <i className="ri-arrow-left-fill text-2xl font-semibold mr-2 mt-2 text-zinc-200 hover:text-[#6556CD] mr-5 "></i>
  </Link>
  
</nav>

<div className='w-full flex'>
{/* part 2 left poster and details */}

<div className='w-[26%]'>
<img className='w-[100%] h-[55vh] object-cover mt-10 rounded-md shadow-md mb-4 ' src= {`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}alt="" />
<hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />
<div className='text-2xl text-white flex gap-x-7 '>
<a target="_blank" href={`https://facebook.com/${info.externalid.facebook_id}`}>
 <i class="ri-facebook-fill text-2xl font-semibold mr-2 text-zinc-200 hover:text-[#6556CD] mr-5"></i>
 </a>

 <a target="_blank" href={`https://instagram.com/${info.externalid.instagram_id}`}>
 <i class="ri-instagram-line text-2xl font-semibold mr-2 text-zinc-200 hover:text-[#6556CD] mr-5"></i>
 </a>
 <a target="_blank" href={`https://wikidata.org/${info.externalid.wikidata_id}`}>
 <i class="ri-earth-fill text-2xl font-semibold mr-2 text-zinc-200 hover:text-[#6556CD] mr-5"></i>
 </a>

</div>
{/* personal infromation */}
<h1 className='text-2xl text-zinc-400 font-semibold my-5'>Person Info</h1>
<h1 className='text-lg text-zinc-400  font-semibold'>Known for</h1>
<h1 className='text-zinc-400'>{info.detail.known_for_department}</h1>
<h1 className='text-lg text-zinc-400  font-semibold'>Gender</h1>
<h1 className='text-zinc-400'>{info.detail.gender === 2?"Male":"Female"}</h1>
<h1 className='text-lg text-zinc-400  font-semibold'>Death Day</h1>
<h1 className='text-zinc-400'>{info.detail.deathday ? info.detail.deathday :"Still Alive"}</h1>
<h1 className='text-lg text-zinc-400  font-semibold'>Birth Place</h1>
<h1 className='text-zinc-400'>{info.detail.place_of_birth}</h1>

<h1 className='text-lg text-zinc-400  font-semibold'>Also Known As</h1>
<h1 className='text-zinc-400'>{info.detail.also_known_as.join(",")}</h1>

</div>

{/* part 3details and information */}

<div className='w-[74%] mt-10 ml-[5%]'>
<h1 className='text-6xl text-zinc-300 font-black'>{info.detail.name}</h1>
<h1 className='mt-4 text-zinc-400 font-bold text-3xl mb-3'>Biography</h1>
<p className='text-md w-[90%] text-zinc-400'>{info.detail.biography}</p>
<Footer data ={info.combinedCredits.cast}/>
</div>
</div>
















    </div>
  ):(
    <Loader/>
  )
}

export default Persondetails