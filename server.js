/**
 * MA Garments - Local Static Development Server
 * Zero dependencies required. Native Node.js HTTP server.
 * Run with: npm start  (or node server.js)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURI(req.url.split('?')[0]);
  if (urlPath === '/') {
    urlPath = '/index.html';
  }

  let filePath = path.join(__dirname, urlPath);

  // If path doesn't have an extension, try appending .html (clean URL support)
  if (!path.extname(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  // Handle case variance for dyson / Dyson product images
  if (urlPath.includes('/images/products/dyson/')) {
    filePath = path.join(__dirname, urlPath.replace('/images/products/dyson/', '/images/products/Dyson/'));
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 handler
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head><title>404 - Not Found | MA Garments</title><link rel="stylesheet" href="/css/style.css"></head>
        <body class="bg-gray-50 flex items-center justify-center min-h-screen text-center p-6">
          <div class="max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h1 class="text-6xl font-black text-blue-900 mb-2">404</h1>
            <p class="text-xl font-bold text-gray-900 mb-2">Page Not Found</p>
            <p class="text-gray-600 mb-6">The requested path <code>${urlPath}</code> could not be found.</p>
            <a href="/" class="inline-block bg-blue-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition">Return to Home</a>
          </div>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`  MA Garments Website Server Running`);
  console.log(`  Local URL:   http://localhost:${PORT}`);
  console.log(`  Catalogue:   http://localhost:${PORT}/products.html`);
  console.log(`  About:       http://localhost:${PORT}/about.html`);
  console.log(`  Contact:     http://localhost:${PORT}/contact.html`);
  console.log(`==================================================\n`);
});

