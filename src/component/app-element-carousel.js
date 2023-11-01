import { useEffect, useState } from "react"


export default function AppCarouselImage(prop) {
    
    const v = require(`../asset/images/carousel/${prop.imageUrl}.png`)//
    return (
      <>
      {prop.imageUrl != null ? 
        <img className="d-block w-100" src={v} alt={`${prop.alt}`}/> 
        : ""}
      </>
    )
}