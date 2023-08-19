const { createProxyMiddleware } = require("http-proxy-middleware");




module.exports = (app) => {
    app.use(
        createProxyMiddleware("/posts", {
            target: "process.env.REACT_APP_SERVER_URL",
            changeOrigin: true,
        })
    );

    


    app.use(
        createProxyMiddleware("/users", {
            target: "process.env.REACT_APP_SERVER_URL",
            changeOrigin: true,
        })
    );
    
    app.use(
        createProxyMiddleware("/families", {
            target: "process.env.REACT_APP_SERVER_URL",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/comments", {
            target: "process.env.REACT_APP_SERVER_URL",
            changeOrigin: true,
        })
    );
    

};
