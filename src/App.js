import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState, filteredTodoListState } from './recoil/todolist';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Create from './components/Create';
import Selection from './components/Selection';
import { Container } from '@theme-ui/components';

function App() {
	const todoListItems = useRecoilValue(filteredTodoListState);
	const setTodoListItems = useSetRecoilState(todoListState);

	useEffect(() => {
		const fetchToDoListItems = async () => {
			await fetch('https://gorest.co.in/public-api/todos')
				.then((response) => response.json())
				.then((data) => {
					setTodoListItems(() => [ ...data.data ]);
				})
				.catch((error) => error);
		};
		fetchToDoListItems();
	}, []);

	return (
		<div>
			<Router>
				<Navigation />

				<Container sx={{ width: [ '100%', '75%', '50%' ] }}>
					<Switch>
						<Route exact path="/">
							<Selection />
							<Home items={todoListItems} />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
					</Switch>
				</Container>
			</Router>
		</div>
	);
}

export default App;
