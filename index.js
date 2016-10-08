/**
 * @description
 * Loging information as backup.
 */

'use strict';

let log = require('./log').logger('test.log');

let showName = (name) => {

    if (!name) {
        return log.error('showName method called, but no name was added. At ' + Date.now());
    }

    log.info('showName method called');
    log.info('Lets add ' + name + '`s name.');

    console.log('Hello', name);

    log.info(name + ' added');
    log.info('bye');
    log.info(Date.now());

};

showName('Cauê');