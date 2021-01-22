// ----------------------------------------------------------------------------
function dateForDisplay(dateValue, locale) {
  //----------------------------------------------------------------------------
  return new Date(dateValue).toLocaleDateString(locale);
}

// ----------------------------------------------------------------------------
function log(param) {
  //----------------------------------------------------------------------------
  console.log(JSON.stringify(param, null, 4));
}

// ----------------------------------------------------------------------------
function avif(url, size) {
  //----------------------------------------------------------------------------
  let s = url;
  if (size) {
    const fname = s.split("/").pop().split("/").pop();
    s = s.replace(fname, `${size}/${fname}`);
  }

  if (s.includes("png")) {
    return s.split(".png").join(".avif");
  }
  return s.split(".jpg").join(".avif");
}

// ----------------------------------------------------------------------------
function jpeg(url, size) {
  //----------------------------------------------------------------------------
  let s = url;
  if (size) {
    const fname = s.split("/").pop().split("/").pop();
    s = s.replace(fname, `${size}/${fname}`);
  }

  return s;
}

// ----------------------------------------------------------------------------
function webp(url, size) {
  //----------------------------------------------------------------------------
  let s = url;
  if (size) {
    const fname = s.split("/").pop().split("/").pop();
    s = s.replace(fname, `${size}/${fname}`);
  }

  if (s.includes("png")) {
    return s.split(".png").join(".webp");
  }
  return s.split(".jpg").join(".webp");
}

export { dateForDisplay, log, avif, jpeg, webp };
