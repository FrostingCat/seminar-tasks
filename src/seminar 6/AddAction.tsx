import { Box, TextField, Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from './todoSlice';
import "./Todo.css"

export const AddAction: React.FC = () => {
    const [state, setState] = React.useState('');
    const dispatch = useDispatch();

	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setState(e.target.value);
    };
    
    const onClick = () => {
        dispatch(addAction(state));
        setState('');
    }

	return (
		<Box>
			<TextField value={state} onChange={onChange} variant='outlined' size='small' />
			<Button onClick={onClick} variant="contained" color="primary">Add</Button>
		</Box>
	);
};
