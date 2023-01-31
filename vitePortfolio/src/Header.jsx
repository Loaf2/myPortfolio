import React from 'react'
import './App.css'


export default function Header() {
  return (
    <div className='flex justify-between px-[20%] mt-14'>
        <span className="text-3xl font-bold">Lofe</span>
        <div className="flex gap-5">
        <a className="font-semibold text-2xl cursor-pointer" href="#aboutMeHref">ABOUT ME</a>
        <a className="font-semibold text-2xl cursor-pointer" href="#projectsHref">PROJECTS</a>
        </div>
    </div>
  )
}
