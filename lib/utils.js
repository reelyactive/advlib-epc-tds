/**
 * Copyright reelyActive 2015-2022
 * We believe in an open Internet of Things
 */


/**
 * Convert the given hexadecimal string or Buffer to a Buffer.
 * @param {Object} data A hexadecimal-string or Buffer.
 * @return {Object} The data as a Buffer, or null if invalid data format.
 */
function convertToBuffer(data) {
  if(Buffer.isBuffer(data)) {
    return data;
  }

  if(typeof data === 'string') {
    data = data.toLowerCase();
    let isHex = /[0-9a-f]+/.test(data);
    if(isHex) {
      return Buffer.from(data, 'hex');
    }
  }

  return null;
}


/**
 * Convert the given data to a hexadecimal string of the given number of bytes.
 * @param {Object} data The data to convert (Number, String or Buffer).
 * @param {Number} length The target length of the string in bytes.
 * @param {boolean} reverseEndianness Optionally reverse the endianness.
 * @return {String} The data as a hexadecimal string.
 */
function convertToHexString(data, length, reverseEndianness) {
  let hexString = null;

  if(Number.isInteger(data) && (data >= 0)) {
    hexString = data.toString(16).padStart(length * 2, '0');
  }
  if(Buffer.isBuffer(data)) {
    hexString = data.toString('hex').padStart(length * 2, '0');
  }
  if(typeof data === 'string') {
    hexString = data.padStart(length * 2, '0');
  }

  if(hexString && (reverseEndianness === true)) {
    return hexString.match(/.{2}/g).reverse().join('');
  }

  return hexString;
}


/**
 * Determine if the given object has a function of the given name.
 * @param {Object} object The given object.
 * @param {String} functionName The function name for which to check.
 * @return {boolean} True if the function exists, false otherwise.
 */
function hasFunction(object, functionName) {
  if(object && object.hasOwnProperty(functionName) &&
     (typeof object[functionName] === 'function')) {
    return true;
  }

  return false;
}


module.exports.convertToBuffer = convertToBuffer;
module.exports.convertToHexString = convertToHexString;
module.exports.hasFunction = hasFunction;
