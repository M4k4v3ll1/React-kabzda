import {action} from '@storybook/addon-actions'
import React from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callback = action('onChange')

export const OnMode = () => {
    return <UncontrolledOnOff defaultOn={true} onChange={callback}/>
}
export const OffMode = () => {
    return <UncontrolledOnOff defaultOn={false} onChange={callback}/>
}