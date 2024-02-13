import { Container } from '@mui/material'
import React, {useEffect, useState} from 'react'
import one from "../../assets/image/icons/1.webp"
import two from "../../assets/image/icons/2.webp"
import three from "../../assets/image/icons/3.webp"
import four from "../../assets/image/icons/4.webp"
import { Button } from '@material-tailwind/react'

export default function Process() {
    
    

    const cards = [
        {
            img: one,
            text: "Book an appointment"
        },
        {
            img: two,
            text: "Meet our designers"
        },
        {
            img: three,
            text: "Personalise your designs"
        },
        {
            img: four,
            text: "Move in"
        }
    ]
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
    return (
        <Container>
            <div className='process-title gilroyBold text-r-tvoi'>
            It’s simpler than you think
            </div>
            <div className='grid grid-cols-8'>
                {cards.map((why, index) => (
                <div className='why-griditem col-span-8  md:col-span-2' key={index}>
                <img className='why-img' src={why.img} />
                <div>
                        <h1 className='text-r-tvoi gilroyBold text-lg mt-4'>{why.text}</h1>
                    </div>
                </div>
                ))}
            </div>
            <div className='flex justify-center'>
                <Button className="bg-r-gold rounded-full gilroyLight text-sm" onClick={handleOpen}>
                Get Free Consultation
                </Button>
            </div>
        </Container> 
    )
}
