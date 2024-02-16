import React, { useEffect } from 'react'
import Landing from '../components/shopfit/Landing'
import Details from '../components/shopfit/Details'

export default function Shopfit() {

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
