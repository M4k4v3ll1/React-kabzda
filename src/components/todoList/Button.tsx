import React, {FC} from "react";

type ButtonPropsType = {
    name: string
}

export const Button: FC<ButtonPropsType> = (props) => {
    return (
        <button>{props.name}</button>
    )
}