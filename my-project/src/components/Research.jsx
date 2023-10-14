import React from 'react'
import Card from './UI/Card'

function Research() {
  return (
    <div>
        <div>
            <div className='flex flex-row gap-x-6 divide-x-4 justify-center py-8 '>
                <h1 className='text-4xl font-semibold py-8'>Latest Research</h1>
                <p className='px-6 text-2xl py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet placeat incidunt vero? Animi eum sit veritatis,<br /> itaque repudiandae obcaecati vel voluptatem atque ex officiis laborum quod modi porro iste. Voluptas.</p>
            </div>

            <div className="border-b border-black w-2/3 mx-auto my-4 border-2"></div>

        <div className='flex flex-row justify-center gap-x-4'>
            <Card/>
            <Card/>
            <Card/>
        </div> 
        </div>
    </div>
  )
}

export default Research