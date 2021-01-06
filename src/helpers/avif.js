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

export default avif;
