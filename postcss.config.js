module.exports = {
    plugins: {
        "postcss-import": {},
        "autoprefixer": {},
        "precss": {},
        "cssnano": {},
        "postcss-px-to-viewport": {
            "viewportWidth": 750,
            "viewportHeight": 1334,
            "unitPrecision": 5,
            "viewportUnit": "vw",
            "selectorBlackList": [],
            "minPixelValue": 1,
            "mediaQuery": false
        }
    }
}