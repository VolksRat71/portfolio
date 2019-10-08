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
                    </Cell>
                    <Cell col={12}>
                        <p style={{ width: '75%', margin: 'auto', }}>
                            If you wanna get in touch, talk to me about employment, a project collaboration or just say "hi",
                            fill out a form, use my phone number, email me, add me on LinkdIn. Please take advantage of my many paths of
                            communication. ~let's talk
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>
                            Contact Me
                            </h2>
                        <hr />
                        <List style={{ width: '75%', textAlign: 'center' }}>
                            <div style={{ flexWrap: "wrap" }}>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i class="fa fa-reply"></i>
                                        {"  "}Fill out a form
                                </ListItemContent>
                                </ListItem>
                            </div>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    {"  "}(503) 504-7581
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', }}>
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                    {"  "}Email
                                </ListItemContent>                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                    <i class="fa fa-linkedin"></i>
                                    {"  "}LinkedIn
                                </ListItemContent>                            </ListItem>
                        </List>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;