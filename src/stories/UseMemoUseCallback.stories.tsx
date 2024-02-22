import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for: {resultA}</div>
            <div>Result for: {resultB}</div>
        </>
    )
}

const UsersSecret = (props: { users: any[] }) => {
    console.log('UsersSecret rendered')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo rendered')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<string[]>(['Sasha', 'Vanya', 'Egor'])
    const filteredUsers = useMemo(() => {return users.filter(u => u.toLowerCase().indexOf('a') > -1)}, [users])
    return (
        <>
            <button onClick={() => setCounter(counter+1)}>Increase</button>
            <button onClick={() => setUsers([...users, 'Valya ' + new Date().getTime()])}>Add user</button>
            {counter}
            <Users users={filteredUsers}/>
        </>
    )
}
export const LikeUseCallback = () => {
    console.log('LikeUseCallback rendered')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState<string[]>(['React', 'JS', 'CSS'])
    const filteredBooks = useMemo(() => {return books.filter(u => u.toLowerCase().indexOf('a') > -1)}, [books])
    const addBookHandler = () => {
        setBooks([...books, 'Angular ' + new Date().getTime()])
    }
    const memorizedAddBook = useMemo(() => {return addBookHandler}, [books])
    const memorizedAddBook2 = useCallback(addBookHandler, [books])
    return (
        <>
            <button onClick={() => setCounter(counter+1)}>Increase</button>
            {counter}
            <Books callback={memorizedAddBook2}/>
        </>
    )
}

type BookSecretType = {
    callback: () => void
}

const BooksSecret = (props: BookSecretType) => {
    console.log('BooksSecret rendered')
    return <div>
        <button onClick={props.callback}>Add book</button>
    </div>
}

const Books = React.memo(BooksSecret)