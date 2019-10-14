import React, { Component } from 'react';
import {
    Grid,
    Cell,
    List,
    ListItem,
    ListItemContent,
    ListItemAction,
} from 'react-mdl';

import img from '../assets/site_helper/contact-me.gif';

class Contact extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto', height: '100%' }}>
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
                                     use my phone number, email me, add me on LinkdIn; take advantage of my many paths of
                                    communication. ~let's talk
                                </p>
                                <div className="link-list">
                                    <List>
                                        <ListItem>
                                            <ListItemAction>
                                                <a href="/contact" className="list_item">
                                                    <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                                                </a>
                                            </ListItemAction>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAction>
                                                <a href="/contact" className="list_item">
                                                    <ListItemContent icon="person">Aaron Paul</ListItemContent>
                                                </a>
                                            </ListItemAction>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAction>
                                                <a href="/contact" className="list_item">
                                                    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                                                </a>
                                            </ListItemAction>
                                        </ListItem>
                                    </List>
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