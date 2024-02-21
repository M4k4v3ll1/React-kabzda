import React, {FC, useState, KeyboardEvent, useEffect} from 'react';
import {itemsType} from "../accordion/Accordion";
import s from './Select.module.css'


export type SelectPropsType = {
    value?: string
    onChange: (value: string) => void
    items: itemsType[]
}

export const Select: FC<SelectPropsType> = ({value, onChange, items}) => {
    const [isActive, setActive] = useState<boolean>(false)
    const [hoveredValue, sethoveredValue] = useState<string | undefined>(value)
    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredValue)
    useEffect(() => {
        sethoveredValue(value)
    }, [value])
    const onSpanClickHandler = () => {
        setActive(!isActive)
    }
    const onItemClickHandler = (value: string) => {
        onChange(value)
        setActive(false)
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredValue) {
                    const pretendentElement = e.key === 'ArrowUp'
                        ? items[i - 1]
                        : items[i + 1]
                    if (pretendentElement) {
                        onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <select>
                <option value="">Samara</option>
                <option value="">Orsk</option>
                <option value="">Pskov</option>
            </select>
            <div
                className={s.select}
                onKeyUp={onKeyUpHandler}
                tabIndex={0}
            >
                <span className={s.main}
                      onClick={onSpanClickHandler}
                >
                    {selectedItem && selectedItem.title}
                </span>
                {isActive &&
                    <div className={s.items}>
                        {items.map((i) =>
                            <div
                                className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                                key={i.value}
                                onMouseEnter={() => sethoveredValue(i.value)}
                                onClick={() => onItemClickHandler(i.value)}
                            >
                                {i.title}
                            </div>)}
                    </div>
                }
            </div>
        </>
    )
};