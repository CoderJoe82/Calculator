import { 
    SET_CLEAR,
    SET_ERROR,
    SET_NUMBER,
    SET_OPERATOR,
    SET_SOLVE
} from '../types/types'

const initialState = {
    Equation: [],
    Answer: 0
}

const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SET_NUMBER: {
            return {
                ...state,
                Equation: state.Equation.concat(action.payload)
            }
        }
        case SET_OPERATOR: {
            return {
                ...state,
                Equation: action.payload
            }
        }
        case SET_CLEAR: {
            return {
                ...state,
                Equation: action.payload
            }
        }
        case SET_SOLVE: {
            return {
                ...state,
                Equation: action.payload
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                Equation: action.payload
            }
        }
        default:
            return state
    }

}

export default rootReducer