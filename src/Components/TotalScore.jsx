import React from 'react'
import styled from 'styled-components';


const TotalScore = ({score,}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      
    </ScoreContainer>
  )
}

export default TotalScore


const ScoreContainer=styled.div`

h1{
font-size:80px;
line-height:80px;
text-align:center;
}

p{
font-size:24px;
text-align:center;
}
`;