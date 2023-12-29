import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
};


const onChangeHandler = action('onChange')

export const CollapsedMode = () => {
    return <Accordion title={'Collapsed Accordion'} setCollapsed={onChangeHandler} collapsed={true}/>

}
export const OpenedMode = () => {
    return <Accordion title={'Opened Accordion'} setCollapsed={onChangeHandler} collapsed={false}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Accordion Demo'} setCollapsed={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/>
}