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

export default webp;
