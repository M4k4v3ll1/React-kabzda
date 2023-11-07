import React from 'react';
import './App.css';
import {TaskPropsType, ToDoList} from "./components/todoList/ToDoList";

function App() {
    const todoListTitle1: string = 'What to learn';
    const todoListTitle2: string = 'What to buy'

    const tasks_1: Array<TaskPropsType> = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS/ES6', isDone: false},
        /*{id: 3, title: 'React', isDone: false}*/
    ]

    const tasks_2: Array<TaskPropsType> = [
        {id: 4, title: 'Beer', isDone: true},
        {id: 5, title: 'Dried Fish', isDone: false},
        {id: 6, title: 'Cheeps', isDone: false},
        {id: 7, title: 'Cheeps', isDone: false},
        {id: 8, title: 'Cheeps', isDone: false}
    ]

    return (
        <div className="App">
            <ToDoList title={todoListTitle1} tasks={tasks_1}/>
            {/*ToDolist(
                {
                    title: "What to learn",
                    tasks: tasks_1
                }
            )*/}
            <ToDoList title={todoListTitle2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
