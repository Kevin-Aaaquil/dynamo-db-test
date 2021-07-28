"use strict";
exports.__esModule = true;
exports.buildDevLog = void 0;
var winston_1 = require("winston");
var combine = winston_1.format.combine, timestamp = winston_1.format.timestamp, printf = winston_1.format.printf;
var buildDevLog = function () {
    var myFormat = printf(function (_a) {
        var level = _a.level, message = _a.message, label = _a.label, timestamp = _a.timestamp, stack = _a.stack;
        return level + " : " + timestamp + " : " + (stack || message);
    });
    return winston_1.createLogger({
        level: 'info',
        format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss ZZ' }), winston_1.format.errors({ stack: true }), myFormat),
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({ filename: './LOGS/DEV.log' })
        ]
    });
};
exports.buildDevLog = buildDevLog;
