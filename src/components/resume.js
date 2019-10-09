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
                <Grid>
                    <Cell col={10}>
                        <div id="cv" class="instaFade">
                            <div class="mainDetails">
                                <div id="name">
                                    <h1 class="quickFade delayTwo">Nathaniel J. Ryan</h1>
                                    <h2 class="quickFade delayThree">Jr. Developer</h2>
                                </div>

                                <div id="contactDetails" class="quickFade delayFour">
                                    <ul>
                                        <li>e: <a href="mailto:joe@bloggs.com" target="_blank">nathanieljryan1994@gmail.com</a></li>
                                        <li>w: <a href="http://localhost:3000/resume">www.nathanielryan.com</a></li>
                                        <li>m: <a href="tel:123-456-7890"> (503) 504-7581</a></li>
                                    </ul>
                                </div>
                                <div class="clear"></div>
                            </div>

                            <div id="mainArea" class="quickFade delayFive">
                                <section>
                                    <article>
                                        <div class="sectionTitle">
                                            <h1>Personal Objective</h1>
                                        </div>

                                        <div class="sectionContent">
                                            <p>A fresh candidate seeking entry level development employment or internships with a progressive company in order to gain valuable skills and experience for career growth.</p>
                                        </div>
                                    </article>
                                    <div class="clear"></div>
                                </section>


                                <section>
                                    <div class="sectionTitle">
                                        <h1>Programming Experience</h1>
                                    </div>

                                    <div class="sectionContent">
                                        <article>
                                            <h2>Job Title at Company</h2>
                                            <p class="subDetails">April 2011 - Present</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                                        </article>

                                        <article>
                                            <h2>Job Title at Company</h2>
                                            <p class="subDetails">Janruary 2007 - March 2011</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                                        </article>

                                        <article>
                                            <h2>Job Title at Company</h2>
                                            <p class="subDetails">October 2004 - December 2006</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                                        </article>
                                    </div>
                                    <div class="clear"></div>
                                </section>


                                <section>
                                    <div class="sectionTitle">
                                        <h1>Key Skills</h1>
                                    </div>

                                    <div class="sectionContent">
                                        <ul class="keySkills">
                                            <li>A Key Skill</li>
                                            <li>A Key Skill</li>
                                            <li>A Key Skill</li>
                                            <li>A Key Skill</li>
                                            <li>A Key Skill</li>
                                            <li>A Key Skill</li>
                                            <li>A Key Skill</li>
                                            <li>A Key Skill</li>
                                        </ul>
                                    </div>
                                    <div class="clear"></div>
                                </section>


                                <section>
                                    <div class="sectionTitle">
                                        <h1>Education</h1>
                                    </div>

                                    <div class="sectionContent">
                                        <article>
                                            <h2>College/University</h2>
                                            <p class="subDetails">Qualification</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                                        </article>

                                        <article>
                                            <h2>College/University</h2>
                                            <p class="subDetails">Qualification</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                                        </article>
                                    </div>
                                    <div class="clear"></div>
                                </section>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
