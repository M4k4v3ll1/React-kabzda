import styled, { css } from "styled-components";
import {FC} from "react";

type PropsType = {
    deg: string
}

const centerStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const pointerStyle = css`
  position: absolute;
  transform-origin: bottom;
  z-index: 3;
`;

const pseudoStyle = css`
  content: "";
  position: absolute;
  z-index: 2;
`;

export const ClockWrapper = styled.div`
  ${centerStyle};
  width: 350px;
  height: 350px;
  border-radius: 50%;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  &::before {
    ${centerStyle};
    content: "";
    width: 12px;
    height: 12px;
    background-color: #aaa;
    border-radius: 50%;
    z-index: 3;
  }
`;

export const Hour: FC<PropsType> = styled.div`
  ${pointerStyle};
  top: 33%;
  left: 49%;
  width: 6px;
  height: 60px;
  background-color: #111;
  transform: ${(props) => `rotateZ(${props.deg}deg)`};
`;

export const Minute: FC<PropsType> = styled.div`
  ${pointerStyle};
  top: 24%;
  left: 49%;
  width: 4px;
  height: 90px;
  background-color: #333;
  transform: ${(props) => `rotateZ(${props.deg}deg)`};
`;

export const Second: FC<PropsType> = styled.div`
  ${pointerStyle};
  top: 16%;
  left: 49%;
  width: 2px;
  height: 120px;
  background-color: #ff0000;
  transform: ${(props) => `rotateZ(${props.deg}deg)`};
`;

export const Scale = styled.div`
  &::before {
    ${pseudoStyle};
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    background-color: #444;
  }
  &::after {
    ${pseudoStyle};
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #444;
  }
`;

export const Cover = styled.div`
  ${centerStyle};
  background-color: #fff;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  z-index: 2;
`;
