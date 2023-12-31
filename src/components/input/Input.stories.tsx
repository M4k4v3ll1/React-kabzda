import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input',
    // component: input,
};

export const UncontrolledInput = () => {
    return <input/>
}
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>('')
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input onChange={changeInputHandler}/>
        ---{value}---
    </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const changeInputHandler = () => {
        const text = inputRef.current as HTMLInputElement
        setValue(text.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={changeInputHandler}>save</button>
        actual value: {value}
    </>
}
export const ControlledInputWithFixedValue = () => {
    return <input value={'IT-incubator'}/>
}

export const ControlledInput = () => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <input value={value} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState<boolean>(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return <>
        <input type={"checkbox"} checked={value} onChange={onChangeHandler}/>
    </>
}

export const ControlledSelect= () => {
    const [value, setValue] = useState<string | undefined>('1')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <select value={value} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>Samara</option>
            <option value={'2'}>Tolyatti</option>
            <option value={'3'}>Pokhvistnevo</option>
        </select>
    </>
}
