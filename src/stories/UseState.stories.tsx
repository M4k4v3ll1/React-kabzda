import React, {useState} from "react";

export default {
    title: 'useState demo'
}

export const Example1 = () => {
    console.log('Example rendered')
    const [counter, setCounter] = useState(0)

    return (
        <>
            <button onClick={() => setCounter(counter+1)}>Increase</button>
            {counter}
        </>
    )
}

