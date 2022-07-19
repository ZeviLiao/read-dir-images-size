const { join, resolve } = require('path');
const sizeOf = require('image-size')
var fs = require('fs');

var dir = '/Users/zeviliao/KMprojects/dgpals-portal/public/asset/main/partners/partner-logo'

const ls = fs.readdirSync(dir, { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .map(item => item.name)

for (img of ls) {
    const path = join(dir, img);
    console.log(path)
    sizeOf(path, function (err, dimensions) {
        console.log(img, dimensions.width, dimensions.height)
    })
}




