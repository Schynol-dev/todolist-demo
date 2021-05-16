import { Box, Input } from '@theme-ui/components';
import { useRecoilState } from 'recoil';
import { searchFieldTodoListState } from '../recoil/todolist';

function Search() {
	const [ searchValue, setSearchValue ] = useRecoilState(searchFieldTodoListState);

	return (
		<Box mb={2}>
			<Input
				placeholder="Search for todo"
				onChange={({ target: { value } }) => setSearchValue(value)}
				value={searchValue}
				sx={{
					borderColor: 'primary',
					borderWidth: '2px',
					'&:focus': { outlineColor: 'primary', borderWidth: '3px' }
				}}
			/>
		</Box>
	);
}

export default Search;
