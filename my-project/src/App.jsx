import React from 'react'
import  Achievments from './components/Achievements'
import Research from './components/Research'

function App() {
  return (
    <div>
     <div className='flex flex-col p-7 px-20 gap-y-2'>
      <h1 className='text-3xl font-bold text-center'>Research And Innovation At LNMIIT</h1>
      <p className='break-normal text-center'>LNMIIT's Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit possimus ratione velit voluptatibus magni, eum perferendis inventore aut ipsum repellat omnis iure error laboriosam earum quo, nisi est animi eligendi?</p>
     </div>
     <div className="border-b border-black w-2/3 mx-auto my-4 border-2"></div>
     
      {/* achievments */}
      <Achievments/>
      <Research/>
    </div>
  )
}

export default App