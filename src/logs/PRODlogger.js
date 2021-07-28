"use strict";
exports.__esModule = true;
exports.buildProdLog = void 0;
var winston_1 = require("winston");
var combine = winston_1.format.combine, timestamp = winston_1.format.timestamp, errors = winston_1.format.errors, json = winston_1.format.json;
var buildProdLog = function () {
    return winston_1.createLogger({
        level: 'info',
        format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss ZZ' }), errors({ stack: true }), json()),
        defaultMeta: { service: 'user-service' },
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({ filename: './LOGS/PROG.log' })
        ]
    });
};
exports.buildProdLog = buildProdLog;
