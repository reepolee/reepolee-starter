// ----------------------------------------------------------------------------
function dateForDisplay(dateValue, locale) {
  return new Date(dateValue).toLocaleDateString(locale);
}

// ----------------------------------------------------------------------------
const avif = function (url, size) {
  let s = url;
  if (size) {
    let fname = s.split("/").pop().split("/").pop();
    s = s.replace(fname, size + "/" + fname);
  }

  if (s.includes("png")) {
    return s.split(".png").join(".avif");
  } else {
    return s.split(".jpg").join(".avif");
  }
};

// ----------------------------------------------------------------------------
const jpeg = function (url, size) {
  let s = url;
  if (size) {
    let fname = s.split("/").pop().split("/").pop();
    s = s.replace(fname, size + "/" + fname);
  }

  return s;
};

// ----------------------------------------------------------------------------
const webp = function (url, size) {
  let s = url;
  if (size) {
    let fname = s.split("/").pop().split("/").pop();
    s = s.replace(fname, size + "/" + fname);
  }

  if (s.includes("png")) {
    return s.split(".png").join(".webp");
  } else {
    return s.split(".jpg").join(".webp");
  }
};

export { dateForDisplay, avif, jpeg, webp };
