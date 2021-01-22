const fg = require("fast-glob");
const { mkdirp, removeSync } = require("fs-extra");
const sharp = require("sharp");

const inFolder = "./content/images";
const outFolder = "./assets/responsive";
const jpg = getFiles(inFolder, "jpg");
console.log("Preparing responsive images");

removeSync(outFolder);

//---
jpg.forEach((el) => {
  //---
  const img = sharp(el.fullpath);
  recodeImage(img, el);
  resizeImage(img, 300, el);
  resizeImage(img, 400, el);
  resizeImage(img, 800, el);
  resizeImage(img, 1200, el);
  resizeImage(img, 1920, el);
});

function resizeImage(img, width, inFile) {
  const f = `${outFolder}/${width}`;
  mkdirp(f, { recursive: true });
  const outputFile = inFile.fullpath.replace(inFolder, f);
  const outputFileAvif = outputFile.replace("jpg", "avif");
  const outputFileWebP = outputFile.replace("jpg", "webp");
  img.resize(width, width, {
    fit: sharp.fit.inside,
    //  withoutEnlargement: true,
  });

  // for dev purposes, you might want to integrate image width into actual image
  // to quickly see which one gets used by the browser
  //
  // const svg = new Buffer.from(`<svg height="${width / 2}" width="${width / 2}"> <text x="0" y="${width / 2}" font-size="${width / 5}" fill="#4400ff">${width}</text> </svg>`);
  // img.composite([{ input: svg, gravity: "center" }]).toBuffer();
  //

  img.clone().toFormat("jpeg").jpeg({ quality: 65 }).toFile(outputFile);
  img.clone().toFormat("avif").avif({ quality: 55 }).toFile(outputFileAvif);
  img.clone().toFormat("webp").webp({ quality: 65 }).toFile(outputFileWebP);
}

function recodeImage(img, inFile) {
  const f = outFolder;
  mkdirp(f);
  const outputFile = inFile.fullpath.replace(inFolder, f);
  const outputFileAvif = outputFile.replace("jpg", "avif");
  const outputFileWebP = outputFile.replace("jpg", "webp");

  img.clone().toFormat("jpeg").jpeg({ quality: 65 }).toFile(outputFile);
  img.clone().toFormat("avif").avif({ quality: 55 }).toFile(outputFileAvif);
  img.clone().toFormat("webp").webp({ quality: 65 }).toFile(outputFileWebP);
}

function getFiles(inFolder, extension) {
  const entries = fg.sync(`${inFolder}/**/*.${extension}`, { dot: true });
  const filesObject = entries.map((file) => {
    const regexp = /^(.*[\\\/])(.*)$/;
    const match = regexp.exec(file);
    const nameExt = match[2].split(".");
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
