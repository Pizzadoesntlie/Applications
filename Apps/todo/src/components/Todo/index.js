import React from 'react';
import TodoItem from '../TodoItem';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  //markComplete is a prop now
  //sending props up to the app (parent) where the state is defined
    render() {
        return this.props.todo.map((task) => (
          <TodoItem key={task.id} todo={task} markComplete={this.props.markComplete}
          deleteTask={this.props.deleteTask}/>
        ));
    }
}

// todo is property of todo array
Todo.propTypes = {
  todo: PropTypes.array.isRequired
}

export default Todo;