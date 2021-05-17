import { Box, Container, Textarea, Label, Button, Grid } from 'theme-ui';
import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, textCharCountState } from '../recoil/characterCounter';
import { replaceItemAtIndex } from '../utility/arrayIndex';
import { todoListState } from '../recoil/todolist';
import { Link, useParams } from 'react-router-dom';

function ItemEdit() {
	const textAreaRef = useRef(null);
	const { id } = useParams();
	const urlId = parseInt(id.substring(1), 10);

	const [ text, setText ] = useRecoilState(textState);
	const textCharCount = useRecoilValue(textCharCountState);
	const [ todoList, setTodoList ] = useRecoilState(todoListState);
	const todoListValue = useRecoilValue(todoListState);
	const index = todoList.findIndex((item) => item.id === urlId);

	const updateItem = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...todoListValue[index],
			title: text
		});

		setTodoList(newList);
	};

	useEffect(() => {
		setText(todoListValue[index].title);
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
