const fs = require("fs");

const files = fs.readdirSync("./src/images");

files.forEach((file, index) => {
  console.log(`import img${index + 1} from "../images/${file}";`);
});

console.log("\nconst defaultImg = [");

files.forEach((file, index) => {
  console.log(`  img${index + 1},`);
});

console.log(`].map((img, index) => ({
  id: index,
  image: { url: img },
}));`);