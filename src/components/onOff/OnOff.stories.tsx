import {OnOff} from './OnOff';
import React, {useState} from "react";

export default {
    title: 'OnOff',
    component: OnOff,
}

export const OnMode = () => {
    return <OnOff on={true} setIsOn={()=>{}}/>
}
export const OffMode = () => {
    return <OnOff on={false} setIsOn={()=>{}}/>
}
export const OnOffChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    // @ts-ignore
    return <OnOff on={value} onClick={setValue}/>
}