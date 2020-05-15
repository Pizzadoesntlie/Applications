import React from 'react';

class Portfolio extends React.Component {
    render() {
        return(
            <div className="grid-por">
                <p><img className="w_api" src="images/weather_api.JPG" alt="cards portfolio piece" /></p>
                <p><a href="https://repl.it/@Pizzadoesntlie/WeatherAPI">Simple Weather API</a></p>
                <div className="footer">
                 <h3>&copy; Shanice Gordon. All Rights Reserved. 2020</h3> 
                </div>
            </div> 
        )
    }
}

export default Portfolio;