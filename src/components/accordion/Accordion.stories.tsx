import {action} from '@storybook/addon-actions'
import {Accordion, itemsType} from './Accordion';
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
};


const onChangeHandler = action('onChange')
const onClickItemHandler = action('some item was changed')
const items: itemsType[] = [
    {title: 'Pavel', value: '1'},
    {title: 'Egor', value: '2'},
    {title: 'Maxim', value: '3'}
]

export const CollapsedMode = () => {
    return <Accordion title={'Collapsed Accordion'} setCollapsed={onChangeHandler} collapsed={true} items={[]} onClick={onClickItemHandler}/>

}
export const OpenedMode = () => {
    return <Accordion title={'Opened Accordion'} setCollapsed={onChangeHandler} collapsed={false} items={items} onClick={onClickItemHandler}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Accordion Demo'} setCollapsed={() => {setCollapsed(!collapsed)}} collapsed={collapsed} items={items} onClick={(value) => {alert(`user with ID ${value} should be happy`)}}/>
}