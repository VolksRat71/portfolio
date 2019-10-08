import React from 'react';
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardActions,
    CardText,
    Button,
} from 'react-mdl';

// Image Imports
import rdtrpzIMG from '../assets/projects/RoadTripperZzz/roadtriperzzz.png';
import ocpygifIMG from '../assets/projects/Occupy_Gif/occupy.jpg';
import triviaIMG from '../assets/projects/Trivia_Game/trivia.JPG';
import trainIMG from '../assets/projects/Train_Scheduler/train.JPG';


class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        // React Native Tab
        if (this.state.activeTab === 0) {
            return (
                <div>
                    React Native
                </div>
            )
            // ReactJS Tab
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <p>ReactJS</p>
                </div>
            )
            // Backend Tab
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <p>BackEnd</p>
                </div>
            )
            // Frontend Tab
        } else {
            return (
                <div className="projects-flexWrap">
                    {/* RoadTripperZzz */}
                    <Card shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 15 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${rdtrpzIMG}) center / cover` }}>RoadtripperZzz</CardTitle>
                        <CardText>
                            This application was built with a group of 5 including myself. It was intedend to help th indecisive traveler with a destination within the Pacific Northwest area. My Primary duties were layout and general front-end User Experience. I also built in a obvious easter egg, I hope you enjoy. *Make sure your volume is up*
                        </CardText>
                        <CardActions border>
                            <Button
                                href="https://volksrat71.github.io/project-1/project-1/index.html"
                                target="_blank"
                                colored ripple>Website</Button>
                            <Button
                                href="https://github.com/VolksRat71/project-1"
                                target="_blank"
                                colored ripple>Github</Button>
                        </CardActions>
                    </Card>
                    {/* Occupy Gif */}
                    <Card shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 15 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${ocpygifIMG}) center / cover` }}>Occupy GIF</CardTitle>
                        <CardText>
                            A simple frontend application that was inteded to learn request and responses to an API, I decided to take a little step further and flex a little frontend User Experience because I had some freetime that week. When images are clicked on, you can pause and play the GIFs.
                        </CardText>
                        <CardActions border>
                            <Button
                                href="https://volksrat71.github.io/GifTastic/"
                                target="_blank"
                                colored ripple>Website</Button>
                            <Button
                                href="https://github.com/VolksRat71/GifTastic"
                                target="_blank"
                                colored ripple>Github</Button>
                        </CardActions>
                    </Card>
                    {/* Train Schedueler */}
                    <Card shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 15 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${trainIMG}) center / cover` }}>Train Scheduler</CardTitle>
                        <CardText>
                            A mostly frontend application that communicates with a Google Firebase Database. Feel free to add your own trains to the schedule, I will keep an eye on the database for any changes!
                        </CardText>
                        <CardActions border>
                            <Button
                                href="https://volksrat71.github.io/trainScheduler/"
                                target="_blank"
                                colored ripple>Website</Button>
                            <Button
                                href="https://github.com/VolksRat71/trainScheduler"
                                target="_blank"
                                colored ripple>Github</Button>
                        </CardActions>
                    </Card>
                    {/* Car Trivia */}
                    <Card shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 15 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${triviaIMG}) center / cover` }}>Car Trivia</CardTitle>
                        <CardText>
                            Written with mostly jQuery logic, this was my first attempt at using timers and populating out of arrays. Also if you feel up to the challange; give it a try and test your car knowledge.
                        </CardText>
                        <CardActions border>
                            <Button
                                href="https://volksrat71.github.io/triviaGame/"
                                target="_blank"
                                colored ripple>Website</Button>
                            <Button
                                href="https://github.com/VolksRat71/triviaGame"
                                target="_blank"
                                colored ripple>Github</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="project-tabs">
                <Tabs className="tab-header" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React Native</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>Backend</Tab>
                    <Tab>Frontend</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;