'use client'

import React from 'react'

interface Props {
  data: any
}

export default function Button({data}: Props) {
  return (
    <button className='bg-blue-500 p-3 text-sm m-2 hover:scale-[1.02] transition-all rounded-sm text-white' onClick={() => console.log(data)}>Show data in console</button>
  )
}