const PROXY_CONFIG = [
    {
        context: ['/backend'],
        target: 'http://localhost:8080/api/eccomerce',
        secure: false,
        logLevel: 'info',
        pathRewrite: { '^/backend': '' }
    }
];

module.exports = PROXY_CONFIG;
