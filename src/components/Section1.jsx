import React, { useState , useEffect} from 'react';
import './Navbar.css';


const images = [
    'p7.jpg',
    'p8.jpg',
    'p9.jpg',
    'p10.jpg',
    'p11.jpg',
    'p12.jpg'
]


export default function () {


    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() =>{
        const intervalId = setInterval(()=>{
            const randomIndex = Math.floor(Math.random()* images.length);

            setCurrentImage(images[randomIndex]);
        },9000)

        return () => clearInterval(intervalId);
 
    },[])
    

  return (
    <>
    <section class="section-discount">
        <article>
          <div className="left">
          <h1>सेवा नै धर्म हो </h1> 
          <button class="btn">सेवा </button>
          </div>
         
          <img src={currentImage} alt="Random Image"  />
          
        </article>
      </section>
      
    </>
  )
}
