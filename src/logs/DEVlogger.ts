import winston from 'winston'
import {format, createLogger, transports} from 'winston'
const {combine, timestamp, printf} = format

const buildDevLog = ()=>{
    const myFormat = printf(({level, message, label, timestamp, stack})=>{
        return `${level} : ${timestamp} : ${stack || message}`;
    });

    return createLogger({
        level : 'info',
        format: combine(
            timestamp({format: 'YYYY-MM-DD HH:mm:ss ZZ'}),
            format.errors({stack : true}),
            myFormat
        ),
        transports: [
            new transports.Console(),
            new transports.File({filename : './LOGS/DEV.log'})
        ],
    });

}

export {buildDevLog}