
const initialState = {
    count:1
}

export default (state = 0, action) => {
    switch (action.type) {
        case 'NUMBER_ADD': 
            state = action.payload + state;
            return state;
        default:
        return state;
    }
}