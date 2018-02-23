import * as React from 'react';
import './HorseList.css';
import {Horse} from '../Horse/Horse';

const data = require('./team.json');

interface Props {value: number;start:boolean;winner: Function;
}

interface State {key:string;Login: string;Id: string;avator: string;color: string;start: boolean;
}

export class HorseList extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.Winner = this.Winner.bind(this);
	}

	GenerateHorse(value: any) {
		let Random=[];
		while(Random.length < value) {
		   var randomnumber = Math.floor(Math.random()*29) + 1;
		   if(Random.indexOf(randomnumber) > -1) { 
			   continue;
		   }   
		   Random[Random.length] = randomnumber;
		}
		return Random;
	}

	Color(index: any) {
		var color = ['red','green','black','yellow'];
		var progressbar = [];
		for(let i = 0 ; i < index ; i++) {
			progressbar.push(color[i]);
		}
	   return progressbar;
	}
	Winner(winner: any) {
       this.props.winner(winner);
	}

	render() {
	    
		 return (  
				 <div className="HorseList" > 
				 {  
					this.GenerateHorse(this.props.value).map((element, i) => { 
					   return  <Horse
								 Login={data[element].login}
								 Id={data[element].id}
								 avator={data[element].avatar_url} 
								 color={this.Color(this.props.value)[i]}
								 key={data[element].id}
								 start={this.props.start}
								 winner={this.Winner}
								/>; 
					 }          
				   )
				}  
				 </div>
		 );
	 }
}