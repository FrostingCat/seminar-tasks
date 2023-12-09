import { Box, Button, Typography, CardContent } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAction } from './todoSlice';
import "./Todo.css"

interface TodoItemProps {
	text: string;
	index: number;
}

export const TodoItem: React.FC<TodoItemProps> = ({ text, index }) => {
	const dispatch = useDispatch();

	return (
		<CardContent className='header'>
			<Button variant="outlined" className='todo'>
				{text}
			</Button>
			<Button className="button" variant="contained" color="secondary" onClick={() => dispatch(removeAction(index))}>
				Delete
			</Button>
		</CardContent>
	);
};
