import React, {FC} from "react";

export type itemsType = {
    title: string
    value: string
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: itemsType[]
    onClick: (value: string) => void
}

type AccordionTitleType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export const Accordion: FC<AccordionPropsType> = ({title, collapsed, setCollapsed, items, onClick}) => {
    return (
        <div>
            <AccordionTitle title={title} collapsed={collapsed} setCollapsed={setCollapsed}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    )
}

const AccordionTitle: FC<AccordionTitleType> = ({title, collapsed, setCollapsed}) => {
    return <h3 onClick={() => setCollapsed(!collapsed)}>{title}</h3>
}

type AccordionBodyPropsType = {
    items: itemsType[]
    onClick: (value: string) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) =>
            <li key={index}
                onClick={() => {props.onClick(i.value)}}
            >
                {i.title}
            </li>
        )}
    </ul>
}
