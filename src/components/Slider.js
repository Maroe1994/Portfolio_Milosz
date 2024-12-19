import { useState,useEffect } from "react";
import { ImageBox,Images,SlideWrapper} from "../stylecomponents/Slider.style";
import { Containeryeyes,Eyeimg } from "../stylecomponents/landingpage.style";


export function Slider({ arr, src }) {
  const [index, setIndex] = useState(0);

  // Automatyczna zmiana zdjęcia co 5 sekund
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevImage) => (prevImage + 1) % arr.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [arr.length]);

  // Funkcja obsługująca kliknięcie w kółko
  const handleDotClick = (i) => {
    setIndex(i); // Ustaw indeks na kliknięte kółko
  };
return (
    <SlideWrapper src={src}>
      <ImageBox>
        {/* Wyświetlanie aktywnego zdjęcia */}
        {arr.length > 0 && (
          <Images
            key={arr[index].src}
            src={arr[index].src}
            alt={arr[index].src}
          />
        )}

        {/* Kółka nawigacyjne */}
        <Containeryeyes>
          {arr.map((_item, i) => (
            <Eyeimg
              key={i}
              style={{
                backgroundColor: index === i ? 'white' : 'gray', // Biały kolor dla aktywnego kółka
              }}
              onClick={() => handleDotClick(i)} // Kliknięcie zmienia aktywne zdjęcie i kółko
            />
          ))}
        </Containeryeyes>
      </ImageBox>
    </SlideWrapper>
  );
}
