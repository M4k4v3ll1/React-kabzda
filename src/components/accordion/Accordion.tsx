import React from "react";
import {Rating} from "../star/Rating";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    if (props.collapsed !== true) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    }
    return (
        <div>
            <AccordionTitle title={props.title}/>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


<div>
    <Rating value={1}/>
    <Rating value={2}/>
    <Rating value={3}/>
    <Rating value={4}/>
    <Rating value={5}/>
    <Accordion title={'Menu'} collapsed={true}/>
    <Accordion title={'Users'} collapsed={false}/>
</div>