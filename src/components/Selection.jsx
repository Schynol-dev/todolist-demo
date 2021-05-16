import { Box, Select } from '@theme-ui/components';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoil/todolist';

function Selection() {
	const selectionRef = useRef(null);
	const [ filter, setFilter ] = useRecoilState(todoListFilterState);
	const options = [ 'Show All', 'Show Completed', 'Show Uncompleted' ];

	return (
		<Box mb={2}>
			<Select
				ref={selectionRef}
				defaultValue={filter}
				onChange={({ target: { value } }) => setFilter(value)}
				sx={{
					borderColor: 'primary',
					borderWidth: '2px',
					'&:focus': { outlineColor: 'primary', borderWidth: '3px' }
				}}
			>
				{options.map((option, i) => {
					return <option key={i}>{option}</option>;
				})}
			</Select>
		</Box>
	);
}

export default Selection;
