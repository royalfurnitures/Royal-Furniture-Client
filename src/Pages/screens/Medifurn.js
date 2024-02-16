import React, { useEffect } from 'react'
import Landing from '../components/medifurn/Landing'
import Details from '../components/medifurn/Details'

export default function Medifurn() {
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
