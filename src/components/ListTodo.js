import React, {memo} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
const ListTodo = memo(props => {
    const {todos} = props;
    return (
        <div className="list-todo">
            {
                todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))
            }
        </div>
    );
});
const mapStateToProps = (state) => {
    return {
        todos : state.tasks
    }
}
export default connect(mapStateToProps, null)(ListTodo);