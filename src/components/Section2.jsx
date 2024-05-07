import React, { useState , useEffect} from 'react';
import './Navbar.css';

 const images =[
  'p1.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg'
 ]
export default function Section2() {
  const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() =>{
        const intervalId = setInterval(()=>{
            const randomIndex = Math.floor(Math.random()* images.length);

            setCurrentImage(images[randomIndex]);
        },10000)

        return () => clearInterval(intervalId);
 
    },[])
  return (
    <>
 <div className="section" style ={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundImage:`url(${currentImage})`,height:'90vh',color:"white",boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.5) ",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
  <span className='bio1'style={{fontWeight:'bold',fontSize:"2.5em",margin:"10px",padding:"10px",textAlign:"center"}}>ज्ञान, शिक्षा, उच्च आदर्श, पावन चरित्र तथा श्री प्राणनाथ जी को ब्रह्मवाणी को सिद्धान्त </span>
  <span className='bio2'style={{fontSize:"1.8em",textAlign:"center"}}>(निजानन्द दर्शन) द्वारा मानवलाई महामानव बनाएर विश्व शान्तिको प्रयास गर्नु तथा सबैमा आध्यात्मिक चेतना जागृत गर्ने उद्देश्य बोकेको संस्था।</span>
    
 </div>
    </>
  )
}
