const fg = require("fast-glob");
const { mkdirp, removeSync } = require("fs-extra");
const sharp = require("sharp");

let inFolder = "./content/images";
let outFolder = "./assets/responsive";
let jpg = getFiles(inFolder, "jpg");

console.log("Preparing responsive images");

removeSync(outFolder);
jpg.forEach((el) => {
  let img = sharp(el.fullpath);
  recodeImage(img, el);
  resizeImage(img, 300, el);
  resizeImage(img, 400, el);
  resizeImage(img, 800, el);
  resizeImage(img, 1200, el);
  resizeImage(img, 1920, el);
});

function resizeImage(img, width, inFile) {
  let f = outFolder + "/" + width;
  mkdirp(f, { recursive: true });
  let outputFile = inFile.fullpath.replace(inFolder, f);
  let outputFileAvif = outputFile.replace("jpg", "avif");
  let outputFileWebP = outputFile.replace("jpg", "webp");
  img.resize(width, width, {
    fit: sharp.fit.inside,
    //   withoutEnlargement: true,
  });

  // for dev purposes, you might want to integrate image width into actual image to quickly see which one gets used by the browser
  //
  // const svg = new Buffer.from(`<svg height="${width / 2}" width="${width / 2}"> <text x="0" y="${width / 2}" font-size="${width / 5}" fill="#4400ff">${width}</text> </svg>`);
  // img.composite([{ input: svg, gravity: "center" }]).toBuffer();
  //

  img.clone().toFormat("jpeg").jpeg({ quality: 65 }).toFile(outputFile);
  img.clone().toFormat("avif").avif({ quality: 55 }).toFile(outputFileAvif);
  img.clone().toFormat("webp").webp({ quality: 65 }).toFile(outputFileWebP);
}

function recodeImage(img, inFile) {
  let f = outFolder;
  mkdirp(f);
  let outputFile = inFile.fullpath.replace(inFolder, f);
  let outputFileAvif = outputFile.replace("jpg", "avif");
  let outputFileWebP = outputFile.replace("jpg", "webp");

  img.clone().toFormat("jpeg").jpeg({ quality: 65 }).toFile(outputFile);
  img.clone().toFormat("avif").avif({ quality: 55 }).toFile(outputFileAvif);
  img.clone().toFormat("webp").webp({ quality: 65 }).toFile(outputFileWebP);
}

function getFiles(inFolder, extension) {
  const entries = fg.sync(`${inFolder}/**/*.${extension}`, { dot: true });
  let filesObject = entries.map((file) => {
    let regexp = /^(.*[\\\/])(.*)$/;
    let match = regexp.exec(file);
    let nameExt = match[2].split(".");
    return {
      fullpath: file,
      filepath: match[1],
      filename: match[2],
      name: nameExt[0],
      ext: nameExt[1],
      dirname: regexp.exec(match[1].substring(0, match[1].length - 1))[2],
    };
  });
  return filesObject;
}
