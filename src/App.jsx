import React from "react"
import Home from "./components/Home.jsx"
import './App.css'
import  {Routes, Route } from "react-router-dom"
import Trending from "./components/Trending.jsx"
import Popular from "./components/Popular.jsx"
import Movies from "./components/Movies.jsx"
import Tvshows from "./components/Tvshows.jsx"
import People from "./components/People.jsx"
import Moviedetails from "./components/Moviedetails.jsx"
import Tvdetails from "./components/Tvdetails.jsx"
import Persondetails from "./components/Persondetails.jsx"
import Trailer from "./components/Trailer.jsx"

function App() {
  return (

   
<div className=' bg-[#1F1E24]  w-full h-screen flex'>

<Routes>
<Route path ="/" element ={<Home/>} />
<Route path="/trending" element ={<Trending/>}/>
<Route path = "/popular" element ={<Popular/>} />
<Route path ="/movies" element ={<Movies/>} /> 




<Route path ="/tvshows" element ={<Tvshows/>} />
<Route path ="/people" element ={<People/>} />
<Route path ="/movie/details/:id" element ={<Moviedetails/>}/> 
<Route path="/movie/details/:id/trailer" element ={<Trailer/>} />
<Route path ="/tv/details/:id" element ={<Tvdetails/>}/>
<Route path="/tv/details/:id/trailer" element ={<Trailer/>} />
<Route path ="/person/details/:id" element ={<Persondetails/>}/>







</Routes>



</div>















  )
}

export default App
