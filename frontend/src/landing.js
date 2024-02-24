import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main className = "h-screen flex flex-row justify-center items-center bg-black border-black border-2">
        <div className = "border-r  p-4  border-white">
        <h1 className="text-white w-auto text-5xl merriweather-light">
          StoryForge.ai
          
        </h1>

        </div>
        <Link to="/ai">
        <button className = "text-white text-center font-bold border-white border-2 p-6 px-10  ml-4 hover:bg-white hover:text-black rounded-lg">
              GET STARTED
        </button>
        </Link>
       


    </main>
  )
}
