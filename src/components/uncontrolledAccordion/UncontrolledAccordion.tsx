import React, {FC, useReducer} from "react";
import {uncontrolledAccordionReducer} from "./uncontrolledAccordionReducer";

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
    console.log('UncontrolledAccordion was rendered')
    //const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(uncontrolledAccordionReducer, {collapsed: false})

    const collapsedHandler = () => {
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }

    return (
        <div>
            <AccordionTitleContainer title={title} collapsedHandler={collapsedHandler}/>
            {!state.collapsed && <AccordionBodyContainer/>}
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

const AccordionTitleContainer = React.memo(AccordionTitle)
const AccordionBodyContainer = React.memo(AccordionBody)