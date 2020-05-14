import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div className="contact">
                <h2><p>If you're interested in working together, feel free to get in touch with me and let's make some rad things happen!</p>
                </h2>
                <h2 className="email">Email: <a href="mailto:switchfoot2297@gmail.com">switchfoot2297@gmail.com</a></h2>
                <h2>Socials:</h2>
                <h2 className="social"><a href="https://www.facebook.com/I.do.not.want.to.create.an.eff">Facebook</a>
                <a href="https://twitter.com/LiberTea22">Twitter</a>
                <a href="https://www.instagram.com/honestlywhyamihere/">Instagram</a></h2>
                 <div className="footer">
                 <h3>&copy; Shanice Gordon. All Rights Reserved. 2020</h3> 
                 </div>
            </div>
        )
    }
}

export default Contact;