import * as React from 'react';
import { LinearProgress } from 'material-ui/Progress';
import './Horse.css';

interface Props {start: boolean;Login: string;Id: string;avator: string; color: string;
}

interface State {
  timer: number;
	completed: number;
}

export class Horse extends React.Component <Props,State> {
	constructor(props: Props) {
    super(props);
    this.state = {
      timer: Math.floor(Math.random() * 500) ,
      completed: 0
    };
    this.myTimer = this.myTimer.bind(this);
    this.Speed = this.Speed.bind(this);
}

Speed (timer: any) {
  if(this.state.completed === 0 && this.props.start) { 
     setInterval(this.myTimer,timer);
  }
}

myTimer() {
    if(this.state.completed <= 100) {
      this.setState({ completed: this.state.completed + Math.floor(Math.random() * 10) });
    }
}

render() {
    
       this.Speed(this.state.timer);
    
    return (
      < div className="RaceTrackBackground">
				<img className="picture" id={this.props.Id}   src={this.props.avator} alt="avator"/>
				<div className="ProgressBar" >
        <LinearProgress variant="determinate" color={'secondary'} value={this.state.completed} />
				</div>
			</div>
    );
 }
}
