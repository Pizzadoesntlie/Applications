import React from 'react';

class Home extends React.Component {

    render() {
        return(
             <div className="head">
                <h1>About Me</h1>
                <div className="head_bio">
                <img className="bio" src="images/shanice_2020.jpg" alt="Shanice" />
                <p className="bio">Hi! My name is Shanice Gordon. I'm a recent graduate of the University of Central Florida. 
                I have a Bachelors in Digital Media. I like technology and I like to create. 
                I’m really grateful that I’ve found the world of web design, it’s given me an outlet and 
                an opportunity to create projects that I’m proud of.
                Let's make magic together... or websites, whatever floats your boat.
                </p>  
                </div>
                <div className="footer">
                 <h3>&copy; Shanice Gordon. All Rights Reserved. 2020</h3> 
                </div>
             </div>
        )
    }
}

export default Home;