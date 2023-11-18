import React, {FC} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";

type PageTitleProps = {
    title: string
}

const PageTitle: FC<PageTitleProps> = ({title}) => {
    return <h1>{title}</h1>
}

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is App component'}/>
            <Rating value={4}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Users'} collapsed={true}/>
            <OnOff isOn={true}/>
        </div>
    );
}

export default App;