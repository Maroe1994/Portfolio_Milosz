import { useState,useEffect } from "react";
import { ImageBox,Images,SlideWrapper} from "../stylecomponents/Slider.style";
import { Containeryeyes,Eyeimg } from "../stylecomponents/landingpage.style";


export function Slider ({arr,src})  {
    const[index,setIndex]=useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          setIndex((prevImage) => (prevImage + 1) % arr.length);
        }, 3000);
    
        return () => {
          clearInterval(timer);
        };
      }, [arr.length]);
    
      function nextImage() {
        setIndex((prevImage) => (prevImage + 1) % arr.length);
      }
      const handleDotClick = (i) => {
    
        
    
     
    setIndex(i);
      };
      
     /* 
function previousImage() {
  setIndex((prevImage) => (prevImage - 1 + arr.length) % arr.length);
}
*/

 return(

    <SlideWrapper src={src} >
<ImageBox>
{arr.length > 0 && (
            <Images 
              key={arr[index].src}
              src={arr[index].src}
              alt={arr[index].src}
            />
          )} 
         <Containeryeyes>
          {arr.map((_index, i) => (
            <Eyeimg key={i}   style={{
              backgroundColor: index===i ? 'white' : 'gray'}} onClick={() => {
  
              handleDotClick(index); // Pierwsze zdarzenie
              
            
            nextImage(i); // Drugie zdarzenie
            }} />
          ))}
        </Containeryeyes>
          {/* 
<NextButton className="btnnext" onClick={nextImage}>
  Previous
</NextButton>
<PreviousButton className="btnprevious" onClick={previousImage}>
  Next
</PreviousButton> 
*/}


</ImageBox>
</SlideWrapper>
 )


}