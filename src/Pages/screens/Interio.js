import React, { useEffect } from 'react'
import Landing from '../components/interio/Landing'
import Details from '../components/interio/Details'
import { Button } from 'bootstrap'

export default function Interio() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, []);
  return (
    <>
        <Landing />
        <Details />
    </>
  )
}
