import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample rendered')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = 'User'
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])
    return (
        <>
            Hello, {counter}
            <button onClick={() => setFake(fake + 1)}>Increase</button>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
        </>
    )
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample rendered')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    useEffect(() => {
        console.log('tick: ' + counter)
        const intervalID = setInterval(() => {
            console.log('Set Interval')
            setCounter(counter + 1)
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = 'User'
    }, [counter])

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            {/*<button onClick={() => setFake(fake + 1)}>Increase</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>Increase</button>*/}
        </>
    )
}

export const TimerExample = () => {
    console.log('SetTimeoutExample rendered')
    const [currentSeconds, setCurrentSeconds] = useState(1)
    let currentHours = new Date().getHours()
    let currentMinutes = new Date().getMinutes()
    useEffect(() => {
        setInterval(() => {
            setCurrentSeconds(state => state + 1)
        }, 1000)
    }, [])
    return (
        <>
            Current
            time: {currentHours}:{currentMinutes}:{currentSeconds < 10 ? ('0' + currentSeconds) : currentSeconds}
        </>
    )
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('ResetEffectExample rendered: ' + counter)
    useEffect(() => {
        console.log('Effect occurred: ' + counter)
        return () => {
            console.log('Reset Effect: ' + counter)
        }
    }, [counter])
    const increaseHandler = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            Hello, counter: {counter}
            <button onClick={increaseHandler}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('ResetEffectExample rendered: ' + text)
    useEffect(() => {
        const KeyPressHandler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', KeyPressHandler)
        return () => {
            window.removeEventListener('keypress', KeyPressHandler)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')
    console.log('ResetEffectExample rendered: ' + text)
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('Timeout Expired')
            setText('3 second passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutID)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}

