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
        <Link to="/">jump to default</Link>
      </div>
    )
  }
}

class Dashboard extends React.Component {
	render() {
	    return <div>Welcome to the app!</div>
	}
}

class App extends React.Component {
	render(){
		return (
			<div className="app">
		        <div className="express-bars">
		        	<p>search</p>
		        </div>
		        <div className="detail">{this.props.children}</div>
		        <footer className="footer">
			        <ul className="nav">
			        	<li><Link to="/main" className="link" activeClassName="active">Main</Link></li>
			        	<li><Link to="/example" className="link" activeClassName="active">Example</Link></li>
			        	<li><Link to="/" className="link" activeClassName="active">Default</Link></li>
			        </ul>
		        </footer>
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
		<IndexRoute component={UsersIndex}/>
		<Route path="main" component={Main}/>
		<Route path="example" component={Example}/>
 	</Route>
);

export default routes; 