import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id='title'>
            <h1>Nathan Killelea</h1>
          </div>
          <nav>
            <ul>
              <li><div><p id='projects' onClick={() => scrollToComponent(this.Projects, {offset: -30, align: 'top', duration: 750})}>Projects</p></div></li>
              <li><div><p id='contact' onClick={() => scrollToComponent(this.Contact, {offset: 0, align: 'top', duration: 1500})}>Contact</p></div></li>
            </ul>
          </nav>
        </header>
        <section className='about'>
          <h1>I am a recent Computer Science graduate from the University of Illinois at Urbana-Champaign. My main interest is front-end development.</h1>
        </section>
        <section className='projects' ref={(section) => { this.Projects = section;}}>
          <h1 id='projects-text'>Projects</h1>
          <Card
            title={'Illini Events'}
            img={require('./assets/illini_events.png')}
            backgroundColor='#292929'
            description='Created a mobile app to help advertisers increase traffic to their events and to help students find events they may be interested in around campus.'
            tags={['JavaScript', 'React Native', 'Redux']}
            sourceLink='https://github.com/nathankillelea/CS468-Event-App'
          />
          <Card
            title={'JavaScript Game'}
            img={require('./assets/javascript_game.png')}
            backgroundColor='#292929'
            description='Developed a survival/wave game with a friend in pure JavaScript; the goal of the game is to gain as many points as possible by defeating enemies and chaining combos. The intent of this project was to learn how to program a game. Since neither of us are artists, the visuals were drawn in GIMP and are placeholder.'
            tags={['JavaScript', 'HTML5']}
            sourceLink='https://github.com/nathankillelea/CS242-Final-Project'
          />
          <Card
            title={'Message in a Bottle'}
            img={require('./assets/message_in_a_bottle.png')}
            backgroundColor='#292929'
            description='Created a mobile app with a group of five students. The app allows users to set goals, vent their frustrations throughout the process, and finally motivates users to complete these goals with motivational quotes. I worked on the front-end of this app with two other students.'
            tags={['JavaScript', 'React Native', 'Node.js', 'Express', 'MongoDB']}
            sourceLink='https://github.com/nathankillelea/CS498RK-Final-Project'
          />
        </section>
        <section className='contact' ref={(section) => {this.Contact = section;}}>
          <h1 id='contact-text'>Contact me!</h1>
          <footer>
            <a href='https://www.linkedin.com/in/nathan-killelea/'>
              <i className="fa fa-linkedin fa-3x" style={{color:'#0077B5'}}></i>
            </a>
            <a href='https://github.com/nathankillelea'>
              <i className="fa fa-github fa-3x" style={{color:'#333'}}></i>
            </a>
            <a href='mailto:nathan.killelea@gmail.com'>
              <i className="fa fa-envelope-o fa-3x" style={{color:'#ff4343'}}></i>
            </a>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
