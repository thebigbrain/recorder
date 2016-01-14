import React from 'react';
import { render } from 'react-dom'
import { Router, Route } from 'react-router';  
import routes from 'routes';

render((
	<Router>{routes}</Router>
),document.getElementById('content'))
/*Router.run(routes, Router.HistoryLocation, (Root, state) => {  
  React.render(<Root {...state}/>, document.getElementById('content'));
});*/