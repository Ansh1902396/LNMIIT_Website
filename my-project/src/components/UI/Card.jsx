import React from 'react'
import name from "../../assets/3.png"

function Card() {
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg m-2 transform hover:scale-105 transition-transform">
      <div className="relative">
        <img
          className="w-full"
          src={name}
          alt="Card"
        />
        <div className="absolute bottom-0 left-4 bg-red-500 p-2 z-20  text-white font-bold">
          Card Title
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Heading</div>
        <p className="text-gray-700 text-base">
          Some example text to fill the card and provide some context.
        </p>
      </div>
      
    </div>
  )
}

export default Card