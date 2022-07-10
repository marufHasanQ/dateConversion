












import  * as http from 'http';
import {getDate} from './getDate.mjs';
// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    const date = getDate(req.url);
    //    console.log('bangladate',banglaDate);

    res.end(JSON.stringify(date));

    //console.log(req.url)
});

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

