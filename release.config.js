var publishCmd = `
true || echo 'write any further pre-release script here'
`
var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    ["@semantic-release/exec", {
        "publishCmd": publishCmd,
    }],
    ["@semantic-release/github", {
        "assets": [ 
            { "path": "charts.tar.zst" },
         ]
    }],
    "@semantic-release/git",
)
module.exports = config
