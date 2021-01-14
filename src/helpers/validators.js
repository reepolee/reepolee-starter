const isRequired = function (paramRecord, paramField, errorMessage, errorBag) {
  if (paramRecord[paramField]["value"].length > 0) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
};

const hasError = function (paramRecord, paramField, errorMessage, errorBag) {
  if (paramRecord[paramField]["error"] === "") return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
};

const minLength = function (paramRecord, paramField, paramLength, errorMessage, errorBag) {
  if (paramRecord[paramField]["value"].length >= paramLength) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
};

const dateBefore = function (paramRecord, paramField, paramAfter, errorMessage, errorBag) {
  if (paramRecord[paramField]["value"] <= paramAfter) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
};

const dateAfter = function (paramRecord, paramField, paramAfter, errorMessage, errorBag) {
  if (paramRecord[paramField]["value"] >= paramAfter) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
};

export { isRequired, minLength, hasError, dateBefore, dateAfter };
