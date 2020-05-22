import React from "react";
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    taskStyle = () => {
        return {
            textDecoration: this.props.todo.completed ?
            "line-through" : "none",
            borderBottom: '1px black dotted',
            borderRight: '1px black dotted',
            borderLeft: '1px black dotted',
            backgroundColor: '#679289'
        }
    }
    //handle the event for the checkbox call a method, use arrow function so you don't have to bind this (this shows up undef)
    //call a method on a prop
    render() {
        const {id, title} = this.props.todo;
        return(
            <div style ={this.taskStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id )}/> {''}
                    {title}
                    <button className="del" onClick={this.props.deleteTask.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default TodoItem;