import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'
import avatar from '../images/website_avatar_image.jpg'
class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={avatar} alt="avatar" className="avatar-img"/>
                    </Cell>

                    <div className='banner-text'>
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Angular | React | Node.js | AWS | C# | Java | Python</p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/joshua-palamuttam-03b78aab/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/joshpal97" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;