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

function validateInput() {
  var effDate = document.getElementById('effectiveDate');
  var expDate = document.getElementById('expiryDate');
  var errorMsg = document.getElementById('errorMsg');

  if (!effDate.value) {
    effDate.classList.add('is-invalid');
    errorMsg.textContent = 'Please select an Effective Date.';
    return false;
  }

  if (!expDate.value) {
    expDate.classList.add('is-invalid');
    errorMsg.textContent = 'Please select an Expiry Date.';
    return false;
  }
  
  removeInvalidClass();
  return true;
}

function removeInvalidClass() {
  document.getElementById('effectiveDate').classList.remove('is-invalid');
  document.getElementById('expiryDate').classList.remove('is-invalid');
  document.getElementById('calculationMethod').classList.remove('is-invalid');
  document.getElementById('adjustedExpiryYes').classList.remove('is-invalid');
  document.getElementById('adjustedExpiryNo').classList.remove('is-invalid');
  document.getElementById('errorMsg').textContent = '';
}

function addInvalidClass() {
  document.getElementById('effectiveDate').classList.add('is-invalid');
  document.getElementById('expiryDate').classList.add('is-invalid');
  document.getElementById('calculationMethod').classList.add('is-invalid');
  document.getElementById('adjustedExpiryYes').classList.add('is-invalid');
  document.getElementById('adjustedExpiryNo').classList.add('is-invalid');
}

window.resetForm = function () {
  document.getElementById('inputForm').reset();
  document.getElementById('resultForm').reset();

  removeInvalidClass();
}

window.calculateTenor = function () {
  if (!validateInput()) {
    return;
  }
  var effectiveDate = document.getElementById('effectiveDate');
  var expiryDate = document.getElementById('expiryDate');
  var calcMethod = document.getElementById('calculationMethod');
  var expAdjusted = document.getElementById('adjustedExpiryYes');

  try {
    var tenor = TenorCalculator.calculateTenor(
      moment.utc(effectiveDate.value).startOf('days').format('YYYY-MM-DD'),
      moment.utc(expiryDate.value).startOf('days').format('YYYY-MM-DD'),
      calcMethod.value,
      expAdjusted.checked
    );

    document.getElementById('tenorValue').value = tenor.value;
    document.getElementById('tenorUnit').value = tenor.unit;
    document.getElementById('tenorBasis').value = tenor.basis;

    removeInvalidClass();
  } catch (e) {
    addInvalidClass();
    document.getElementById('errorMsg').textContent = e.message;
  }
}

$(document).ready(function () {
  $('#effectiveDate').datepicker({
    todayBtn: true,
    todayHighlight: true,
    format: 'yyyy/mm/dd'
  });
  $('#expiryDate').datepicker({
    todayBtn: true,
    todayHighlight: true,
    format: 'yyyy/mm/dd'
  });
});