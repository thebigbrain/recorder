import React from 'react';  
import {Route, IndexRoute, Link} from 'react-router';

import Main from 'components/main';  
import Example from 'components/example';

require("styles/app.css")

class UsersIndex extends React.Component {
  render() {
    return (
      <div>
        <h3>UsersIndex</h3>
        <Link></Link>
      </div>
    )
  }
}

class Dashbord extends React.Component {
	render() {
	    return <div>Welcome to the app!</div>
	}
}

class App extends React.Component {
	render(){
		return (
			<div className="app">
		        <ul className="nav">
		        	<li><Link to="/main" className="link">search</Link></li>
		        	<li><Link to="/main/example" className="link">photo</Link></li>
		        	<li><Link to="/" className="link">default</Link></li>
		        </ul>
		        <div className="detail">{this.props.children}</div>
		        <footer className="footer">footer is here</footer>
			</div>
		)
	}
}

var onEnterCallback = (nextState, replaceState, callback) => {
	console.log(nextState);
	console.log(replaceState);
	console.log(callback);
	if(callback) callback();
}

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Dashbord}/>
		<Route path="main" component={Main}>
			<IndexRoute component={Dashbord}/>
			<Route path="example" component={Example}/>
		</Route>
 	</Route>
);

export default routes; 