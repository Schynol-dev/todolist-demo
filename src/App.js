import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
	return (
		<div>
			<Router>
				<Navigation />

				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
