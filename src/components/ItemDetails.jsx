import { Box, Textarea, Label, Button, Grid } from '@theme-ui/components';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, textCharCountState } from '../recoil/characterCounter';
import { todoListState } from '../recoil/todolist';

function ItemDetails() {
	const textAreaRef = useRef(null);
	const { id } = useParams();
	const urlId = parseInt(id.substring(1), 10);

	const [ text, setText ] = useRecoilState(textState);
	const [ created, setCreated ] = useState('');
	const [ updated, setUpdated ] = useState('');
	const textCharCount = useRecoilValue(textCharCountState);
	const todoList = useRecoilValue(todoListState);
	const index = todoList.findIndex((item) => item.id === urlId);

	useEffect(
		() => {
			setText('');

			fetch(`https://gorest.co.in/public-api/todos/${urlId}`)
				.then((response) => response.json())
				.then((data) => {
					setText(data.data.title);
					setCreated(data.data.created_at.split('T')[0]);
					setUpdated(data.data.updated_at.split('T')[0]);
				})
				.catch((error) => error);
		},
		[ index, setText, todoList, urlId ]
	);

	return (
		<Box mt={1} p={3}>
			<Label mb={2} sx={{ fontSize: 4 }}>
				Todo description
			</Label>
			<Grid columns={[ 2, 2, 2 ]}>
				<Label mb={2} sx={{ fontSize: 1, display: 'block' }}>
					Created at: {created}
				</Label>
				<Label mb={2} sx={{ fontSize: 1, display: 'block', textAlign: 'right' }}>
					Updated at: {updated}
				</Label>
			</Grid>
			<Textarea
				ref={textAreaRef}
				rows={3}
				mb={2}
				sx={{ fontSize: 3 }}
				value={text}
				placeholder="Todo description"
				disabled
			/>
			<Grid columns={[ 2, 2, 2 ]}>
				<Link to="/">
					<Button sx={{ cursor: 'pointer', '&:hover': { bg: '#f5314b' } }}>Go Back</Button>
				</Link>
				<Label mb={2} sx={{ fontSize: 1, display: 'block', textAlign: 'right' }}>
					characters: {textCharCount}
				</Label>
			</Grid>
		</Box>
	);
}

export default ItemDetails;
