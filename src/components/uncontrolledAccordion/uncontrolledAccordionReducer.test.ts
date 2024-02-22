import {StateType} from "./UncontrolledAccordion";
import {uncontrolledAccordionReducer} from "./uncontrolledAccordionReducer";

let startState: StateType
beforeEach(() => {
    startState = {
        collapsed: true
    }
})
test('reducer should change value to opposite', () => {
    const endState = uncontrolledAccordionReducer(startState, {type: 'TOGGLE-COLLAPSED'})
    expect(endState.collapsed).toBe(false)
})
test('reducer with falsy type should return startState /', () => {
    const endState = uncontrolledAccordionReducer(startState, {type: 'PUPUPU'})

    expect(endState.collapsed).toBe(true)
})