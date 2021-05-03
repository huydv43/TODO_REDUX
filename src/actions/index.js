import * as types from './../constants/actionTypes';

export const allTodo = () => {
    return {
        type : types.ALL_TODO
    }
}
export const addTodo = (todo) => {
    return {
        type : types.ADD_TODO ,
        todo //todo:todo
    }
}