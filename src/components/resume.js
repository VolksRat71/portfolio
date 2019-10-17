import React, { Component } from 'react';
import {
    Grid,
    Tabs,
    Cell
} from 'react-mdl';

import resume from '../assets/site_helper/resume.pdf';

class Resume extends Component {
    render() {
        return (
            <div>
                <Tabs className="resume-header" />
                <div className="resume-background">
                    <Grid>
                        <Cell className="resume" col={12}>
                            <div className="cv instaFade">
                                <div className="mainDetails">
                                    <div className="name">
                                        <h1 className="quickFade delayTwo">Nathaniel J. Ryan</h1>
                                        <h2 className="quickFade delayThree">Full Stack JavaScript Developer</h2>
                                    </div>
                                    <div className="contactDetails quickFade delayFour">
                                        <ul>
                                            <li>e: <a href="mailto:nathanieljryan1994@gmail.com" target="_blank" rel="noopener noreferrer">nathanieljryan1994@gmail.com</a></li>
                                            <li>w: <a href="http://localhost:3000/resume">www.nathanielryan.com</a></li>
                                            <li>m: <a href="tel:503-504-7581"> (503) 504-7581</a></li>
                                        </ul>
                                    </div>
                                    <div className="clear"></div>
                                </div>

                                <div className="mainArea quickFade delayFive">

                                    <section>
                                        <div className="sectionTitle">
                                            <h1>Programming Experience</h1>
                                        </div>

                                        <div className="sectionContent">
                                            <article>
                                                <h2>React/Node.js Developer</h2>
                                                <p className="subDetails">React, Node.js, Express</p>
                                                <p>Sole Designer, application developed with React frontend, & Node.js backend, that allows control of a DJI Tello drone via the browser.</p>
                                                <ul>
                                                    <li>Created communications between drone's I.P address & Node.js via dgram node package using UDP protocol</li>
                                                    <li>Achieved 3D rendering by formatting a string streamed from drone called "Drone State", the string is formatted & sent to the browser to display Pitch, Yaw, Roll, etc.</li>
                                                    <li>An independent project prepared as a presentation for University of Oregon's Demo Day</li>
                                                </ul>
                                            </article>
                                            <article>
                                                <h2>React Native Developer</h2>
                                                <p className="subDetails">React Native, Firebase</p>
                                                <p>My role in this project was Data Storage, User Authentication, Test Environment Specialist, User Experience & Project Manager. A mobile application developed with React Native that allows a user to enter chatrooms based upon a sport topic.</p>
                                                <ul>
                                                    <li>Led a group of 5 application developers, delegated roles in the project, determined deadlines, helped contributors with general questions</li>
                                                    <li>Studied & properly executed a foreign framework in 3 weeks</li>
                                                    <li>Demonstration was prepared as a presentation for University of Oregon's Demo Day</li>
                                                </ul>
                                            </article>

                                            <article>
                                                <h2>Frontend/User Experience Developer</h2>
                                                <p className="subDetails">Node.js, MySQL, Handlebars, Express</p>
                                                <p>My role in this project was Frontend & User Experience. A Social Media/eCommerce hybrid for users to buy & sell wine, update other users with a "status" for wines added to their collection, vinyards visited, etc.</p>
                                                <ul>
                                                    <li>Worked with bootstrap framework to create a social media themed User Experience</li>
                                                    <li>Motivated other group members & worked with them to assign tasks according to their skillset</li>
                                                    <li>Created a mostly fully functional application within a 2 week span</li>
                                                </ul>
                                            </article>
                                        </div>
                                        <div className="clear"></div>
                                    </section>


                                    <section>
                                        <div className="sectionTitle">
                                            <h1>Key Skills</h1>
                                        </div>
                                        <div className="sectionContent">
                                            <ul className="keySkills">
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                                <li>JavaScript</li>
                                                <li>React</li>
                                                <li>React Native</li>
                                                <li>Node.js</li>
                                                <li>Express</li>
                                                <li>MongoDB</li>
                                                <li>MySQL</li>
                                                <li>Git</li>
                                            </ul>
                                        </div>
                                        <div className="clear"></div>
                                    </section>


                                    <section>
                                        <div className="sectionTitle">
                                            <h1>Education</h1>
                                        </div>

                                        <div className="sectionContent">
                                            <article>
                                                <h2>University of Oregon</h2>
                                                <p className="subDetails">Full Stack JavaScript Development</p>
                                            </article>
                                        </div>
                                        <div className="clear"></div>
                                    </section>
                                </div>
                            </div>
                        </Cell>
                        <div className="actionIcons">
                            <Grid>
                                <Cell col={6}>
                                    <a
                                        className="print"
                                        href={resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Printable Page">
                                        <i class="fa fa-print"></i>
                                    </a>
                                </Cell>
                                <Cell col={6}>
                                    <a className="download" href={resume} title="Download" download>
                                        <i class="fa fa-download"></i>
                                    </a>
                                </Cell>
                            </Grid>
                        </div>
                    </Grid>
                </div>

            </div>
        )
    }
}

export default Resume;
