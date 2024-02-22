import React, {FC, useState} from 'react';
import './App.css';
import {Accordion, AccordionItemsType} from "./components/accordion/Accordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {UncontrolledOnOff} from "./components/uncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/select/Select";
import {items} from "./components/select/Select.stories";

type PageTitleProps = {
    title: string
}

const PageTitle: FC<PageTitleProps> = ({title}) => {
    console.log('PageTitle was rendered')
    return <h1>{title}</h1>
}

const PageTitleContainer = React.memo(PageTitle)
const RatingContainer = React.memo(Rating)
const UncontrolledAccordionContainer = React.memo(UncontrolledAccordion)
const UncontrolledRatingContainer = React.memo(UncontrolledRating)
const AccordionContainer = React.memo(Accordion)
const UncontrolledOnOffContainer = React.memo(UncontrolledOnOff)
const OnOffContainer = React.memo(OnOff)
const SelectContainer = React.memo(Select)


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [on, setIsOn] = useState(false)
    const accordionBodyItems: AccordionItemsType[] = [
        {title: 'Pavel', value: '1'},
        {title: 'Egor', value: '2'},
        {title: 'Maxim', value: '3'}
    ]
    const onClick = (value: string) => {
        alert(`user with ID ${value} should be happy`)
    }
    return (
        <div className="App">
            <PageTitleContainer title={'This is App component'}/>
            <RatingContainer value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordionContainer title={'Menu'}/>
            <UncontrolledAccordionContainer title={'Users'}/>
            <UncontrolledRatingContainer onChange={() => {
            }}/>
            <AccordionContainer
                title={'Controlled Accordion'}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
                items={accordionBodyItems}
                onClick={onClick}
            />
            <div>
                <UncontrolledOnOffContainer onChange={setIsOn}/>{on.toString()}
                <OnOffContainer on={on} setIsOn={setIsOn}/>
            </div>
            <SelectContainer value={'Orsk'} onChange={() => {}} items={items}/>
        </div>
    );
}

export default App;