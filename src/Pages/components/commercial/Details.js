import { Container } from '@mui/material'
import React from 'react';
import comone from "../../../assets/image/bg/living.webp"
import { Chip } from '@material-tailwind/react';
import HSecFour from '../HSecFour';
import { Link } from 'react-router-dom';

export default function Details() {
  return (
    <div>
      <Container>
      <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="title gilroyBold text-r-tvoi">Executive Interior : Where Brands and Spaces Harmonize</h1>
            </div>
            <h5 className="mb-8 text-xl gilroyMedium">Royal Furn transforms businesses. Our holistic approach crafts commercial interiors that resonate with brand ethos, productivity, and employee well-being</h5>
     
        <div className='com-detgrid'>
          <Link to='/modular'>
            <div style={{backgroundImage: `url(${comone})`}} className='com-griditem'>
            <Chip size="md" value="Modular - Interiors for Office" style={{backgroundColor: "#131313", color: "#ffffff"}} className='gilroyBold' />
            </div>
          </Link>
          <Link to='/edufurn'>
            <div style={{backgroundImage: `url(${comone})`}} className='com-griditem'>
            <Chip size="md" value="Edufurn - Interiors for Educational Institutions" style={{backgroundColor: "#131313", color: "#ffffff"}} className='gilroyBold' />
            </div>
            </Link>
            <Link to='/medifurn'>
            <div style={{backgroundImage: `url(${comone})`}} className='com-griditem'>
            <Chip size="md" value="Medifurn - Interiors for HealthCare Industry" style={{backgroundColor: "#131313", color: "#ffffff"}} className='gilroyBold' />
            </div>
            </Link>
            <Link to='/shopfit'>
            <div style={{backgroundImage: `url(${comone})`}} className='com-griditem'>
            <Chip size="md" value="Shopfit - Interiors for shops" style={{backgroundColor: "#131313", color: "#ffffff"}} className='gilroyBold' />
            </div>
            </Link>
        </div>
      </Container>
      <HSecFour />
    </div>
  )
}
