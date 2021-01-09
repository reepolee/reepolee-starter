const minLength = function (paramRecord, paramField, errorMessage, errorBag) {
  if (paramRecord[paramField]["value"].length > 0) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
};

export default minLength;
