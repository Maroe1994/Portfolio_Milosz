import styled from "styled-components";


export const ImageBox = styled.div`
  position: relative;
  background-color: #343434;
  width: 100%;
  height: 85%;
  border-radius: 15px;

  img {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 70%; // Przykładowa zmiana wysokości dla mniejszych ekranów
    border-radius: 10px; // Przykładowa zmiana promienia dla mniejszych ekranów
    justify-content: center;
    align-items: center;
    height: 400px;
  }
`;
export const SlideWrapper = styled.div`
  position: relative;
  width: 870px;
  height: 615px;
 
  

  @media screen and (max-width: 768px) {
    width: 90vw; // Przykładowa zmiana szerokości dla mniejszych ekranów
    
    height: 400px;
    margin-top: 10px;
    
    
    
  }
`;
export const Images = styled.img`
  width: 70vw;
  height: 100vh;
  border-radius: 20px;
 `

export const NextButton = styled.button`
margin-top: 20px;
cursor: pointer;

`;

export const PreviousButton = styled.button`
margin-top: 40px;
cursor: pointer;
margin-right: 20px;

`;