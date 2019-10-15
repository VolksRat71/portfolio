import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '../assets/avatars/avatar.png';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto', height: '100%' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <a href='/resume'>
                            <img
                                src={img}
                                alt="landing avatar"
                                className="landing-avatar"
                            />
                        </a>
                        <div className="banner-text">
                            <h1>
                                Full Stack JavaScript Developer
                                <hr />
                                <p className="proficiencies">
                                    HTML5 | CSS3 | JavaScript | ReactJS | React Native | NodeJS | Express | MongoDB | MySQL | Git
                                </p>
                                <div className="social-links">
                                    <a href="mailto: nathanieljryan1994@gmail.com"
                                        title="nathanieljryan1994@gmail.com">
                                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/nathaniel-ryan-88871817b"
                                        title="LinkedIn Nathaniel Ryan"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <i class="fa fa-linkedin" aria-hidden="true" />
                                    </a>
                                    <a href="https://www.freecodecamp.org/volksrat71"
                                        title="freeCodeCamp volksrat71"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <i class="fa fa-free-code-camp" aria-hidden="true" />
                                    </a>
                                    <a href="https://github.com/VolksRat71"
                                        title="Github VolksRat71"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <i class="fa fa-github" aria-hidden="true" />
                                    </a>
                                </div>
                            </h1>
                        </div>
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default LandingPage;