var publishCmd = `
echo version=\${nextRelease.version} > gradle.properties
echo VERSION="\${nextRelease.version}" > .env
echo PROJECT_NAME=$(grep -Po 'rootProject\\s*\\.\\s*name\\s*=\\s*"\\K[\\w-]+(?=")' settings.gradle.kts) >> .env
docker compose build
docker compose push
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
