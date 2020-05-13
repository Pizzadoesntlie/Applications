import React from 'react';

class Home extends React.Component {

    render() {
        return(
            <div className="head">
                <h1>About Me</h1>
                <img className="bio" src="images/bio_pic.jpg" alt="Shanice" />
                <p className="bio">Hi! My name is Shanice Gordon. I'm a recent graduate of the University of Central Florida. 
                I have a Bachelors in Digital Media. I like technology and I like to create. Let's make magic together... or websites, whatever floats your boat.</p>
                <div className="footer">
                 <h3>&copy; Shanice Gordon. All Rights Reserved. 2020</h3> 
                </div>
            </div>
        )
    }
}

export default Home;