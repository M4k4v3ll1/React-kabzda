import {StateType} from "./UncontrolledAccordion";

type ActionType = {
    type: string
}


export const uncontrolledAccordionReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED': {
            return {...state, collapsed: !state.collapsed}
        }
        default:
            return state
    }
}