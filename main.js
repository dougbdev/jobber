import express from 'express';
import puppeteer from 'puppeteer'

const urls = {
	"travelers": "https://careers.travelers.com/job-search-results/?addtnl_categories[]=Technology"
}

const app = express();
const PORT = process.env.port || 3000;
const getHtml = async () => {
	// set browser for lauch
	const browser = await puppeteer.launch({
		headless: 'new' // Use the new headless mode
	});

	try {
		const page = await browser.newPage();

		// Navigate to the URL
		await page.goto(urls.travelers, {
			waitUntil: 'networkidle2' // Wait until the network is idle (no more than 2 connections for at least 500ms)
		});

		const htmlContent = await page.content();
		console.log(htmlContent)

		return "";
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
