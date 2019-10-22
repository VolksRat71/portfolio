import React, { Component } from 'react';
import {
    Grid,
    Cell,
} from 'react-mdl';

import img from '../assets/site_helper/contact-me.gif';

class Contact extends Component {
    render() {
        return (
            <div className="contactMe" style={{ width: '100%', margin: 'auto', height: '100%' }}>
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <img
                            src={img}
                            alt="contact avatar"
                            className="contact-avatar"
                        />
                        <div className="contact-container">
                            <h1>
                                Contact Me
                                <hr />
                                <p className="lets_talk">
                                    If you wanna get in touch, talk to me about employment, internships, a project collaboration or just say "hi",
                                    use my phone number, email me, add me on LinkedIn or GitHub. ~let's talk
                                </p>
                                <div className="contact-links">
                                    <a href="tel:503-504-7581"
                                        title="(503) 504-7581">
                                        <i class="fa fa-phone"></i>
                                        <p>(503) 504-7581</p>
                                    </a>
                                    <a href="mailto: nathanieljryan1994@gmail.com"
                                        title="nathanieljryan1994@gmail.com">
                                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                        <p>nathanieljryan1994@gmail.com</p>
                                    </a>
                                    <a href="https://www.linkedin.com/in/nathaniel-ryan-88871817b"
                                        title="LinkedIn Nathaniel Ryan"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <i class="fa fa-linkedin" aria-hidden="true" />
                                        <p>LinkedIn</p>
                                    </a>
                                    <a href="https://github.com/VolksRat71"
                                        title="Github VolksRat71"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <i class="fa fa-github" aria-hidden="true" />
                                        <p>GitHub</p>
                                    </a>
                                </div>
                            </h1>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;