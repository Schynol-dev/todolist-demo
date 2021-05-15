import { Select } from '@theme-ui/components';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoil/todolist';

function Selection() {
	const selectionRef = useRef(null);
	const [ filter, setFilter ] = useRecoilState(todoListFilterState);
	const options = [ 'Show All', 'Show Completed', 'Show Uncompleted' ];

	return (
		<Select ref={selectionRef} defaultValue={filter} onChange={({ target: { value } }) => setFilter(value)}>
			{options.map((option, i) => {
				return <option key={i}>{option}</option>;
			})}
		</Select>
	);
}

export default Selection;
