import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    console.log(this.props.tags);
    return (
      <div className="Card">
        <div className="top-card" style={{'background': this.props.backgroundColor}}>
          <img src={this.props.img} />
        </div>
        <div className="bottom-card">
          <div className="info-text">
            <h1 id="project-title">{this.props.title}</h1>
            <div className="info-text-bottom">
              <p id="description">{this.props.description}</p>
              <div className="tags">
              {this.props.tags.map((tag, index) => {
                return <p className="tag" key={index}>{tag}</p>
              })}
              </div>
              <div className="links">
                <div id="source-link">
                  <i className="fa fa-github fa" style={{color:'#fff'}}></i>
                  <a href={this.props.sourceLink}>Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
