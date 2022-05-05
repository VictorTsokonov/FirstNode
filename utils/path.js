const path = require("path");

module.exports = path.dirname(process.mainModule.filename); // If doesn't work, use --> module.exports = path.dirname(require.mainModule.filename);