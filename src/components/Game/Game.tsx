import * as React from 'react';
import {HorseList} from '../HorseList';
import './Game.css';

interface Props {
}

interface State {value: number;StartRace: boolean;winner: string ;  
}

export class Game extends React.Component<Props, State> {
   constructor(props: Props) { 
    super(props);
    this.state = {value:0 , StartRace: false ,winner: ''};
    this.handleChange = this.handleChange.bind(this);
    this.ResetRace = this.ResetRace.bind(this);
    this.StartRace = this.StartRace.bind(this);
    this.SetWinner = this.SetWinner.bind(this);
  }
  handleChange(event: any) {
    if(event.target.value > 4 || isNaN(event.target.value)) {
			alert('The amount of entered horses are invalid');
		} else {
		this.setState({value: event.target.value});
	  }
  }

	StartRace() {
		this.setState({StartRace: true });
  }
  // By Reset game , i mean that the game will start again where you have to select new horse not reset race
  ResetRace() {
    this.setState({value:0 , StartRace: false , winner: '' });
  }
  SetWinner(winner: any) {
    this.setState({value:0 , StartRace: false , winner: winner});
  }

	render() {
    return (
      <section id="hourse">
      <div className="Background">
        <h3> Welcome to kurtosys horse racing :</h3>
        <p>Enter the number of horses (maximum is 4)</p>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button id="StartRace" onClick={this.StartRace} >Start Game</button>
        <button id="ResetRace" onClick={this.ResetRace} >Reset Reset</button>
        <h4> The winner is : {this.state.winner}</h4>
        <div>
        <div className="Race" >
            < HorseList value={this.state.value} start={this.state.StartRace} winner={this.SetWinner} />
      </div>
        </div>   
      </div>
      </section>
    );
  }
}
