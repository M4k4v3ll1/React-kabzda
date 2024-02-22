import React, {FC} from "react";

export type AccordionItemsType = {
    title: string
    value: string
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: AccordionItemsType[]
    onClick: (value: string) => void
}

type AccordionTitleType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export const Accordion: FC<AccordionPropsType> = ({title, collapsed, setCollapsed, items, onClick}) => {
    console.log('Accordion was rendered')
    return (
        <div>
            <AccordionTitleContainer title={title} collapsed={collapsed} setCollapsed={setCollapsed}/>
            {!collapsed && <AccordionBodyContainer items={items} onClick={onClick}/>}
        </div>
    )
}

const AccordionTitle: FC<AccordionTitleType> = ({title, collapsed, setCollapsed}) => {
    console.log('AccordionTitle was rendered')
    return <h3 onClick={() => setCollapsed(!collapsed)}>{title}</h3>
}

type AccordionBodyPropsType = {
    items: AccordionItemsType[]
    onClick: (value: string) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody was rendered')
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

const AccordionTitleContainer = React.memo(AccordionTitle)
const AccordionBodyContainer = React.memo(AccordionBody)