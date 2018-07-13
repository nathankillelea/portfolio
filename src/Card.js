import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    console.log(this.props.tags);
    return (
      <div className="Card">
        <div className="top-card" style={{'background-color': this.props.backgroundColor}}>
          <img src={this.props.img} />
        </div>
        <div className="bottom-card">
          <div className="info-text">
            <strong id="project-title">{this.props.title}</strong>
            <div className="info-text-right">
              <p id="description">{this.props.description}</p>
              <div className="tags">
              {this.props.tags.map((tag, index) => {
                return <p className="tag" key={index}>{tag}</p>
              })}
              </div>
              <div className="links">
                <a href={this.props.sourceLink} id='sourceLink'>Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
