import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import tableRouter from './tableController/tableController'

const cors = require('cors');
const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(bodyParser.json())

app.use('/api/furniture', tableRouter);

app.listen(port, async () => {
	await mongoose.connect('mongodb+srv://frostingcat:03lLhNgolTxUoY6G@cluster0.i4anyeo.mongodb.net/furniture?retryWrites=true&w=majority')
	console.log('Server running on port ' + port);
});
