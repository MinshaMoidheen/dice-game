import React, { useState } from 'react';
import styled from 'styled-components';

const RoleDice = ({roleDice,currentDice}) => {


    

  return (
    <RoleDiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to Roll</p>
    </RoleDiceContainer>
  );
};

export default RoleDice;

const RoleDiceContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
