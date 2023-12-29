import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion,
};


const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion title={'Collapsed Accordion'} setCollapsed={onChangeHandler} collapsed={true}/>

}
export const OpenedAccordion = () => {
    return <Accordion title={'Opened Accordion'} setCollapsed={onChangeHandler} collapsed={false}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Accordion Demo'} setCollapsed={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/>
}