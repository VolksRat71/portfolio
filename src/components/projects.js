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
import todo from '../assets/projects/2.JPG';
import guess from '../assets/projects/word.png';
import emit from '../assets/projects/splash.png';
import port from '../assets/projects/portfolio.jpg';
import drone from '../assets/projects/tello_UI.JPG';
import clicky from '../assets/projects/clicky.JPG';
import friend from '../assets/projects/friend_finder.JPG';
import c2s from '../assets/projects/s2c.png';
import wordGuess from '../assets/projects/wordguess.jpg';
import liri from '../assets/projects/liri.JPG';
import bamazon from '../assets/projects/bamazon.JPG';
import trainIMG from '../assets/projects/train.JPG';
import triviaIMG from '../assets/projects/trivia.JPG';
import ocpygifIMG from '../assets/projects/occupy.jpg';
import rdtrpzIMG from '../assets/projects/roadtriperzzz.png';

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        // React Native Tab
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-flexWrap">
                    {/* Emit */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#000', height: '176px', background: `url(${emit}) center / cover` }}>Emit</CardTitle>
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
                    {/* Number Guess React Native */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#000', height: '176px', background: `url(${guess}) center / cover` }}>Number Guess</CardTitle>
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
                    {/* To Do React Native */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#000', height: '176px', background: `url(${todo}) center / cover` }}>To Do</CardTitle>
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
                </div>
            )
            // ReactJS Tab
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-flexWrap">
                    {/* Clicky Game */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#000', height: '176px', background: `url(${clicky}) center / cover` }}>Clicky Game</CardTitle>
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
                    {/* Drone Controller */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#000', height: '176px', background: `url(${drone}) center / cover` }}>Drone Controller</CardTitle>
                        <CardText>
                            A Full stack application featuring Node.JS, React.JS and a DJI Tello drone. You can control
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
                    {/* Portfolio */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${port}) center / cover` }}>Portfolio</CardTitle>
                        <CardText>
                            The Website you are on right now was written with React.JS, there is a ton of functions and features I learned while creating this!
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
                </div>
            )
            // Full Stack Tab
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-flexWrap">
                    {/* Seller2Celler */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${c2s}) center / cover` }}>Seller2Celler</CardTitle>
                        <CardText>
                            This was a project witha group of 5 inlucing myself. A full stack app allowing the user to catalog their wine collection and buy/sell with other users. I was in charge of Frontend and User experience.
                        </CardText>
                        <CardActions border>
                            <Button
                                href="https://glacial-plains-59439.herokuapp.com"
                                target="_blank"
                                colored ripple>Website</Button>
                            <Button
                                href="https://github.com/VolksRat71/project-1"
                                target="_blank"
                                colored ripple>Github</Button>
                        </CardActions>
                    </Card>
                    {/* Friend Finder */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#000', height: '176px', background: `url(${friend}) center / cover` }}>Friend Finder</CardTitle>
                        <CardText>
                            This app is a fullstack application, made it with a theme from the show "The Office", it compares personality trates to charactors in "The Office" to find you a friend with common traits.
                        </CardText>
                        <CardActions border>
                            <Button
                                href="https://fierce-bastion-39629.herokuapp.com/"
                                target="_blank"
                                colored ripple>Website</Button>
                            <Button
                                href="https://github.com/VolksRat71/friend_finder"
                                target="_blank"
                                colored ripple>Github</Button>
                        </CardActions>
                    </Card>
                </div>
            )
            // Backend
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-flexWrap">
                    {/* bamazon */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${bamazon}) center / cover` }}>Bamazon</CardTitle>
                        <CardText>
                            Written with Node.JS this application is designed to keep track of an inventory database written in mySQL. You can use it as either a "customer" or a "manager", the README includes how to use each version.
                        </CardText>
                        <CardActions border>
                            <Button
                                href="https://github.com/VolksRat71/bamazon"
                                target="_blank"
                                colored ripple>Github</Button>
                        </CardActions>
                    </Card>
                    {/* Liri */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${liri}) center / cover` }}>Liri</CardTitle>
                        <CardText>
                            Written with Node.JS this application sends request to 3 different API's that are determined by user input in a CLI (example: node liri concert-this NOFX), upon API response, it will be formatted and displayed in CLI.
                        </CardText>
                        <CardActions border>
                            <Button
                                href="https://github.com/VolksRat71/liriNode"
                                target="_blank"
                                colored ripple>Github</Button>
                        </CardActions>
                    </Card>
                    {/* Word Guess */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${wordGuess}) center / cover` }}>Word Guess</CardTitle>
                        <CardText>
                            Written with Node.JS this application compares user input keys and compares them to letters out of a iconic car name. Each correct letters guess will be reivled to user.
                        </CardText>
                        <CardActions border>
                            <Button
                                href="https://github.com/VolksRat71/constructorWordGuess"
                                target="_blank"
                                colored ripple>Github</Button>
                        </CardActions>
                    </Card>
                </div>
            )
            // Frontend Tab
        } else {
            return (
                <div className="projects-flexWrap">
                    {/* RoadTripperZzz */}
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${rdtrpzIMG}) center / cover` }}>RoadtripperZzz</CardTitle>
                        <CardText>
                            This application was built with a group of 4 including myself. It was intedend to help th indecisive traveler with a destination within the Pacific Northwest area. My Primary duties were layout and general front-end User Experience. I also built in a obvious easter egg, I hope you enjoy. *Make sure your volume is up*
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
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: `url(${ocpygifIMG}) center / cover` }}>Occupy GIF</CardTitle>
                        <CardText>
                            A simple frontend application that was inteded to learn request and responses to an API, I decided to take a little step further and flex a little frontend User Experience.
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
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
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
                    <Card className="projectCard" shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15, marginBottom: 20 }}>
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
                    <Tab>Full Stack</Tab>
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