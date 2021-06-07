import { Box, Textarea, Label, Button, Grid } from 'theme-ui';
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
	const index = todoList.findIndex((item) => item.id === urlId);

	const updateItem = () => {
		fetch(`https://gorest.co.in/public-api/todos/${urlId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + process.env.REACT_APP_APIKEY },
			body: JSON.stringify({
				title: text
			})
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.code === 200) {
					const newList = replaceItemAtIndex(todoList, index, {
						...todoList[index],
						title: text
					});
					setTodoList(newList);
				} else {
					throw new Error(data.code);
				}
			})
			.catch((errorCode) => {
				alert('Error occured, ' + errorCode);
			});
	};

	useEffect(
		() => {
			fetch(`https://gorest.co.in/public-api/todos/${urlId}`)
				.then((response) => response.json())
				.then((data) => {
					if (data.code === 200) {
						setText(data.data.title);
					} else {
						throw new Error(data.code);
					}
				})
				.catch((errorCode) => {
					alert('Error occured, ' + errorCode);
				});
		},
		[ index, setText, todoList, urlId ]
	);

	return (
		<Box mt={1} p={3}>
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
				autoFocus
				onChange={(event) => {
					setText(event.target.value);
				}}
			/>
			<Grid columns={[ 2, 2, 2 ]}>
				<Link to="/">
					<Button sx={{ cursor: 'pointer', '&:hover': { bg: '#f5314b' } }} onClick={updateItem}>
						Update
					</Button>
				</Link>
				<Label mb={2} sx={{ fontSize: 1, display: 'block', textAlign: 'right' }}>
					characters: {textCharCount}
				</Label>
			</Grid>
		</Box>
	);
}

export default ItemEdit;
