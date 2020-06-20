const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use('/api', createProxyMiddleware({ target: 'https://latestprivacy.org', changeOrigin: true }));
    app.use('/donate', createProxyMiddleware({ target: 'https://latestprivacy.org', changeOrigin: true }));
}