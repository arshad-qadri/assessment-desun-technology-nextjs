import EggList from '@/components/eggs/EggList'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="my-3 tracking-wide">
        <span className="opacity-50">Egg Module</span>
        <span className="opacity-75"> / Egg List</span>
      </div>
      <EggList/>
    </div>
  )
}

export default page
