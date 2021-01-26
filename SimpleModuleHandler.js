"use strict";
exports.__esModule = true;
exports.processRequest = void 0;
function processRequest(req, res) {
    console.log('SimpleModuleHandler.processRequest');
    res.send('Hello World');
}
exports.processRequest = processRequest;
;
