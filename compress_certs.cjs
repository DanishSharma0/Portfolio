const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const certsDir = path.join(__dirname, 'public', 'certificates');
const backupDir = path.join(__dirname, 'public', 'certificates_backup');

// Create backup dir if not exists
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const files = fs.readdirSync(certsDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
console.log(`Found ${files.length} images to compress...\n`);

(async () => {
  for (const file of files) {
    const srcPath = path.join(certsDir, file);
    const baseName = path.basename(file, path.extname(file));
    const outPath = path.join(certsDir, baseName + '.webp');
    const backupPath = path.join(backupDir, file);

    const sizeBefore = fs.statSync(srcPath).size;

    // Backup original
    fs.copyFileSync(srcPath, backupPath);

    // Convert to WebP (limitInputPixels: false handles the 34MB monster image)
    await sharp(srcPath, { limitInputPixels: false })
      .resize({ width: 1000, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);

    const sizeAfter = fs.statSync(outPath).size;
    const saved = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
    console.log(`✓ ${file}`);
    console.log(`  ${(sizeBefore / 1024 / 1024).toFixed(2)} MB → ${(sizeAfter / 1024).toFixed(0)} KB  (${saved}% saved)\n`);
  }
  console.log('All certificates compressed! Originals backed up to certificates_backup/');
})();
