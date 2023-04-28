const initialState = {
    user: {
        name: 'Капец',
        age: 0,
        gender: ''
    }
}

export const CHANGE_USER = 'CHANGE_USER'

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_USER:
            if (action.payload.user.age < 10 || action.payload.user.age > 100) {
                alert(`Вам нет 10-ти или вам больше 100, доступ запрещен`)
            }
            if (action.payload.user.name === undefined) {
                alert(`Укажите имя!`)
            }
            if (action.payload.user.age === undefined) {
                alert(`Укажите возвраст!`)
            }
            if (action.payload.user.gender === undefined) {
                alert(`Укажите пол!`)
            }
            return {...state, user: action.payload.user}
        default:
            return state
    }
}

export const changeUser = payload => ({type: CHANGE_USER, payload})