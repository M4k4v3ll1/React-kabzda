import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: any[] }) => {
    console.log('Users rendered')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example rendered')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<string[]>(['Sasha', 'Vanya', 'Egor'])
    const AddUSer = () => {
        setUsers([...users, 'Valya' + new Date().getTime()])
    }

    return (
        <>
            <button onClick={() => setCounter(counter+1)}>Increase</button>
            <button onClick={AddUSer}>Add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}

