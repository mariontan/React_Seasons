import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from'./SeasonDisplay'
import Spinner from  './Spinner'
// const App =()=>{
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position)=>console.log(position),
// 		(err)=>console.log(err)
// 	);
// 	return(
// 		<SeasonDisplay/>
// 	);

// };
class App extends React.Component{
	state={lat:null, errorMessage: ''};
	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			(position)=>{
				this.setState({lat:position.coords.latitude});//runs at some point in time in the future does not run when constructor runs at first run
			},
			(err)=>{
				this.setState({errorMessage: err.message});
			}
		);

	}
	// has to be declared 
	render(){
	
		if(this.state.errorMessage&&!this.state.lat){
			return <div> Error: {this.state.errorMessage} </div>;
		}

		if(!this.state.errorMessage && this.state.lat){
			return <SeasonDisplay lat={this.state.lat}/>;
		}

		return <Spinner/>;
	}
}

ReactDOM.render(<App/>, document.querySelector("#root"));