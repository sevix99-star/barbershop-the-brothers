import fs from "node:fs";
import path from "node:path";

const srcDir = "C:\\Users\\sevi9\\Desktop\\Barbershop The Brothers Photos";
const destDir = path.join(process.cwd(), "public", "gallery");

/** Source filename (exact) -> URL-safe dest name */
const mapping = [
  ["Zdjęcie środka 1.jpg", "interior-1.jpg"],
  ["Zdjęcie środka 2.jpg", "interior-2.jpg"],
  ["Zdjecie środka 3.jpg", "interior-3.jpg"],
  ["Zdjęcie środka 4.jpg", "interior-4.jpg"],
  ["zdjęcie środka 5.jpg", "interior-5.jpg"],
  ["Fryzura męska 1.jpg", "mens-haircut-1.jpg"],
  ["Fryzura męska 2.jpg", "mens-haircut-2.jpg"],
  ["Fryzura męska 3.jpg", "mens-haircut-3.jpg"],
  ["Fryzura męska 4.jpg", "mens-haircut-4.jpg"],
  ["Fryzura męska 5.jpg", "mens-haircut-5.jpg"],
  ["fryzura dziecięca 1.jpg", "kids-haircut-1.jpg"],
  ["Fryzura dziecięca 2.jpg", "kids-haircut-2.jpg"],
  ["Kawa.jpg", "coffee.jpg"],
  ["Logo the brothers.jpg", "logo-the-brothers.jpg"],
];

fs.mkdirSync(destDir, { recursive: true });

for (const [fromName, toName] of mapping) {
  const from = path.join(srcDir, fromName);
  const to = path.join(destDir, toName);
  if (!fs.existsSync(from)) {
    console.error("Missing:", fromName);
    process.exitCode = 1;
    continue;
  }
  fs.copyFileSync(from, to);
  console.log("Copied", toName);
}
