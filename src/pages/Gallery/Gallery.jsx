import React from 'react'

import img1 from "./images/IMG-20240928-WA0022.jpg"
import img2 from "./images/IMG-20240928-WA0023.jpg"
import img3 from "./images/IMG-20240928-WA0024.jpg"
import img4 from "./images/WhatsApp Image 2024-09-27 at 19.35.15_85adf5a5.jpg"
import img5 from "./images/IMG-20240928-WA0002.jpg"
import img6 from "./images/IMG-20240928-WA0003.jpg"
import img7 from "./images/IMG-20240928-WA0004.jpg"
import img8 from "./images/IMG-20240928-WA0005.jpg"
import img9 from "./images/IMG-20240928-WA0006.jpg"
import img10 from "./images/IMG-20240928-WA0007.jpg"
import img11 from "./images/IMG-20240928-WA0008.jpg"
import img12 from "./images/IMG-20240928-WA0009.jpg"
import img13 from "./images/IMG-20240928-WA0010.jpg"
import img14 from "./images/IMG-20240928-WA0011.jpg"
import img15 from "./images/IMG-20240928-WA0012.jpg"
import img16 from "./images/IMG-20240928-WA0013.jpg"
import img17 from "./images/IMG-20240928-WA0014.jpg"
import img18 from "./images/IMG-20240928-WA0015.jpg"
import img19 from "./images/IMG-20240928-WA0016.jpg"
import img20 from "./images/IMG-20240928-WA0017.jpg"
import img21 from "./images/IMG-20240928-WA0018.jpg"
import img22 from "./images/IMG-20240928-WA0019.jpg"
import img23 from "./images/IMG-20240928-WA0020.jpg"
import img24 from "./images/IMG-20240928-WA0021.jpg"


export const images = [ img1, img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24]

const Gallery = function(){

    return (
        <div>
        {images.map((image, index)=>{
           return (<img key={index} src={image} alt={`img-${index}`}/>)
            
        })}
       </div>
    )
    
}


export default Gallery
