const minLength = function (paramRecord, paramField, paramLength, errorMessage, errorBag) {
  if (paramRecord[paramField]["value"].length >= paramLength) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
};

export default minLength;
