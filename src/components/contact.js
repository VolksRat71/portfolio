import React, { Component } from 'react';
import {
    Grid,
    Cell,
    Tabs,
    List,
    ListItem,
    ListItemContent
} from 'react-mdl';

import img from '../assets/avatars/clean.png';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Tabs className="contact-header" />
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>
                            Nathaniel Ryan
                        </h2>
                        <div className="contact-avatar-bkground">
                            <img
                                src={img}
                                alt="contact-avatar"
                                className="contact avatar"
                            />
                        </div>
                        <p style={{ width: '75%', margin: 'auto', }}>
                            IPhone offal af air plant photo booth selvage. Small batch vice hexagon, food truck adaptogen fingerstache blue bottle photo booth keytar hammock messenger bag. Lo-fi cold-pressed hammock +1. Helvetica cornhole wayfarers synth.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>
                            Contact Me
                            </h2>
                        <hr />
                        <List>
                            <ListItem>
                                <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent icon="person">Aaron Paul</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;