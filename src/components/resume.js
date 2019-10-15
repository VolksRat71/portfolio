import React, { Component } from 'react';
import {
    Grid,
    Tabs,
    Cell
} from 'react-mdl';

import resume from '../assets/site_helper/resume.JPG';

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
                                            <li>e: <a href="mailto:joe@bloggs.com" target="_blank" rel="noopener noreferrer">nathanieljryan1994@gmail.com</a></li>
                                            <li>w: <a href="http://localhost:3000/resume">www.nathanielryan.com</a></li>
                                            <li>m: <a href="tel:123-456-7890"> (503) 504-7581</a></li>
                                        </ul>
                                    </div>
                                    <div className="clear"></div>
                                </div>

                                <div className="mainArea quickFade delayFive">
                                    <section>
                                        <article>
                                            <div className="sectionTitle">
                                                <h1>Personal Objective</h1>
                                            </div>

                                            <div className="sectionContent">
                                                <p>To find entry level development employment or internships with a progressive company, in order to gain valuable skills and experience for career and personal growth.</p>
                                            </div>
                                        </article>
                                        <div className="clear"></div>
                                    </section>


                                    <section>
                                        <div className="sectionTitle">
                                            <h1>Programming Experience</h1>
                                        </div>

                                        <div className="sectionContent">
                                            <article>
                                                <h2>Drone Controller</h2>
                                                <p className="subDetails">React.JS, Node.JS</p>
                                                <p>An application developed with a React.JS frontend, and Node.js backend, that allows control of a DJI Tello drone with a browser. I was sole designer on this project.</p>
                                                <ul>
                                                    <li>Read documentation included with Drone to resolve communications from Node.JS to drone's I.P address & Node.JS</li>
                                                    <li>Resolve Drone state (Pitch, Roll, Yaw, Battery, etc.) which streams to backend, and is formatted to render 3D animation in browser along with battery status, height, and more</li>
                                                    <li>An independent project I prepared as a full presentation for University of Oregon's Demo Day</li>
                                                </ul>
                                            </article>

                                            <article>
                                                <h2>Emit Mobile App</h2>
                                                <p className="subDetails">React Native, Firebase</p>
                                                <p>A mobile application developed with React Native that allows a user to enter chatrooms based upon a sport topic. My role in this project was Data Storage, User Authentication, Test Environment Specialist, User Experience & Project Manager.</p>
                                                <ul>
                                                    <li>Lead a group of 5, delegate roles in the project, determine deadlines, help contributors with general questions</li>
                                                    <li>Study & properly execute a foreign framework in 3 weeks</li>
                                                    <li>Learn how to store data within the browser & create authentication procedures</li>
                                                </ul>
                                            </article>

                                            <article>
                                                <h2>Seller2Cellar</h2>
                                                <p className="subDetails">NodeJS, MySQL, Handlebars</p>
                                                <p>A Social Media/eCommerce hybrid for users to buy and sell wine, update other users with a "status" for wines added to their collection, vinyards visited, etc. My role in this project was Frontend, User Experience. </p>
                                                <ul>
                                                    <li>Work with bootstrap framework to create a social themed User Experience</li>
                                                    <li>Motivate other group members and work with them to assign tasks according to their skillset</li>
                                                    <li>Create a mostly fully functional application in a short 2 week span</li>
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
                                                <li>ReactJS</li>
                                                <li>React Native</li>
                                                <li>NodeJS</li>
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
                                    <a className="print" href={resume}>
                                        <i class="fa fa-print"></i>
                                    </a>
                                </Cell>
                                <Cell col={6}>
                                    <a className="download" href={resume} download>
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
