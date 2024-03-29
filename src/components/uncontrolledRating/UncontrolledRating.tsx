import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
    onClickHandler: () => void
}

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log('UncontrolledRating was rendered')
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <>
            <StarContainer selected={value > 0} onClickHandler={() => {setValue(1); props.onChange(1);}}/>
            <StarContainer selected={value > 1} onClickHandler={() => {setValue(2); props.onChange(2);}}/>
            <StarContainer selected={value > 2} onClickHandler={() => {setValue(3); props.onChange(3);}}/>
            <StarContainer selected={value > 3} onClickHandler={() => {setValue(4); props.onChange(4);}}/>
            <StarContainer selected={value > 4} onClickHandler={() => {setValue(5); props.onChange(5);}}/>
        </>
    )
}

const Star = (props: StarPropsType) => {
    return <span onClick={() => {
        props.onClickHandler()
    }}>{props.selected ?
        <b>star </b>
        : 'star '}</span>
};

const StarContainer = React.memo(Star)