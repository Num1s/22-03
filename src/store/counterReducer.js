const initialState = {
    count: 1
}

export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREASE_COUNT = 'DECREASE_COUNT'
export const START_COUNT = 'START_COUNT'

export const counterReducer = (state= initialState, action) => {
    if (action.type === INCREASE_COUNT) {
        return {...state, count: state.count + 1}
    }
    if (action.type === DECREASE_COUNT) {
        return {...state, count: state.count - 1}
    }
    if (action.type === START_COUNT) {
        return {...state, count: action.payload}
    }
    return state
}
export const increaseCounter = () => ({type: INCREASE_COUNT})
export const decreaseCounter = () => ({type: DECREASE_COUNT})
export const startCount = payload => ({type: START_COUNT, payload})
