import React, { Component } from 'react';
import {
    Grid,
    Cell,
    Tabs
} from 'react-mdl';

import txtimg from '../assets/site_helper/about_text.gif';
import meimg from '../assets/site_helper/about_me.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <Tabs className="aboutMe-header" />
                <Grid>
                    <Cell col={6}>
                        <img
                            src={txtimg}
                            alt="hello"
                            className="hello"
                        />
                        <img
                            src={meimg}
                            alt="thats me"
                            className="thats_me"
                        />
                    </Cell>
                    <Cell col={6}>
                        <p>
                            Smalltown guy, farts and cars
                        </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;