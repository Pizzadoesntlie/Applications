import React from 'react';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        //call a props method, pass up to parent
        this.props.addTask(this.state.title);
        //after task is submitted, clear the input field
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({ title: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="text" 
                name="title"
                style={{flex:'10', padding: '5px'}} 
                placeholder="Add Task..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input
                type="submit"
                value="Submit"
                className="sub"
                style={{flex:'1', padding:"5px"}}
                />
            </form>
        )
    }
}

export default AddTodo;