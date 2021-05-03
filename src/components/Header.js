import React, {memo} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

const Header = memo(props => {
    console.log(props.state)
    return (
        <div className="header">
            <h1>Todos</h1>
            <form>
                <input 
                    type="text"
                    placeholder="todo"
                    
                />
                <button>Done</button>
            </form>
        </div>
    );
})
const mapStatetoProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addTodo : (todo) => {
            dispatch(actions.addTodo(todo));
        }
    }
}
export default connect(mapDispatchToProps, mapStatetoProps)(Header);