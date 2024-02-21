import {Select} from "./Select";
import {itemsType} from "../accordion/Accordion";
import {useState} from "react";

export default {
    title: 'Select',
    component: Select
}
const items: itemsType[] = [
    {title: 'Samara', value: '1'},
    {title: 'Orsk', value: '2'},
    {title: 'Pskov', value: '3'}
]

export const WithValue = () => {
    const [value, setValue] = useState<string>('2')
    return (
    <>
        <Select value={value} onChange={setValue} items={items}/>
    </>
        )}

export const WithoutValue = () => {
    const [value, setValue] = useState<string | undefined>(undefined)
    return (
    <>
        <Select value={value} onChange={setValue} items={items}/>
    </>
        )}