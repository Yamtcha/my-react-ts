import * as React from 'react';
import {Game} from '../Game';
import './App.css';

interface Props {
}

interface State {
	
}
export class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}
	
	render() {
		return (
		<div>
				<div className="header">
					<header className="App-header">
						<img className="Logo" src="https://morbanx.com.au/wp-content/uploads/2016/11/Horse-racing.jpg" alt="logo"/>
							<h1>Kurtosys Horse Racing</h1>   
					</header>
						</div>
							<Game />
		</div> 
		);
		}
}