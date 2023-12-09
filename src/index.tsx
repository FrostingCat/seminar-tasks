import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cyclic from './seminar 4/Cyclic';
import Conditional from './seminar 4/Conditional';
import reportWebVitals from './reportWebVitals';
import Pricing from './seminar 5/Pricing';
import Grids from './seminar 5/Grids';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Todo from './seminar 6/Todo';
import { Provider } from 'react-redux';
import { store } from './seminar 6/store';

// seminar 4
function randomNumberBetween(min: number, max: number): number {
	return Math.ceil(Math.random() * (max - min) + min);
}

var number = randomNumberBetween(0, 4) - 1
var number2 = randomNumberBetween(0, 4) - 1
const images = ["https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
	"https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg",
	"https://cdn.fotosklad.ru/unsafe/9eefc86d58334b0a903ddbaf4a8ddb31/image.jpg",
	"https://rgo.ru/upload/content_block/images/9ca8302358b777e143cd6e314058266b/7065323d0aa2e3fa6e8764c4f57f1655.jpg?itok=sawvdjq3"]
const pass = [images[number], images[number2]]

// seminar 5
const theme = createTheme({
	typography: {
		fontSize: 15,
		h1: {
			fontSize: '2rem',
		},
		h2: {
			fontSize: '3.5rem',
		},
	},
});
export default theme;

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		{/* seminar 4 */}
		{/* <Cyclic 
				item={pass}
				/>
				<Conditional 
				picNumber={number}
				/> */}

		{/* seminar 5 */}
		{/* <ThemeProvider theme={theme}>
			<Pricing />
			<Grids />
		</ThemeProvider> */}

		{/* seminar 6 */}
		{/* <Provider store={store}>
			<Todo />
		</Provider> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
