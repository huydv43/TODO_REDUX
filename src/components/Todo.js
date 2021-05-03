import React, {memo} from 'react';

const Todo = memo(props => {
    const {todo} = props;
    return (
        <div className="templateTodo">
            <label className="title">{todo.nameTodo}</label>
        </div>
    );
});
export default Todo;