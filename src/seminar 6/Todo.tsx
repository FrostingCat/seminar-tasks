import { Typography, Grid, Paper, CardContent, Box, CardActions, Button, Container } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { AddAction } from './AddAction';
import { TodoItem } from './TodoItem';
import { RootState } from './store';
import "./Todo.css"

function Todo() {
	const data = useSelector((state: RootState) => state.todo.todos);
	return (
		<Paper className='App-header'>
			<Typography variant="h5">
				Todos
			</Typography>
			<AddAction />
			{data.map((text, i) => {
				return <TodoItem text={text} index={i} key={i} />;
			})}
		</Paper>

	);
}
export default Todo;