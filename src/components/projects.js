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
    CardMenu,
    IconButton
} from 'react-mdl';



class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        // Frontend Tab
        if (this.state.activeTab === 0) {
            return (
                <div>
                    {/* RoadTripperZzz */}
                    <Card shadow={5} style={{ width: '512px', margin: 'auto', borderRadius: 15 }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.cameronestoney.com/images/roadtriperzzz.png) center / cover' }}>RoadtripperZzz</CardTitle>
                        <CardText>
                            <span role="img" aria-label="road">🛣</span> A front-end only application used for the indecisive traveler! Input the required fields and "Load Up, Bud!". The website will return an attraction in the beautiful Pacific Northwest! <span role="img" aria-label="thumbs-up">👍</span> *disclaimer* Not very mobile friendly
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
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
            // Backend Tab
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <p>Backend</p>
                </div>
            )
            // ReactJS Tab
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <p>ReactJS</p>
                </div>
            )
            // React Native Tab
        } else {
            return (
                <div>
                    <p>React Native</p>
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
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;