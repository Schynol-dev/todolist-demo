// Becouse it's demo application I decided to set a static values for dates as it is set up by the backend.

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
		setTodoListItems((oldItems) => [
			...oldItems,
			{
				id: lastItemTodoList.id + 1,
				user_id: 1,
				title: text,
				completed: false,
				created_at: '2021-05-15T03:50:04.464+05:30',
				updated_at: '2021-05-15T03:50:04.464+05:30'
			}
		]);

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
				onChange={(event) => {
					setText(event.target.value);
				}}
			/>
			<Grid columns={[ 2, 2, 2 ]}>
				<Link to="/">
					<Button sx={{ cursor: 'pointer' }} onClick={createNewTodo}>
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
