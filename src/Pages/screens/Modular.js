import React, { useEffect } from 'react'
import Landing from '../components/modular/Landing'
import Details from '../components/modular/Details'

export default function Modular() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, []);
  return (
    <div>
      <Landing />
      <Details />
    </div>
  )
}
