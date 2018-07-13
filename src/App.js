import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';

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
              <li><p id='projects'>Projects</p></li>
              <li><p id='contact'>Contact</p></li>
            </ul>
          </nav>
        </header>
        <section className='about'>
          <h1>I am a recent Computer Science graduate from the University of Illinois at Urbana-Champaign. My main interest is front-end development.</h1>
        </section>
        <section className='projects'>
          <h1 id='projects-text'>Projects</h1>
          <Card
            title={'Illini Events'}
            img={require('./assets/illini_events.png')}
            backgroundColor='#DDEDC2'
            description='Created a mobile app to help advertisers increase traffic to their events and to help students find events they may be interested in around campus.'
            tags={['JavaScript', 'React Native']}
            sourceLink='https://github.com/nathankillelea/CS468-Event-App'
          />
          <Card
            title={'JavaScript Game'}
            img={require('./assets/javascript_game.png')}
            backgroundColor='#A9C6CF'
            description='Developed a survival/wave game with a friend in pure JavaScript; the goal of the game is to gain as many points as possible by defeating enemies and chaining combos. The intent of this project was to learn how to program a game. Since neither of us are artists, the visuals were drawn in GIMP and are placeholder.'
            tags={['JavaScript', 'HTML5']}
            sourceLink='https://github.com/nathankillelea/CS242-Final-Project'
          />
          <Card
            title={'Message in a Bottle'}
            img={require('./assets/message_in_a_bottle.png')}
            backgroundColor='#FFABA6'
            description='Created a mobile app with a group of five students. The app allows users to set goals, vent their frustrations throughout the process, and finally motivates users to complete these goals with motivational quotes. I worked on the front-end of this app with two other students.'
            tags={['JavaScript', 'React Native', 'Node.js', 'Express', 'MongoDB']}
            sourceLink='https://github.com/nathankillelea/CS498RK-Final-Project'
          />
        </section>
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
      </div>
    );
  }
}

export default App;
