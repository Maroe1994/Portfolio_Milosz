import React from "react";
import { Global,Contact,Textcontainerfirst,Iconphoto,Textcontainersecond,Textcontainerthird,Textcontainerfour,Firstcontainercontent,Firstcontainerinside,Miloszimage,Firstparagraph,Secondparagraph,Thirdparagraph,Fourparagraph,Firstacapit } from "../stylecomponents/landingpage.style";
export function Landingpage () {
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
        </>
    )
}