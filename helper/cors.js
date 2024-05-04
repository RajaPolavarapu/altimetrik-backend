const cors = require('micro-cors')

module.exports = (options = {}) => {
    const allowlist = [
        "http://localhost:3000",
        "https://rajapolavarapu.vercel.app",
        "https://devpreview.netlify.app",
        "https://rajapolavarapu.in",
        "https://altimetrik-task-ui.vercel.app"
    ];
    const multiple = Array.isArray(allowlist);

    return handler => (req, res, ...restArgs) => {
        if (multiple) {
            const { origin } = req.headers
            if (allowlist.includes(origin)) {
                options.origin = origin
            } else {
                options.origin = ' '
            }
        }

        return cors(options)(handler)(req, res, ...restArgs)
    }
}