import React, {FC} from 'react';

export type OnOffPropsType = {
    on: boolean
    setIsOn: (on: boolean) => void
}

export const OnOff: FC<OnOffPropsType> = (props) => {
    console.log('OnOff was rendered')
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginRight: '5px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginRight: '5px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : props.on === false ? 'red' : 'white'
    }

    return (
        <>
            <button onClick={() => {props.setIsOn(true)}} style={onStyle}>ON</button>
            <button onClick={() => {props.setIsOn(false)}} style={offStyle}>OFF</button>
            <div style={indicatorStyle}></div>
        </>
    )
};

