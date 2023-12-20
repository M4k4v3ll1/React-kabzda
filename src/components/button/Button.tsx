import React, {FC} from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    name?: string
    }

export const Button: FC<ButtonPropsType> = ({name, }) => {
    return (
        <StyledButton>
            {name}
        </StyledButton>
    );
};

const StyledButton = styled.button<ButtonPropsType>`
  height: 20px;
  width: 40px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  border-radius: 5px;
`
