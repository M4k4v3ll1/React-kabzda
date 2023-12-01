import React, {FC, useState} from "react";

type AccordionType = {
    title: string

}

type AccordionTitleType = {
    title: string
    collapsedHandler: () => void
}

export const UncontrolledAccordion: FC<AccordionType> = ({title}) => {
    const [collapsed, setCollapsed] = useState(true)

    const collapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={title} collapsedHandler={collapsedHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

const AccordionTitle: FC<AccordionTitleType> = ({title, collapsedHandler}) => {

    return <h3 onClick={collapsedHandler}>{title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
