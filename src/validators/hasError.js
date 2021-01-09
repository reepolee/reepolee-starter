const hasError = function (paramRecord, paramField, errorMessage, errorBag) {
  if (paramRecord[paramField]["error"] === "") return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
};

export default hasError;
