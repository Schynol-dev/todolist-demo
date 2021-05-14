import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState } from './recoil/todolist';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { useEffect } from 'react';

function App() {
	const todoListItems = useRecoilValue(todoListState);
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

				<Switch>
					<Route exact path="/">
						<Home items={todoListItems} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
