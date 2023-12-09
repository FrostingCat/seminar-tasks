const Cyclic: React.FC<any> = ({item}) => {
	return (
		<ul>
			{item.map((it: string) => (
				<img src={it}  style={{height: 520}}/>
			))}
		</ul>
	);
}

export default Cyclic;