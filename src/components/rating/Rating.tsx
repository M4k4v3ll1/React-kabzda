import React from "react";

type StarPropsType = {
    selected: boolean
}

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => {
    return (
        <>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </>
    )
}

const Star = (props: StarPropsType) => {
    if (props.selected) {
        return (
            <div>
                <span><b>star </b></span>
            </div>
        )
    }
    return (
        <div>
            <span>star </span>
        </div>
    )
};