import React, { Component } from 'react';
import {
    Grid,
    Tabs
} from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div>
                <Tabs className="resume-header" />
                <Grid>
                    <h1>
                        Resume Page
                </h1>
                </Grid>
            </div>
        )
    }
}

export default Resume;
