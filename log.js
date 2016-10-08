/**
 * @description
 * Log information
 */

'use strict';

const winston = require('winston');

let self = {
    logger: (name) => {
        return new (winston.Logger)({
            transports: [
                new (winston.transports.Console)(),
                new (winston.transports.File)({filename: 'logs/' + name, json: true})
            ]
        });
    }
};

module.exports = self;