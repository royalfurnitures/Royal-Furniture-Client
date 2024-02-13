import { Container } from '@mui/material'
import React, {useEffect, useState} from 'react'
import whyone from "../../assets/image/icons/whyone.webp"
import whytwo from "../../assets/image/icons/whytwo.webp"
import whythree from "../../assets/image/icons/whythree.webp"
import whyfour from "../../assets/image/icons/whyfour.webp"

export default function HSecFour() {
    
    const cards = [
        {
            img: whyone,
            text: "Budget friendly"
        },
        {
            img: whytwo,
            text: "On time move-in guarantee"
        },
        {
            img: whythree,
            text: "High quality checks"
        },
        {
            img: whyfour,
            text: "Flat 10-year warranty"
        }
    ] 
    return (
        <Container>
            <div className='text-center mt-[50px] text-xl md:text-2xl lg:text-4xl gilroyBold text-r-tvoi'>
                WHY ROYAL FURN
            </div>
           

  <div className='grid grid-cols-8'>
                {cards.map((why, index) => (
                <div className=' flex items-center flex-col justify-center mt-[20px] md:mt-[100px] col-span-4 md:col-span-2' key={index}>
                <img className='why-img w-[60px] md:w-[80%]' src={why.img} />
                <div>
                        <h1 className='text-r-tvoi gilroyBold text-[12px] md:text-[14px]  lg:text-[18px] mt-4'>{why.text}</h1>
                    </div>
                </div>
                ))}
            </div>
        </Container> 
    )
}
