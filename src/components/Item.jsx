import { Box, Checkbox, Grid, Heading, Label, Text } from '@theme-ui/components';
import { Link, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todolist';
import { replaceItemAtIndex } from '../utility/arrayIndex';
import ItemEdit from './ItemEdit';

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
        <>
		<Box mb={2} p={2} bg="white">
			<Grid columns={[ 2, 2, 2 ]}>
				<Label>
					<Checkbox defaultChecked={props.todo.completed} onChange={toggleItemCompletion} />
				</Label>

				<Heading>{props.todo.title}</Heading>
				<Link to={`/todo/edit/${props.todo.id}`}>
					<Text>Edit</Text>
				</Link>
				<Link>
					<Text>Details</Text>
				</Link>
			</Grid>
		</Box>

        <Route path={`/todo/edit/${props.todo.id}`}>
            <ItemEdit todo={props.todo} />
        </Route>
        </>
	);
}

export default Item;
