import React, {FC} from 'react';
import {Button} from "../button/Button";
import styled from "styled-components";
import {CircleButtonGreen} from "../button/CircleButtonGreen";
import {CircleButtonRed} from "../button/CircleButtonRed";

type OnOffPropsType = {
    isOn: boolean
}

export const OnOff: FC<OnOffPropsType> = (props) => {
    return (
        <StyledOnOFF>
            {props.isOn && <Button name={'On'}/>}
            {props.isOn && <CircleButtonGreen/>}
            {!props.isOn && <Button name={'Off'}/>}
            {!props.isOn && <CircleButtonRed/>}
        </StyledOnOFF>
    )
};

const StyledOnOFF = styled.div`
  display: flex;
  width: 150px;
  position: relative;
`