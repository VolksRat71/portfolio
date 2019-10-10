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
                        <p className="aboutMe_bio">
                            Lorem ipsum dolor amet typewriter blue bottle leggings ennui, echo park tilde plaid af hashtag cold-pressed microdosing mustache mumblecore raw denim. Retro echo park vinyl salvia organic. Brooklyn blog stumptown, polaroid vaporware kale chips vape occupy austin crucifix adaptogen woke truffaut. Retro irony tattooed, cloud bread direct trade deep v kinfolk art party actually PBR&B aesthetic thundercats taxidermy. Woke hoodie hell of, paleo forage glossier leggings sartorial ramps vinyl squid authentic waistcoat.
                        Gochujang crucifix kombucha godard activated charcoal. Semiotics fashion axe live-edge 3 wolf moon scenester photo booth, mumblecore air plant crucifix whatever normcore master cleanse la croix YOLO deep v. Mlkshk echo park tilde typewriter, affogato pok pok cloud bread normcore meh authentic poke mixtape readymade. Literally pork belly jianbing twee. Church-key tumeric letterpress humblebrag prism bespoke.
                        Beard cliche slow-carb pork belly taiyaki. Seitan dreamcatcher organic intelligentsia, flannel venmo lyft PBR&B woke tumeric poke +1. Etsy VHS street art truffaut hexagon lo-fi cliche. Waistcoat godard scenester, kickstarter chicharrones letterpress fanny pack subway tile air plant slow-carb irony. Tofu PBR&B quinoa pitchfork tote bag. Marfa deep v palo santo crucifix 3 wolf moon.
                        Unicorn coloring book godard semiotics seitan waistcoat tofu. Disrupt sriracha hashtag knausgaard, ramps asymmetrical seitan tofu gluten-free pug. Godard seitan banjo, tofu truffaut listicle shabby chic etsy tacos tumeric cold-pressed. Slow-carb subway tile deep v polaroid hexagon church-key, man braid brunch pork belly literally kitsch.
                        Organic ugh cornhole edison bulb post-ironic occupy synth fixie chia. La croix asymmetrical
                        </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;