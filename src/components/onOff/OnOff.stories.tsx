import {OnOff} from './OnOff';
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action('on or off clicked')

export const OnMode = () => {
    return <OnOff on={true} setIsOn={callback}/>
}
export const OffMode = () => {
    return <OnOff on={false} setIsOn={callback}/>
}
export const OnOffChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} setIsOn={setValue}/>
}