import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const urls = {
	"travelers": "https://careers.travelers.com/job-search-results/?addtnl_categories[]=Technology", "search-results-ol"
}

const app = express();

const PORT = process.env.port || 3000;

const getHtml = async () => {

	let html = "1";

	try {

		let html = await axios.get(urls.travelers);
		//		console.log("html: ", html);

		const test = cheerio.load(html.data); // failing, and whats the point of cheerio anyways?
		console.log("test: ", test.parseHTML());

		const textContent = test('.job')
			.map((i, el) => test(el).text().trim()) // Extract and trim text
			.get()
			.filter(text => text.length > 0) // Remove empty lines
			.join('\n'); // Separate text properly

		console.log("text content: ", textContent);

		return textContent;

	}
	catch (error) {
		console.log("error: ", error);
	}

}

let info = await getHtml();

console.log("info: ", info);

app.listen(PORT, () => {
	console.log(`server is running on PORT:${PORT}`);
});
