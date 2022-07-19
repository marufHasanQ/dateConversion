












import  * as http from 'http';
import {getDate} from './getDate.mjs';
import {generateComparisonArray} from './util.mjs';
// Create an instance of the http server to handle HTTP requests
let comparisonArray;
let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    const date = getDate(comparisonArray)(req.url);
    //    console.log('bangladate',banglaDate);

    res.end(JSON.stringify(date));

    //console.log(req.url)
});
app.on('listening',() => {comparisonArray =[ generateComparisonArray(true),generateComparisonArray(false)]});

app.listen(process.env.PORT);
//console.log('Node server running on port 3000');

