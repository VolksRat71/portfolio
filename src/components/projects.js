import React from 'react';
import { Tabs, Tab } from 'react-mdl';


class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Frontend</Tab>
                    <Tab>Backend</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>React Native</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>
        );
    }
}

export default Projects;