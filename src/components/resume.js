import React, { Component } from 'react';
import {
    Grid,
    Tabs,
    Cell
} from 'react-mdl';


class Resume extends Component {
    render() {
        return (
            <div>
                <Tabs className="resume-header" />
                <div className="resume-background">
                    <Grid>
                        <Cell className="resume" col={10}>
                            <div className="cv instaFade">
                                <div className="mainDetails">
                                    <div className="name">
                                        <h1 className="quickFade delayTwo">Nathaniel J. Ryan</h1>
                                        <h2 className="quickFade delayThree">Jr. Developer</h2>
                                    </div>

                                    <div className="contactDetails quickFade delayFour">
                                        <ul>
                                            <li>e: <a href="mailto:joe@bloggs.com" target="_blank">nathanieljryan1994@gmail.com</a></li>
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
                                                <p className="subDetails">ReactJS, NodeJS</p>
                                                <p>Retro coloring book mustache semiotics street art typewriter XOXO kinfolk artisan. Banjo glossier edison bulb retro raclette YOLO. Meditation letterpress bushwick, humblebrag knausgaard shoreditch irony prism post-ironic migas lumbersexual roof party chambray. </p>
                                            </article>

                                            <article>
                                                <h2>Emit Mobile App</h2>
                                                <p className="subDetails">React Native, Firebase</p>
                                                <p>Kickstarter gastropub stumptown. Photo booth blue bottle listicle irony, subway tile normcore kickstarter. Keffiyeh tumblr offal raclette, helvetica retro coloring book mustache juice gochujang irony cray.</p>
                                            </article>

                                            <article>
                                                <h2>Seller2Sellar</h2>
                                                <p className="subDetails">NodeJS, MySQL, Handlebars</p>
                                                <p>Viral shoreditch roof party cold-pressed chartreuse tofu pug jianbing. Man braid scenester seitan venmo craft beer occupy 90's tbh. Swag mustache franzen hashtag helvetica.</p>
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
                                                <p className="subDetails">Full Stack Web Development</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                                            </article>

                                            <article>
                                                <h2>Westwood High School</h2>
                                                <p className="subDetails">General Studies</p>
                                                <p>Graduated in 2012</p>
                                            </article>
                                        </div>
                                        <div className="clear"></div>
                                    </section>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Resume;
