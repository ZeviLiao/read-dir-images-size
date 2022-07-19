const { join, resolve } = require('path');
const sizeOf = require('image-size')
var fs = require('fs');

var dir = 'your/images/filepath'

const ls = fs.readdirSync(dir, { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .map(item => item.name)

// for (img of ls) {
//     const path = join(dir, img);
//     const dimensions = sizeOf(path)
//     console.log(img, dimensions.width, dimensions.height)
// }

    const jsObj = ls.map(img => {
        const path = join(dir, img);
        const dimensions = sizeOf(path)
        return {
            path: img,
            width: dimensions.width,
            height: dimensions.height
        }
    })
    console.log(JSON.stringify(jsObj,null,'\t'))




