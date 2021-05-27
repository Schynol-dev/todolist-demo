import { Checkbox, Flex, Heading, Label, Button, Box } from '@theme-ui/components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todolist';
import { removeItemAtIndex, replaceItemAtIndex } from '../utility/arrayIndex';
import arrowDown from '../assets/card-arrow-down.svg';

function Item(props) {
	const [ showMenu, setShowMenu ] = useState(false);
	const [ todoList, setTodoList ] = useRecoilState(todoListState);
	const index = todoList.findIndex((item) => item === props.todo);

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...props.todo,
			completed: !props.todo.completed
		});

		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
	};

	return (
		<Flex
			mb={3}
			pt={3}
			pb={3}
			pl={2}
			pr={2}
			bg="white"
			sx={{
				alignItems: 'center',
				justifyContent: 'space-between',
				boxShadow: '6px 6px 6px 0px rgba(0,0,0,0.35)'
			}}
		>
			<Label sx={{ width: '1rem' }}>
				<Checkbox defaultChecked={props.todo.completed} onChange={toggleItemCompletion} />
			</Label>

			<Heading as="h3" ml={4} mr={1}>
				{props.todo.title}
			</Heading>

			<Box
				sx={{ minWidth: '8rem', position: 'relative' }}
				onMouseEnter={() => setShowMenu(true)}
				onMouseLeave={() => setShowMenu(false)}
			>
				<Button sx={{ width: '100%', cursor: 'pointer', borderRadius: '0px' }}>
					<img src={arrowDown} alt='arrow' />
				</Button>

				<Box sx={{ position: 'absolute', display: `${showMenu ? '' : 'none'}`, zIndex: '999' }}>
					<Link to={`/todo/details/:${props.todo.id}`}>
						<Button
							sx={{ width: '100%', cursor: 'pointer', borderRadius: '0px', '&:hover': { bg: '#f5314b' } }}
						>
							Details
						</Button>
					</Link>

					<Link to={`/todo/edit/:${props.todo.id}`}>
						<Button
							sx={{ width: '100%', cursor: 'pointer', borderRadius: '0px', '&:hover': { bg: '#f5314b' } }}
						>
							Edit
						</Button>
					</Link>

					<Button
						sx={{ width: '100%', cursor: 'pointer', borderRadius: '0px', '&:hover': { bg: '#f5314b' } }}
						onClick={deleteItem}
					>
						Delete
					</Button>
				</Box>
			</Box>
		</Flex>
	);
}

export default Item;
