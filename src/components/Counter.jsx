import { Box, Grid, Label } from '@theme-ui/components';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../recoil/todolist';

function Counter() {
    const todoListStats = useRecoilValue(todoListStatsState);

	return (
		<Box mb={2}>
        <Grid columns={[ 2, 2, 2 ]}>
			<Label sx={{ fontSize: 1, display: 'block', textAlign: 'left' }}>Uncompleted todos: {todoListStats.totalCompletedNumber}</Label>
			<Label sx={{ fontSize: 1, display: 'block', textAlign: 'right' }}>Completed todos: {todoListStats.totalUncompletedNumber}</Label>
            </Grid>
		</Box>
	);
}

export default Counter;
