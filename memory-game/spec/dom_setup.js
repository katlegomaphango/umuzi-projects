const path = require("path");
const fs = require("fs");
const { JSDOM } = require('jsdom');

function setupJSDOM() {
    const dom = new JSDOM(fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8"))
    global.window = dom.window;
    global.document = dom.window.document;
    return dom;
}

module.exports = { setupJSDOM };