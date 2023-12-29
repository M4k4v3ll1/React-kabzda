import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {

    let [on, setIsOn] = useState(props.defaultOn ? props.defaultOn : false)

   const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginRight: '5px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginRight: '5px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : on === false ? 'red' : 'white'
    }
    const onClicked = () => {
        setIsOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setIsOn(false)
        props.onChange(false)
    }


    return (
        <>
            <button onClick={onClicked} style={onStyle}>ON</button>
            <button onClick={offClicked} style={offStyle}>OFF</button>
            <div style={indicatorStyle}></div>
        </>
    )
};

