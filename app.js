const http = require('http');

const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<html><head><title>Rozwiazanie zadania PZC 2.1</title></head><body><p>${new Date().toISOString()}</p></body></html>`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
