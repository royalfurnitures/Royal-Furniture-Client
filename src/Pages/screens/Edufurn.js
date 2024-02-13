import React from 'react'
import Details from '../components/edufurn/Details'
import Landing from '../components/edufurn/Landing'
import { useEffect } from 'react';

export default function Edufurn() {
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
