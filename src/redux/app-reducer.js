const CHANGE_LENGUAGE = 'app-reducer/CHANGE_LENGUAGE';

let initialState = {
 lenguage: 'Eng'
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LENGUAGE: 
            return {
                ...state, lenguage: action.lenguage === 'Ru' ? 'Рус' : "Eng"
            }
        
        default:
            return state;
    }

}


export const changeLenguage = (lenguage) => ({ type: CHANGE_LENGUAGE, lenguage})


export default appReducer;