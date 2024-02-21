import React, {FC, useReducer} from "react";
import {reducer} from "./uncontrolledAccordion-reducer";

type AccordionType = {
    title: string

}

type AccordionTitleType = {
    title: string
    collapsedHandler: () => void
}

export type StateType = {
    collapsed: boolean
}

export const UncontrolledAccordion: FC<AccordionType> = ({title}) => {
    //const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const collapsedHandler = () => {
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }

    return (
        <div>
            <AccordionTitle title={title} collapsedHandler={collapsedHandler}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

export const AccordionTitle: FC<AccordionTitleType> = ({title, collapsedHandler}) => {

    return <h3 onClick={collapsedHandler}>{title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
