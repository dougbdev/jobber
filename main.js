const urls = {
	"travelers": "https://careers.travelers.com/",
}



const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.port || 3000;



const getHtml = async () => {

  let html = "1";

  try {
    console.log("Entering try block");
    
    html = await axios.get(urls.travelers);
      console.log("Entering response set");
      console.log(html.data);
           return html.data;
 
  }
  catch (error) {
    console.log(error);
  }

}



let info = getHtml();

console.log(info);

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
