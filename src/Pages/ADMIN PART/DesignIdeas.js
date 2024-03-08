import React from 'react'
import { Admin } from './Admin'
import DisplayPart from './DisplayPart'
import DisplayDesignIdeas from './DisplayDesignIdeas'

const DesignIdeas = () => {

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white z-50 ' >
      <Admin/>
      <DisplayDesignIdeas/>
    </div>
  )
}

export default DesignIdeas