import { Box, Checkbox, Grid, Heading, Label, Text } from '@theme-ui/components';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todolist';
import { replaceItemAtIndex } from '../utility/arrayIndex';

function Item(props) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((item) => item === props.todo);

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...props.todo,
            completed: !props.todo.completed
        });

        setTodoList(newList);
    }

	return (
		<Box mb={2} p={2} bg="white">
			<Grid columns={[ 2, 2, 2 ]}>
				<Label>
					<Checkbox defaultChecked={props.todo.completed} onChange={toggleItemCompletion} />
				</Label>

				<Heading>{props.todo.title}</Heading>
				<Link>
					<Text>Edit</Text>
				</Link>
				<Link>
					<Text>Details</Text>
				</Link>
			</Grid>
		</Box>
	);
}

export default Item;
