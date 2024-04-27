import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    margin: 0;
    background-color: #FFFFFF;
  }`

  export const Contact=styled.div`
  width: 225px;
  height:60px;
  
  margin-top:10px;
  position: absolute;
  right: 0;
  top:10px;
  font-weight: 500;
  color:black;
  font-size: 20px;
  
  
  display: flex;
  align-items: flex-end;
  border-bottom:1px solid black;
  
 
  `