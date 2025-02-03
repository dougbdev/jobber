const urls = {
	"travelers": "https://careers.travelers.com/",
}



const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.port || 3000;


try {
  axios(urls.travelers).then(response => {
    html = response.data;
  });
}
catch (error) {
  console.log(error);
}




app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
