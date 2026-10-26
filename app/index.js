const http = require('http');

function calculateFee(amount) {
  return Math.round(amount * 0.02 * 100) / 100;
}

function handler(req, res) {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'UP', service: 'payment-engine' }));
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Payment Engine running');
}

if (require.main === module) {
  http.createServer(handler).listen(3000, () => {
    console.log('payment-engine listening on port 3000');
  });
}

module.exports = { handler, calculateFee };