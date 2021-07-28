"use strict";
exports.__esModule = true;
var DEVlogger_1 = require("./DEVlogger");
var PRODlogger_1 = require("./PRODlogger");
require('dotenv').config();
var logger = null;
if (process.env.NODE_ENV === 'development') {
    logger = DEVlogger_1.buildDevLog();
}
else {
    logger = PRODlogger_1.buildProdLog();
}
exports["default"] = logger;
