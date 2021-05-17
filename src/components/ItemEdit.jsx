import { Box, Container, Textarea, Label, Button, Grid } from 'theme-ui';
import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, textCharCountState } from '../recoil/characterCounter';
import { replaceItemAtIndex } from '../utility/arrayIndex';
import { todoListState } from '../recoil/todolist';
import { Link } from 'react-router-dom';

function ItemEdit(props) {
	const textAreaRef = useRef(null);

	const [ text, setText ] = useRecoilState(textState);
	const textCharCount = useRecoilValue(textCharCountState);
	const [ todoList, setTodoList ] = useRecoilState(todoListState);
	const index = todoList.findIndex((item) => item === props.todo);

	const updateItem = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...props.todo,
			title: text
		});

		setTodoList(newList);
	};

	useEffect(() => {
		setText(props.todo.title);
	}, []);

	return (
		<Box>
			<Container mt={1} p={3}>
				<Label mb={2} sx={{ fontSize: 4 }}>
					Todo description
				</Label>
				<Textarea
					ref={textAreaRef}
					rows={3}
					mb={2}
					sx={{ fontSize: 3 }}
					value={text}
					placeholder="Todo description"
					onChange={(event) => {
						setText(event.target.value);
					}}
				/>
				<Grid columns={[ 2, 2, 2 ]}>
					<Link to="/">
						<Button sx={{ cursor: 'pointer', maxWidth: '60%' }} onClick={updateItem}>
							Update
						</Button>
					</Link>
					<Label mb={2} sx={{ fontSize: 1, display: 'block', textAlign: 'right' }}>
						characters: {textCharCount}
					</Label>
				</Grid>
			</Container>
		</Box>
	);
}

export default ItemEdit;
