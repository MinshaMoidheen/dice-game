import React from 'react';
import dice from '../assets/dices.png';
import styled from 'styled-components';
import { StyledButton } from '../styled/button';

function StartGame({toggle}) {
  
  return (
    <>
      <Container>
        <img src={dice} alt="dice" />
        <div>
          <h1>Dice Game</h1>
          <StyledButton onClick={toggle}>Play Game</StyledButton>
        </div>
      </Container>
    </>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 92px;
    font-weight: 900;
  }
`;


