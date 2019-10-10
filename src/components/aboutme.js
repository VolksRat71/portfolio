import React, { Component } from 'react';
import {
    Grid,
    Cell,
    Tabs
} from 'react-mdl';

import txtimg from '../assets/site_helper/about_text.gif';
import meimg from '../assets/site_helper/example_photo.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <Tabs className="aboutMe-header" />
                <Grid>
                    <Cell col={6}>
                        <img
                            src={meimg}
                            alt="thats me"
                            className="thats_me"
                        />
                    </Cell>
                    <Cell col={6}>
                        <img
                            src={txtimg}
                            alt="hello"
                            className="hello"
                        />
                        {/* 250 words */}
                        <p className="aboutMe_bio">
                            I come from a small coal town in the Midwest. I moved to the West Coast to pursue a career in technology and computer sciences. I am currently a free agent
                            with a formal education through the University of Oregon. My studies have given me proficiency in a wide array of technologies and design capabilities, such as ReactJS,
                            NodeJS, and JavaScript in general. I am interested in following whichever development path my career points me to, although I do have a keen eye for UI/UX.
                            Discovery of this ability has pivoted my focus to backend development, because I realized it is something I need to work on. I am a quick learner and very passionate,
                            whether it be cars or computers. Knowing "how it works" is my forte. Please reach out; employers, designers, students and all. I am excited to hear from you!
                        </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;