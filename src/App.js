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
import ItemEdit from './components/ItemEdit';
import ItemDetails from './components/ItemDetails';
import Footer from './components/Footer';

function App() {
	const todoListItems = useRecoilValue(filteredSearchFieldTodoListState);
	const setTodoListItems = useSetRecoilState(todoListState);

	useEffect(
		() => {
			const fetchToDoListItems = () => {
				fetch('https://gorest.co.in/public-api/todos')
					.then((response) => response.json())
					.then((data) => {
						setTodoListItems(() => [ ...data.data ]);
					})
					.catch((error) => error);
			};
			fetchToDoListItems();
		},
		[ setTodoListItems ]
	);

	return (
		<Router>
			<Navigation links={[ { text: 'Home', to: '/' }, { text: 'New Todo', to: '/create' } ]} />
			<Container sx={{ width: [ '100%', '75%', '50%' ] }}>
				<Switch>
					<Route exact path="/">
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
					<Route path={`/todo/edit/:id`}>
						<ItemEdit />
					</Route>
					<Route path={`/todo/details/:id`}>
						<ItemDetails />
					</Route>
				</Switch>
			</Container>

			<Footer />
		</Router>
	);
}

export default App;
