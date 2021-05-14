import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { selector, useRecoilValue } from 'recoil';
import Navigation from './components/Navigation';
import Home from './components/Home';

const fetchToDoListItems = () => {
	return fetch('https://gorest.co.in/public-api/todos').then((response) => response.json()).catch((error) => error);
};

const toDoListItems = selector({
	key: 'ToDoListItems',
	get: async () => {
		const response = await fetchToDoListItems();
		return response;
	}
});

function App() {
	const items = useRecoilValue(toDoListItems);

	return (
		<div>
			<Router>
				<Navigation />

				<Switch>
					<Route path="/">
						<Home items={items.data} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
