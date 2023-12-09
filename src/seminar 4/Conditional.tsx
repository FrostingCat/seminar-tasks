const images = ["https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
	"https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg",
	"https://cdn.fotosklad.ru/unsafe/9eefc86d58334b0a903ddbaf4a8ddb31/image.jpg",
	"https://rgo.ru/upload/content_block/images/9ca8302358b777e143cd6e314058266b/7065323d0aa2e3fa6e8764c4f57f1655.jpg?itok=sawvdjq3"]

const Conditional: React.FC<any> = ({ picNumber }) => {
	if (picNumber == 0)
		return <img src={images[0]} style={{ height: 520 }} />;
	else if (picNumber == 1)
		return <img src={images[1]} style={{ height: 520 }} />;
	else if (picNumber == 2)
		return <img src={images[2]} style={{ height: 520 }} />;
	else
		return <img src={images[3]} style={{ height: 520 }} />;
}

export default Conditional;