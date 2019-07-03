const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                incluldePaths: [path.join(__dirname, 'styles')]
            }
        }
    }
}