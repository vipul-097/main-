import React  from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {

  return (
    <>
<div className='w-[20%] h-screen border -r-2 border-zinc-400 p-10 '>
  
  <h1 className='mb-10'> 
<i className="ri-tv-fill text-2xl text-[#6556CD] mr-2" ></i>
<span className='text-2xl font-semibold text-white'>Cinemaify</span>
</h1>


    
 
<nav>
<h1 className='text-lg text-bold text-white mb-5'>New Feeds</h1>
    
<Link to="/trending" className=' hover:bg-[#6556CD] p-5 rounded w-full inline-block text-zinc-200 '>
    <i className="ri-fire-fill mr-2"></i>
Trending
    </Link>
<Link to ="/popular" className= ' hover:bg-[#6556CD] p-5 rounded w-full inline-block text-zinc-200 '>
<i class="ri-bard-fill mr-2"></i> Popular
</Link>
<Link to="/movies" className= ' hover:bg-[#6556CD] p-5 rounded w-full inline-block text-zinc-200 '>
<i className="ri-movie-2-fill mr-2"></i>Movies
</Link>
<Link to ="tvshows" className= ' hover:bg-[#6556CD] p-5 rounded w-full inline-block text-zinc-200  '>
<i class="ri-tv-fill mr-2"></i>Tv Shows
</Link>
<Link to="/people" className= ' hover:bg-[#6556CD] p-5 rounded w-full inline-block text-zinc-200  '>
<i class="ri-team-fill mr-2"></i> People
</Link>


</nav>

<hr />
<h1 className='text-xl text-bold text-white mt-5 mb-2'>Website Information</h1>
<Link className= ' hover:bg-[#6556CD] p-5 rounded w-full inline-block text-zinc-200 '>
<i class="ri-information-fill mr-2"></i>About Cinemaify
</Link>

<Link className= ' hover:bg-[#6556CD] p-5 rounded w-full inline-block text-zinc-200 '>
<i class="ri-phone-fill mr-2"></i>Contact Us
</Link>


</div>
  
    </>
  )
}

export default Sidenav