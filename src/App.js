import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './components/Navigation';

function App() {
	return (
		<div>
			<Router>
				<Navigation />

				<Switch>
					<Route path="/">
						
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
