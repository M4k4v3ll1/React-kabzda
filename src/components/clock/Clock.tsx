import {FC, useEffect, useState} from "react";

import s from './Clock.module.css'
import {ClockWrapper, Cover, Hour, Minute, Scale, Second} from "./Styled";

type ClockPropsType = {
    hoursString: number
    minutesString: number
    secondsString: number
}
const get2digitsString = (num: number) => {
    return num < 10
        ? '0' + num
        : num
}

export const Clock: FC<ClockPropsType> = () => {
    const [date, setDate] = useState(new Date())
    const [isDigitalView, toggleView] = useState(true)

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const secondsString = Number(get2digitsString(date.getSeconds()))
    const minutesString = Number(get2digitsString(date.getMinutes()))
    const hoursString = Number(get2digitsString(date.getHours()))
    const onClickChangeViewHandler = () => {
        toggleView(!isDigitalView)
    }
    return (
        <>
            <button onClick={onClickChangeViewHandler}>Change style</button>
            {isDigitalView
                ? <div className={s.digitalClock}><DigitalClock hoursString={hoursString} minutesString={minutesString} secondsString={secondsString}/></div>
                : <AnalogClock hoursString={hoursString} minutesString={minutesString} secondsString={secondsString}/>}
        </>
    )
}

const DigitalClock: FC<ClockPropsType> = ({
                                              hoursString,
                                              minutesString,
                                              secondsString
                                          }) => {
    console.log('DigitalClock Tick')
    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString < 10 ? '0' + secondsString : secondsString}</span>
        </div>
    )
}

const AnalogClock: FC<ClockPropsType> = ({
                                             hoursString,
                                             minutesString,
                                             secondsString
                                         }) => {
    console.log('AnalogClock Tick')
    return (
        <ClockWrapper>
            <Hour deg={`${hoursString * 30}`}/>
            <Minute deg={`${minutesString * 6}`}/>
            <Second deg={`${secondsString * 6}`}/>
            <Scale/>
            <Cover/>
        </ClockWrapper>
    )
}