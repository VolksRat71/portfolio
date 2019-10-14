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
                                                <p>A fresh candidate seeking entry level development employment or internships with a progressive company in order to gain valuable skills and experience for career growth.</p>
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
                                                <p>This is an application developed with a React.JS frontend, Node.js backend; that allows control of a DJI Tello drone with a browser. I was the sole deigner on this project.</p>
                                                <ul>
                                                    <li>Read documentation included with Drone tp resolve communications from Node.JS to drones I.P adress & Node.JS</li>
                                                    <li>Resolve Drone state (Pitch, Roll, Yaw, Battery, etc.) steams to backend and format to render 3D animation in browser along with battery status, height, and more.</li>
                                                    <li>Self starter, as an independant project I prepared this as a full presentation for University of Oregon's Demo Day</li>
                                                </ul>
                                            </article>

                                            <article>
                                                <h2>Emit Mobile App</h2>
                                                <p className="subDetails">React Native, Firebase</p>
                                                <p>This was a mobile application developed with React Native that allows a user to enter chatrooms based upon a sport topic. My role in this project was Data Storage, User Authentication, Test Environment Specialist, User Experience & Project Manager.</p>
                                                <ul>
                                                    <li>Instuct a group of 5 of their roles in the project, determine deadlines, help contributors with general questions</li>
                                                    <li>Study & exicute a foregin framework in 3 weeks to a functional application</li>
                                                    <li>Learn how to store data & create authentication procedures</li>
                                                </ul>
                                            </article>

                                            <article>
                                                <h2>Seller2Cellar</h2>
                                                <p className="subDetails">NodeJS, MySQL, Handlebars</p>
                                                <p>This was a eCommerce/Social Media hybrid for users to buy and sell wine and update other users with a "status" for wines added to your collection, vinyards visited, etc. My role in this project was Frontend, User Experience. </p>
                                                <ul>
                                                    <li>Work with bootstrap framework to create a social media-esk User Experience</li>
                                                    <li>Motivate other group memebers and work with them to assign tasks according to their skillset</li>
                                                    <li>Create a almost fully functional application in a short 2 week span</li>
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
                                    <a className="print" onclick="printJS('../src/assets/site_helper/resume.JPG')">
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
