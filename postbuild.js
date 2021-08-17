const fs = require('fs')
const archiver = require('archiver')

let output = fs.createWriteStream('./build/build.zip')
let archive = archiver('zip', {
  zlib: { level: 9 } // set compression to best
})

const MAX = 13 * 1024 // 13kb

output.on('close', function () {
  const bytes = archive.pointer()
  const percent = (bytes / MAX * 100).toFixed(2)
  if (bytes > MAX) {
    console.error(`Size overflow: ${bytes} bytes (${percent}%)`)
  } else {
    console.log(`Size: ${bytes} bytes (${percent}%)`)
  }
})

archive.on('warning', function (err) {
  if (err.code === 'ENOENT') {
    console.warn(err)
  } else {
    throw err
  }
})

archive.on('error', function (err) {
  throw err
})

archive.pipe(output)
archive.append(
  fs.createReadStream('./dist/index.html'), {
    name: 'index.html'
  }
)

archive.append(
  fs.createReadStream('./dist/index.js'), {
    name: 'index.js'
  }
)

archive.append(
  fs.createReadStream('./dist/assets/decorations/cherry.png'), {
    name: 'assets/decorations/cherry.png'
  }
)

archive.append(
  fs.createReadStream('./dist/assets/decorations/lemon.png'), {
    name: 'assets/decorations/lemon.png'
  }
)

archive.append(
  fs.createReadStream('./dist/assets/decorations/mint.png'), {
    name: 'assets/decorations/mint.png'
  }
)

archive.append(
  fs.createReadStream('./dist/assets/decorations/skewer.png'), {
    name: 'assets/decorations/skewer.png'
  }
)

archive.append(
  fs.createReadStream('./dist/assets/shapes/cocktail.png'), {
    name: 'assets/shapes/cocktail.png'
  }
)

archive.append(
  fs.createReadStream('./dist/assets/shapes/standard.png'), {
    name: 'assets/shapes/standard.png'
  }
)

archive.append(
  fs.createReadStream('./dist/assets/shapes/balloon.png'), {
    name: 'assets/shapes/balloon.png'
  }
)

archive.finalize()
