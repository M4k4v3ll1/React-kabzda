import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
    onClickHandler: () => void
}
//
// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
// }

export const UncontrolledRating = () => {
    const [value, setValue] = useState(0)

    return (
        <>
            <Star selected={value > 0} onClickHandler={() => setValue(1)} />
            <Star selected={value > 1} onClickHandler={() => setValue(2)} />
            <Star selected={value > 2} onClickHandler={() => setValue(3)} />
            <Star selected={value > 3} onClickHandler={() => setValue(4)} />
            <Star selected={value > 4} onClickHandler={() => setValue(5)} />
        </>
    )
}

const Star = (props: StarPropsType) => {
return <span onClick={() => {props.onClickHandler()}}>{props.selected ?
        <b>star </b>
        : 'star '}</span>
};