/**
 * Copyright reelyActive 2022
 * We believe in an open Internet of Things
 */


const utils = require('./utils');


const MIN_BANK_LENGTH_BYTES = 8; // TODO: confirm from TDS


/**
 * Process raw Gen 2 RFID tag memory bank data into semantically meaningful
 * information.
 * @param {Object} data The raw memory banks as a hexadecimal-string or Buffer.
 * @param {Array} libraries Optional ordered list of processing libraries.
 * @param {Object} options Optional processing options.
 * @return {Object} The processed PDU as JSON.
 */
function process(data, libraries, options) {
  let buf = utils.convertToBuffer(data);
  if((buf === null) || (buf.length < MIN_BANK_LENGTH_BYTES)) {
    return null;
  }
  options = options || {};

  let processedPacket = {};

  // TODO: process the packet!

  if(!processedPacket.hasOwnProperty('uri')) {
    processedPacket.uri = 'https://sniffypedia.org/Product/Any_RAIN-Tag/';
  }

  return processedPacket;
}


module.exports.process = process;
