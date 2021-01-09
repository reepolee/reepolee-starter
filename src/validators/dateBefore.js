const dateBefore = function (paramRecord, paramField, paramAfter, errorMessage, errorBag) {
  if (paramRecord[paramField]["value"] <= paramAfter) return true;
  errorBag.push({ field: paramField, message: errorMessage });
  return false;
};

export default dateBefore;
