import React from 'react'
import discord from './assets/discord.svg'

export default function Contacts() {
  return (
    <div className='flex flex-col items-center mt-40 gap-20'>
        <span className='text-7xl'>Contacts</span>
        <div className='flex gap-10 w-[50%] justify-center'>
            <img src={discord} alt="" className='w-[20%]' />
        </div>
    </div>
  )
}
