import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: black;
  color: white;
  padding: 5px 45px;
  cursor: pointer;
    transition:0.4s background ease-in;

  
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const OutlineButton = styled.button`
  background-color: white;
  color: black;
  padding: 5px 45px;
  cursor: pointer;
  transition:0.4s background ease-in;
  
  &:hover {
    background-color: black;
    color: white;
  }
`;