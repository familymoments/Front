const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app)=> {
    app.use(
        createProxyMiddleware('/api', {
            target: "http://119.192.42.243:10002/",
            changeOrigin: true,
        })
    );
}