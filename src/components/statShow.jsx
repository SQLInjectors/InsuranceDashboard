import React, { Component } from 'react';
import '../css/statShow.css';

class Stats extends Component {
  constructor() {
    super();
    this.state = {
      type: "Descriptive"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  displayDashboard() {
    if (this.state.type === "Descriptive") {
      // return (<Descriptive/>);
      return (<div> This is the descriptive stats </div>);
    } else {
      // return (<Segmented/>);
      return (<div> This is the segmented stats </div>);
    }
  }

  handleClick(e) {
    const type = e.target.innerHTML.split(' ')[0];
    this.setState({type: type });
  }

  render() {
    const content = this.displayDashboard();
    return (
      <div className="stats">
        <div className="stat-type">
          <span onClick={this.handleClick}>Descriptive Statistics</span>
          <span onClick={this.handleClick}>Segmented Statistics</span>
        </div>

        <div className="content">
          {content}
        </div>
      </div>
    );
  }
}

export default Stats;
