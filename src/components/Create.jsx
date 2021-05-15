import { useRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Box, Container, Textarea, Label, Button, Grid } from 'theme-ui';
import { textState, textCharCountState } from '../recoil/characterCounter';
import { todoListState } from '../recoil/todolist';

function Create() {
    const textAreaRef = useRef(null);

    const [text, setText] = useRecoilState(textState);
    const textCharCount = useRecoilValue(textCharCountState);
    const setTodoListItems = useSetRecoilState(todoListState);

    const createNewTodo = () => {
        setTodoListItems((oldItems) => [ ...oldItems, {
            id: 1,
            user_id: 1,
            title: text,
            completed: false,
            created_at: '2021-05-15T03:50:04.464+05:30',
            updated_at: '2021-05-15T03:50:04.464+05:30'
        } ]);

        textAreaRef.current.value = '';
        setText('');
    }

	return (
		<Box>
			<Container mt={1} p={3} sx={{ width: [ '100%', '75%', '50%' ] }}>
				<Label mb={2} sx={{ fontSize: 4 }}>
					New todo
				</Label>
				<Textarea ref={textAreaRef} rows={3} mb={2} sx={{ fontSize: 3 }} placeholder="Todo description" onChange={event => {setText(event.target.value)}} />
				<Grid columns={[ 2, 2, 2 ]}>
					<Button sx={{ cursor: 'pointer', maxWidth: '60%' }} onClick={createNewTodo}>New todo</Button>
					<Label mb={2} sx={{ fontSize: 1, display: 'block', textAlign: 'right' }}>
						characters: {textCharCount}
					</Label>
				</Grid>
			</Container>
		</Box>
	);
}

export default Create;
