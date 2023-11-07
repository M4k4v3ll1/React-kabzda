import React, {FC} from "react";
import {Button} from "./Button";

type ToDoListPropsType = {
    title: string
    tasks: Array<TaskPropsType>
}

export type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const ToDoList: FC<ToDoListPropsType> = ({title, tasks}) => {
    //1.
    /*const title = props.title
    const tasks: Array<TaskPropsType> = props.tasks*/

    //2.
    /*const {title: myTitle, tasks: myTasks} = props*/

    //3. Деструктуризирующее присваивание
    /*const {title, tasks} = props*/

    const listItems: Array<JSX.Element> = []
    for (let i = 0; i < tasks.length; i++) {
        const listItem: JSX.Element = <li>
            <input type="checkbox" checked={tasks[i].isDone}/>
            <span>{tasks[i].title}</span>
        </li>
        listItems.push(listItem)
    }
    //надо переписать  const listItem: JSX.Element = <Task id={tasks[i].id title...} />
    //либо еще лучше listItems.push(Tasks.{...})

    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input/>
                <Button name={'+'}/>
            </div>
            <ul>
                {listItems}
            </ul>
            <div>
                <Button name={'All'}/>
                <Button name={'Active'}/>
                <Button name={'Completed'}/>
            </div>
        </div>
    )
}