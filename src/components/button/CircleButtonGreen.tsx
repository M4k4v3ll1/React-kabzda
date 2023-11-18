import React from 'react';
import styled from "styled-components";

export const CircleButtonGreen = () => {
    return (
        <StyledCircle/>
    );
};

const StyledCircle = styled.div`
  position: absolute;
  left: 80px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: green
`