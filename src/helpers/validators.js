// ----------------------------------------------------------------------------
function isRequired(paramRecord, paramField, errorMessage, errorBag) {
  // ----------------------------------------------------------------------------
  if (paramRecord[paramField].value.length > 0) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
}

// ----------------------------------------------------------------------------
function hasError(paramRecord, paramField, errorMessage, errorBag) {
  // ----------------------------------------------------------------------------
  if (paramRecord[paramField].error === "") return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
}

// ----------------------------------------------------------------------------
function minLength(paramRecord, paramField, paramLength, errorMessage, errorBag) {
  // ----------------------------------------------------------------------------
  if (paramRecord[paramField].value.length >= paramLength) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
}

// ----------------------------------------------------------------------------
function dateBefore(paramRecord, paramField, paramAfter, errorMessage, errorBag) {
  //----------------------------------------------------------------------------
  if (paramRecord[paramField].value <= paramAfter) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
}

// ----------------------------------------------------------------------------
function dateAfter(paramRecord, paramField, paramAfter, errorMessage, errorBag) {
  //----------------------------------------------------------------------------
  if (paramRecord[paramField].value >= paramAfter) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
}

export { isRequired, minLength, hasError, dateBefore, dateAfter };
