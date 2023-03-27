import styled from "styled-components"
import { colors } from "../../../colors"


export const BoardWrapper = styled.div`
     width:30%;
     display:flex;
     justify-content:space-evenly;
     align-items:center;
     flex-wrap:wrap;
     margin-top:50px;
`

export const BoardButton = styled.div `
   
   width:150px;
   height:150px;   
   display:flex;
   align-items:center;
   justify-content:center; 
  background-color:white;
   border-radius:50%; 
  border:solid 15px IndianRed;
  cursor: pointer;
  
`

export const CompButton = styled.div `
      width:150px;
   height:150px;   
   display:flex;
   align-items:center;
   justify-content:center; 
  background-color:white;
   border-radius:50%; 
  border:solid 15px GoldenRod;
  cursor: pointer;
`
export const ResultMatch = styled.div `
    width:40%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:50px;
    
`

export const PlayAgain = styled.button `
      background-color:#3EADEE;
      width:130px;
      height:50px;
      margin-left:10px;
      margin-right:10px;
      border-radius:8px;
      color:#FFFFFF;
      font-size:20px;
      font-family: bold;
      padding:10px 15px;
      cursor:pointer;

`
