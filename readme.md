PLAN:

1. get each pages list of results in raw html

2. send to ai api to summarize 

3. email ourselves?

NOTES:

i noticed that we're getting 0 results on the classname search because cheerio can't execute JavaScript. Currently, Cheerio loads the page, the search results are never added to the page because JS can't be execited by cheerio. 

SOLUTION:

Using Puppeteer, instead of cheerio. Puppeteer does have the ability to execute JS, and has all the feautures we may ever need.
