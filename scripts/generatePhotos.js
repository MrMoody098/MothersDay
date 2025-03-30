const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size').default;

const photosDir = path.join(__dirname, '../public/photos');
const outputFilePath = path.join(__dirname, '../src/photos.js');

const photos = fs.readdirSync(photosDir).map(file => {
    const filePath = path.join(photosDir, file);
    try {
        const buffer = fs.readFileSync(filePath);
        const dimensions = sizeOf(buffer);
        return {
            src: `/photos/${file}`,
            width: dimensions.width,
            height: dimensions.height
        };
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
        return null;
    }
}).filter(photo => photo !== null);

const output = `const photos = ${JSON.stringify(photos, null, 4)};\n\nexport default photos;`;

fs.writeFileSync(outputFilePath, output);
console.log('photos.js has been generated');