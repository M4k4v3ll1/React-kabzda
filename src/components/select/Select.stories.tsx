import {itemsType, Select} from "./Select";
import React, {useMemo, useState} from "react";

export default {
    title: 'Select',
    component: Select
}
export const items: itemsType[] = [
    {title: 'Moscow', value: '1', countryID: '1', population: 13000000},
    {title: 'Samara', value: '2', countryID: '1', population: 1000000},
    {title: 'Pskov', value: '3', countryID: '1', population: 200000},
    {title: 'Minsk', value: '4', countryID: '2', population: 2000000},
    {title: 'Brest', value: '5', countryID: '2', population: 300000},
    {title: 'Gomel\'', value: '6', countryID: '2', population: 500000},
    {title: 'Kiev', value: '7', countryID: '3', population: 3000000},
    {title: 'L\'vov', value: '8', countryID: '3', population: 700000},
    {title: 'Lutsk', value: '9', countryID: '3', population: 200000},
]
const SelectContainer = React.memo(Select)

export const WithValue = () => {
    const [value, setValue] = useState<string>('2')
    return (
        <>
            <SelectContainer value={value} onChange={setValue} items={items}/>
        </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState<string | undefined>(undefined)
    return (
        <>
            <SelectContainer value={value} onChange={setValue} items={items}/>
        </>
    )
}

export const HelpToReactMemoWithSelect = () => {
    console.log('HelpToReactMemo rendered')
    const [value, setValue] = useState<string | undefined>('1')
    const filteredItemsByLetterO: itemsType[] = useMemo(() => {return items.filter(i => i.title.toLowerCase().indexOf('o') > -1)}, [])
    const filteredItemsByCountryID: itemsType[] = useMemo(() => {return items.filter(i => i.countryID === '1')}, [])
    const filteredItemsByPopulation: itemsType[] = useMemo(() => {return items.filter(i => i.population > 1000000)}, [])

    const [counter, setCounter] = useState(0)
    return (
        <>
            <div><SelectContainer value={value} onChange={setValue} items={filteredItemsByLetterO}/></div>
            <div><SelectContainer value={value} onChange={setValue} items={filteredItemsByCountryID}/></div>
            <div><SelectContainer value={value} onChange={setValue} items={filteredItemsByPopulation}/></div>
            <div>{counter}</div>
            <div><button onClick={() => setCounter(counter+1)}>Increase counter</button></div>
        </>
    )
}

