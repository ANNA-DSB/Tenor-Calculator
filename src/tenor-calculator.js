/**
 * Copyright © 2019 The Derivatives Service Bureau Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */

'use strict';

/**
 * 
 * @param {string} start - start date in YYYY-MM-DD format
 * @param {string} end - end date in YYYY-MM-DD format
 * @param {string} calculationMethod - default 'ESMA'
 * @param {string} endDateAdjusted - default false
 */
exports.calculateTenor = function (start, end, calculationMethod = 'ESMA', endDateAdjusted = false) {
  if (endDateAdjusted !== false) {
    throw {
      "name": "InvalidException",
      "message": "Given \"Adjusted Expiry Date\" is not yet supported."
    }
  }

  switch (calculationMethod) {
    case 'ESMA':
      return require('./tenor-calculator-esma').calculateTenor(start, end, endDateAdjusted);
  }

  throw {
    "name": "InvalidException",
    "message": "Given \"Calculation Method\" is not yet supported."
  }
}