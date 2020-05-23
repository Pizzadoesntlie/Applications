import React from 'react';

class Portfolio extends React.Component {
    render() {
        return(
            <div className="grid-por">
                <p style={{textAlign:"center", color: "#000000", fontWeight:"bold"}}>
                    PROJECTS ARE CURRENTLY HOSTED ON REPL.IT</p>
                <p><img className="w_api" src="images/weather_api.JPG" alt="cards portfolio piece" /></p>
                <p><a href="https://repl.it/@Pizzadoesntlie/WeatherAPI">Simple Weather API</a></p>
                <p><img className="todo_app" src="images/todo_app.JPG" alt="todolist app portfolio piece" /></p>
                <p><a href="https://repl.it/@Pizzadoesntlie/todoapp">Simple Todo App</a></p>
                <div className="footer">
                 <h3>&copy; Shanice Gordon. All Rights Reserved. 2020</h3> 
                </div>
            </div> 
        )
    }
}

export default Portfolio;