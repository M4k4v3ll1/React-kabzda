import React, {FC} from 'react';
import {itemsType} from "../accordion/Accordion";

export type SelectPropsType = {
    value: string
    onChange: (value: string) => void
    items: itemsType[]
}

export const Select: FC<SelectPropsType> = ({value, onChange, items}) => {
    return (
        <div>
            {}
            {items.map(i => <div>i.title</div>)}
        </div>
    )
};