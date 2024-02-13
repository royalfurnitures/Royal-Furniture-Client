import React,{useEffect} from 'react'
import Landing from '../components/mag/Landing'
import Bottom from '../components/Bottom'
import Footer from '../components/Footer'

export default function Magazine() {
 
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  },[])

  return (
    <div>
      <Landing />
      <Bottom />
      <Footer />
    </div>
  )
}
