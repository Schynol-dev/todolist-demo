import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Box, Textarea, Label, Button, Grid } from 'theme-ui';
import { textState, textCharCountState } from '../recoil/characterCounter';
import { todoListState } from '../recoil/todolist';

function Create() {
	const textAreaRef = useRef(null);

	const todoList = useRecoilValue(todoListState);
	const [ text, setText ] = useRecoilState(textState);
	const textCharCount = useRecoilValue(textCharCountState);
	const setTodoListItems = useSetRecoilState(todoListState);
	const lastItemTodoList = todoList[todoList.length - 1];

	const createNewTodo = () => {
		fetch(`https://gorest.co.in/public-api/users/${lastItemTodoList.user_id}/todos`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + process.env.REACT_APP_APIKEY },
			body: JSON.stringify({
				user: lastItemTodoList.user_id,
				title: text,
				completed: false
			})
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.code === 201) {
					setTodoListItems((oldItems) => [
						...oldItems,
						{
							id: data.data.id,
							user_id: lastItemTodoList.user_id,
							title: text,
							completed: false,
							created_at: data.data.created_at,
							updated_at: data.data.updated_at
						}
					]);
				} else {
					throw new Error(data.code);
				}
			})
			.catch((errorCode) => {
				alert('Error occured, ' + errorCode);
			});

		textAreaRef.current.value = '';
		setText('');
	};

	return (
		<Box mt={1} p={3}>
			<Label mb={2} sx={{ fontSize: 4 }}>
				New todo
			</Label>
			<Textarea
				ref={textAreaRef}
				rows={3}
				mb={2}
				sx={{ fontSize: 3 }}
				placeholder="Todo description"
				autoFocus
				onChange={(event) => {
					setText(event.target.value);
				}}
			/>
			<Grid columns={[ 2, 2, 2 ]}>
				<Link to="/">
					<Button sx={{ cursor: 'pointer', '&:hover': { bg: '#f5314b' } }} onClick={createNewTodo}>
						New todo
					</Button>
				</Link>
				<Label mb={2} sx={{ fontSize: 1, display: 'block', textAlign: 'right' }}>
					characters: {textCharCount}
				</Label>
			</Grid>
		</Box>
	);
}

export default Create;
