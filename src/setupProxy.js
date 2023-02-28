const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.apilayer.com',
            changeOrigin: true,
            headers: {
                apikey: 'Fbk95yTZVmWTGLf4Xql8LG3UreHUom1F',
            },
            pathRewrite: {
                '^/api': '/exchangerates_data',
            },
        })
    );
};
