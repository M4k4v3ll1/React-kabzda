import React from "react";

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5

export const Rating = (props: RatingPropsType) => {
    console.log('Rating was rendered')
    return (
        <>
            <StarContainer selected={props.value > 0} onClick={props.onClick} value={1}/>
            <StarContainer selected={props.value > 1} onClick={props.onClick} value={2}/>
            <StarContainer selected={props.value > 2} onClick={props.onClick} value={3}/>
            <StarContainer selected={props.value > 3} onClick={props.onClick} value={4}/>
            <StarContainer selected={props.value > 4} onClick={props.onClick} value={5}/>
        </>
    )
}

const Star = (props: StarPropsType) => {
    console.log('Star was rendered')
    return <span onClick={() => props.onClick(props.value)}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
};

const StarContainer = React.memo(Star)