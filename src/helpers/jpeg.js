const jpeg = function (url, size) {
  let s = url;
  if (size) {
    let fname = s.split("/").pop().split("/").pop();
    s = s.replace(fname, size + "/" + fname);
  }

  return s;
};

export default jpeg;
