import React, {FC} from "react";

type AccordionType = {
    title: string
    collapsed: boolean
}

type AccordionTitleType = {
    title: string
}

export const Accordion: FC<AccordionType> = ({title, collapsed}) => {
        return (
            <div>
                <AccordionTitle title={title}/>
                {!collapsed && <AccordionBody/>}
            </div>
        )
    }

const AccordionTitle: FC<AccordionTitleType> = ({title}) => {
    return <h3>{title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
