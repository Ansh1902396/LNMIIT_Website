import React from 'react'

const Records = [
  {
    t: '100+',
    d: 'Research Published Nationaly'
  },
  {
    t: '69+',
    d: 'Research Published Nationaly'
  },
  {
    t: '100+',
    d: 'Research Published Nationaly'
  },
]

function Achievments() {

  return (
    <div>
        <div className='flex flex-row gap-x-10 divide-x-2  divide-gray-500 p-6 justify-center '>
          
              <div className='text-center px-8'>
              <h1 className='font-bold text-3xl'>
                100+                
              </h1>
              <p className='px-5'>
              Research Published Nationaly
              </p>
            </div>

            <div className='text-center px-8'>
              <h1 className='font-bold text-3xl'>
                100+                
              </h1>
              <p className='px-5'>
              Research Published Nationaly
              </p>
            </div> <div className='text-center px-8'>
              <h1 className='font-bold text-3xl'>
                100+                
              </h1>
              <p className='px-5'>
              Research Published Nationaly
              </p>
            </div>
           
      </div>
    </div>
  )
}

export default Achievments