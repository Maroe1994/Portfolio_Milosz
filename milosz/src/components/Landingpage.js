import React from "react";
import { Global,Contact,Textcontainerfirst,Iconphoto,Textcontainersecond,Textcontainerthird,Textcontainerfour,Firstcontainercontent,Firstcontainerinside,Miloszimage,Firstparagraph,Secondparagraph,Thirdparagraph,Fourparagraph,Firstacapit, Containerphototext,Containertxt } from "../stylecomponents/landingpage.style";
import { Slider } from "./Slider";

export function Landingpage () {

    const imagesArray =  [{ src: "milosz.jpg",id:1},
  { src: "photoone.jpg",id:2 },
  {src:"phototwo.png",id:3}
];


    return (
        <>
        <Global/> 
        <Contact>kontakt</Contact>
        <Textcontainerfirst>Cześć!
         <Iconphoto src="iconphoto.png" alt="Iconphoto" />   
        </Textcontainerfirst>
        <Textcontainersecond>Jestem</Textcontainersecond>
        <Textcontainerthird>Miłosz</Textcontainerthird>
        <Textcontainerfour>Chełmowski</Textcontainerfour>

        <Firstcontainercontent>
         <Firstcontainerinside>
         <Firstparagraph>
            Miejsce w którym,
         </Firstparagraph>
         <Secondparagraph>Odnajdziesz</Secondparagraph>
         <Thirdparagraph>
            wizualną dro<span>gę</span>
         </Thirdparagraph>
         <Fourparagraph>
            Zajmuję sie projektowaniem grafiki użytkowej, m.in
            indentyfikacji wizualnej, fir, wydarzeń, social media, znaków
            graficznych, okładek płyt, plakatów oraz składem książek.
            Zajmuję się również tworzeniem abstrakcyjnych linorytów,
            oraz studiuję Grafikę na  Akademi sztuk pięknych 
            w Gdańsku.
         </Fourparagraph>
         </Firstcontainerinside>
         <Miloszimage src="milosz.jpg" alt="Milosz"/>
        </Firstcontainercontent>
        <Firstacapit>Dążę do piękna  &</Firstacapit>
        <Firstacapit>jedności w dizajnie</Firstacapit>
       <Containerphototext>
        <Containertxt>
            <p>
                Edycja kolekcjonerska Maja Sowińska -live Experience
            </p>
            <p>
                Manager Krzysztof Sowiński/
                Dyrektor kreatywna Sara Kukier/
                Projekt graficzny Miłosz
                 Chełmowski/ Malarstwo i rysunek
                 Róża Sowińska/Fotograf
                 analogowy Monika Deja/Fotograf
                 Cyfrowy Katarzyna Lewek/Bartosz
                 Lewandowski
            </p>
            <p>2021</p>
        </Containertxt>
       <Slider alt="First" arr={imagesArray} />
       </Containerphototext>
        </>
        
    )
}