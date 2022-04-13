import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let players= {
  "JohnDu54": {
    "position": [400,300],
    "size":200,
    "image":"Ciarletta.png",
  },
  "Vaxou": {
    "position": [1000,500],
    "size":200,
    "image":"Vaxou.png",
  },
  "Rousseau": {
    "position": [1400,300],
    "size":300,
    "image":"Vaxou.png",
  }
}

let foods = {
  "food1": [350,500],
  "food2": [200,100],
  "food3": [175,400],
  "food4": [900,230],
  "food5": [977,500]}
let foodsize = 100 

let playersize=200
let w = window.innerWidth;
let h = window.innerHeight;
let myname= "JohnDu54"



class Game extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="game">
          <div className="opponents">
              <Opponents/>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
        <div className="food">
          <Food/>
        </div>
      </div>
    );
  }
}


class Opponents extends React.Component {
  renderPlayer(player) {
    let scale = players[player]["size"]/players[myname]["size"];
    const playerStyle = {
      display: "flex",
      margin_left: "auto",
      margin_right: "auto",
      margin_top: "auto",
      margin_bottom: "auto",
      position:"absolute", 
      left: w/2 + players[player]["position"][0] - players[myname]["position"][0] - 200*scale/2,
      top: h/2 + players[player]["position"][1] - players[myname]["position"][1]- 200*scale/2, 
      width: playersize*scale, 
      height: playersize*scale,
    }
    return (
      <div className="opponent" style={playerStyle}>
        <img src={require('./images/'+players[player]["image"])} alt="Mechant"/>
        <p className="text">{player}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="opponentsdisplay">
        {Object.keys(players).map(this.renderPlayer)}
      </div>
    );
  }
}

class Food extends React.Component {
  renderFood(food) {
    let scale = foodsize/players[myname]["size"];
    const foodStyle = {
      display: "flex",
      margin_left: "auto",
      margin_right: "auto",
      margin_top: "auto",
      margin_bottom: "auto",
      position:"absolute", 
      left: w/2 + foods[food][0] - players[myname]["position"][0] - 200*scale/2,
      top: h/2 + foods[food][1] - players[myname]["position"][1]- 200*scale/2, 
      width: foodsize*scale, 
      height: foodsize*scale,
      background_color: "blue",
    }
    return (
      <div className="food" style={foodStyle}>
        <img src={require('./images/'+'Ciarletta.png')} alt="Mechant"/>
      </div>
    )
  }
  render() {
    return (
      <div className="fooddisplay">
        {Object.keys(foods).map(this.renderFood)}
      </div>
    );
  }
}

// =================================================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);