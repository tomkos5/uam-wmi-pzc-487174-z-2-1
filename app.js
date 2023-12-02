const http = require('http');

const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<html><head><title>Rozwiazanie zadania PZC 2.1</title></head><body><p>${getIso8601Date()}</p></body></html>`);
});

function getIso8601Date() {
    const date = new Date();
    const tzOffset = -date.getTimezoneOffset();
    const diff = tzOffset >= 0 ? '+' : '-';
    const pad = (n) => (n < 10 ? '0' + n : n);

    return date.getFullYear() + '-' +
           pad(date.getMonth() + 1) + '-' +
           pad(date.getDate()) + 'T' +
           pad(date.getHours()) + ':' +
           pad(date.getMinutes()) + ':' +
           pad(date.getSeconds()) +
           diff + pad(Math.floor(Math.abs(tzOffset) / 60)) + ':' +
           pad(Math.abs(tzOffset) % 60);
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
