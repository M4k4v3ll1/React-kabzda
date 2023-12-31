import React, {FC} from "react";

type AccordionType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

type AccordionTitleType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export const Input: FC<AccordionType> = ({title, collapsed, setCollapsed}) => {
    return (
        <div>
            <AccordionTitle title={title} collapsed={collapsed} setCollapsed={setCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

const AccordionTitle: FC<AccordionTitleType> = ({title, collapsed, setCollapsed}) => {
    return <h3 onClick={() => setCollapsed(!collapsed)}>{title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
