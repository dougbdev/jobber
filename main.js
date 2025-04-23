import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const urls = {
	"travelers": "https://careers.travelers.com/job-search-results/?addtnl_categories[]=Technology",
}

const app = express();

const PORT = process.env.port || 3000;

const getHtml = async () => {

  let html = "1";

  try {
    
    html = await axios.get(urls.travelers);

    const test = cheerio.load(html);

    const textContent = test('.job')
      .map((i, el) => test(el).text().trim()) // Extract and trim text
      .get()
      .filter(text => text.length > 0) // Remove empty lines
      .join('\n'); // Separate text properly
    console.log(textContent);

    return textContent;
 
  }
  catch (error) {
    console.log(error);
  }

}

let info = await getHtml();

console.log(info);

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
