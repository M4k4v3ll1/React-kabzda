import React, {FC, useState} from 'react';
import './App.css';
import {Accordion, itemsType} from "./components/accordion/Accordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {UncontrolledOnOff} from "./components/uncontrolledOnOff/UncontrolledOnOff";

type PageTitleProps = {
    title: string
}

const PageTitle: FC<PageTitleProps> = ({title}) => {
    return <h1>{title}</h1>
}

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [on, setIsOn] = useState(false)
    const accordionBodyItems: itemsType[] = [
        {title: 'Pavel', value: '1'},
        {title: 'Egor', value: '2'},
        {title: 'Maxim', value: '3'}
    ]
    const onClick = (value: string) => {
        alert(`user with ID ${value} should be happy`)
    }
    return (
        <div className="App">
            <PageTitle title={'This is App component'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordion title={'Menu'}/>
            <UncontrolledAccordion title={'Users'}/>
            <UncontrolledRating onChange={() => {
            }}/>
            <Accordion
                title={'Controlled Accordion'}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
                items={accordionBodyItems}
                onClick={onClick}
            />
            <div>
                <UncontrolledOnOff onChange={setIsOn}/>{on.toString()}
                <OnOff on={on} setIsOn={setIsOn}/>
            </div>
        </div>
    );
}

export default App;