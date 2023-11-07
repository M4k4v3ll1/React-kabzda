import React from "react";

type StarPropsType = {
    selected: boolean
}

type RatingPropsType = {
    value: number
}

export const Rating = (props: RatingPropsType) => {
    if (props.value === 1) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </>
        )
    } else if (props.value === 2) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </>
        )
    } else if (props.value === 3) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </>
        )
    } else if (props.value === 4) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </>
        )
    } else if (props.value === 5) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </>
        )
    }
    return (
        <>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </>
    )
}

const Star = (props: StarPropsType) => {
    if (props.selected === true) {
        return (<div>
            <span><b>star </b></span>
        </div>)
    }
    return (<div>
        <span>star </span>
    </div>)
};