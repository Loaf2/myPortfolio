import React from 'react'
import html from './assets/html.svg'
import css from './assets/css.svg'
import js from './assets/js.svg'
import react from './assets/react.svg'
import tailwind from './assets/tailwind.svg'


export default function () {
  return (
    <div className="flex flex-col items-center mt-[15%]">
        <span className="text-8xl"><span className="text-9xl">S</span>kills</span>
        <div className='w-[50%] min-h-[200px] bg-[rgb(255,239,239)] p-2 px-4 skillsNote lato mt-10 text-3xl flex items-start justify-center gap-5'>
          <img src={html} alt="" className='w-[18%]'/>
          <img src={css} alt="" className='w-[18%]' />
          <img src={js} alt="" className='w-[16%] mt-2' />
          <img src={react} alt="" className='w-[18%]' />
          <img src={tailwind} alt="" className='w-[18%]' />

        </div>
    </div>
  )
}
