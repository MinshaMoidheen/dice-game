import React, { useState } from 'react'
import styled from 'styled-components';


const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber}) => {

    const arrnumber=[1,2,3,4,5,6]

    const numberSelectorHandler=(value)=>{
      setSelectedNumber(value)
      setError("")

    }
    

  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>

        <div className='flex'>
        {
            arrnumber.map((value,i)=>(

                <Box
                isSelected={value===selectedNumber}
                key={i} onClick={()=>numberSelectorHandler(value)}  >{value}</Box>
            ))
        }
        </div>
        <p>Select Number</p>

    </NumberSelectorContainer>
  )
}

export default NumberSelector



const NumberSelectorContainer=styled.div`
align-items:end;
flex-direction:column;
display:flex;

.flex{
display:flex;
gap:20px;

}
p{
font-size:20px;
font-weight:700
}

.error{
color:"red"}

`

const Box=styled.div`
height:52px;
width:52px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
background-color:${(props)=>(props.isSelected?"black":"white")};
color:${(props)=>(props.isSelected?"white":"black")};
cursor:pointer;



`
