import { useState,useEffect } from "react";
import { ImageBox,Images,SlideWrapper,NextButton,PreviousButton } from "../stylecomponents/Slider.style";



export function Slider ({arr,src,})  {
    const[index,setIndex]=useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          setIndex((prevImage) => (prevImage + 1) % arr.length);
        }, 5000);
    
        return () => {
          clearInterval(timer);
        };
      }, [arr.length]);
    
      function nextImage() {
        setIndex((prevImage) => (prevImage + 1) % arr.length);
      }
    
      function previousImage() {
        setIndex((prevImage) => (prevImage - 1 + arr.length) % arr.length);
      }
    
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
           <NextButton className="btnnext" onClick={nextImage}>
            Previous
          </NextButton>
          <PreviousButton className="btnprevious" onClick={previousImage}>
            Next
          </PreviousButton>   

</ImageBox>
</SlideWrapper>
 )


}