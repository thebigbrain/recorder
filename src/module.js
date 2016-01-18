import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';  
import routes from 'routes';
import createBrowserHistory from 'history/lib/createBrowserHistory'

const history = createBrowserHistory()

render((
	<Router history={history} routes={routes}/>
), document.getElementById('content'))