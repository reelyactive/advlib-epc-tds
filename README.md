advlib-epc-tds
==============

Decoding library for Gen 2 RFID tags based on the EPC Tag Data Standard (TDS).  __advlib-epc-tds__ can be used standalone or, more commonly, as a processor module of the protocol-agnostic [advlib](https://github.com/reelyactive/advlib) library.

__advlib-epc-tds__ is a lightweight [Node.js package](https://www.npmjs.com/package/advlib-epc-tds) that implements the core of the EPC TDS and can be extended with libraries to decode specific EPC schema.


Consider instead advlib-epc
---------------------------

The __advlib-epc-tds__ library fits the [advlib](https://github.com/reelyactive/advlib) paradigm where the entire packet (in the case of RAIN RFID the raw binary data of the memory banks) is available for processing.  _However_, we have yet to identify a reader which provides access to the raw binary data, _hence this library is nothing more than a placeholder._

Consider instead the [advlib-epc](https://github.com/reelyactive/advlib-epc) library which __processes the EPC itself__.  The EPC is made available by most reader APIs, and is included in the RAIN Communication Interface (RCI).


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


Security
--------

Consult our [security policy](SECURITY.md) for best practices using this open source software and to report vulnerabilities.

[![Known Vulnerabilities](https://snyk.io/test/github/reelyactive/advlib-epc-tds/badge.svg)](https://snyk.io/test/github/reelyactive/advlib-epc-tds)


License
-------

MIT License

Copyright (c) 2022 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
