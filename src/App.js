import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState, filteredSearchFieldTodoListState } from './recoil/todolist';
import { useEffect } from 'react';
import { Container, Grid } from '@theme-ui/components';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Create from './components/Create';
import Selection from './components/Selection';
import Search from './components/Search';
import Counter from './components/Counter';

function App() {
	const todoListItems = useRecoilValue(filteredSearchFieldTodoListState);
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
						<Route path="/">
							<Grid gap={0} columns={[ 1, 2, 2 ]}>
								<Search />
								<Selection />
							</Grid>
							<Counter />
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
