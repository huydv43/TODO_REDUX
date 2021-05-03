import * as types from './../constants/actionTypes';
const init = [
    {
        id: 1,
        nameTodo: 'Learn Redux',
        isDone: true
    },
    {
        id: 2,
        nameTodo: 'Watching film in VTV3',
        isDone: true
    },
    {
        id: 3,
        nameTodo: 'Sleep in the Bed',
        isDone: false
    }
];

const myReducer = (state = init , action) => {
    switch (action.types){
        case types.ALL_TODO:
            return state;
        case types.ADD_TODO:
            console.log(action)
            return state;
        default:
            return state;
    }
}
export default myReducer;