# DSB Tenor Calculator

The DSB Tenor Calculator tool is a standalone Javascript utility that developers can use to calculate the Tenor value of an instrument, given the Effective Date, and Expiry Date of an instrument. See [DSB Term of Contract FAQ](https://www.anna-dsb.com/download/dsb-term-of-contract-faq/) and [ESMA Reference Data FAQ](https://www.esma.europa.eu/sites/default/files/library/esma70-1861941480-56_qas_mifir_data_reporting.pdf) for more details.

## Getting Started

### Browser Applications
To use the javascript utility in browser applications, download the browserified javascript - [tenor-calculator.min.js](./sample/tenor-calculator.min.js) and include in the HTML, eg:

```HTML
<script src="tenor-calculator.min.js"></script>
```
This will create a global variable `TenorCalculator`, with one method `calculateTenor` that you can call in your code, like this:

```javascript
var tenor = TenorCalculator.calculateTenor('2019-01-01', '2019-01-03');
```

### NodeJS Applications
To use the javascript utility in nodeJS applications, download the source file [tenor-calculator.js](./src/tenor-calculator.js)
and import as:
```javascript
const TenorCalculator = require('./lib/tenor-calculator.js')
```
#
### Usage Snippet:
```javascript
    const EXPIRY_DATE_ADJUSTED = false; // only unadjusted expiry date is supported for now
    let effectiveDate = '2019-02-04';
    let expiryDate = '2019-02-07';

    let esmaTenor = TenorCalculator.calculateTenor(effectiveDate, expiryDate, END_DATE_ADJUSTED);
```
This will return a JSON object with properties `value`, `unit` and `basis`, eg:
```
    {
      'value': 3
      'unit': 'DAYS',
      'basis': 'Whole Weeks"
    }
```

### Sample HTML Application

See [sample/index.html](./sample/index.html) for a sample HTML implementation of the tenor calculator javascript utility which you can play around with.

## References

See links below for a more detailed documentation on how the Tenor Calculator works.

* [DSB CR IR Term Of Contract](https://www.anna-dsb.com/download/dsb-cr-ir-term-of-contract-v1-0_final/)
* [DSB FS Tenor Calculator](https://www.anna-dsb.com/download/dsb-fs-tenor-calculator-final/)