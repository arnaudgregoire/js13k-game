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
  fs.createReadStream('./dist/assets/decorations/decorations.png'), {
    name: 'assets/decorations/decorations.png'
  }
)

archive.append(
  fs.createReadStream('./dist/assets/shapes/shapes.png'), {
    name: 'assets/shapes/shapes.png'
  }
)

archive.append(
  fs.createReadStream('./dist/assets/customers/crystal.png'), {
    name: 'assets/customers/crystal.png'
  }
)
archive.append(
  fs.createReadStream('./dist/assets/customers/engi.png'), {
    name: 'assets/customers/engi.png'
  }
)
archive.append(
  fs.createReadStream('./dist/assets/customers/human.png'), {
    name: 'assets/customers/human.png'
  }
)
archive.append(
  fs.createReadStream('./dist/assets/customers/lanius.png'), {
    name: 'assets/customers/lanius.png'
  }
)
archive.append(
  fs.createReadStream('./dist/assets/customers/mantis.png'), {
    name: 'assets/customers/mantis.png'
  }
)
archive.append(
  fs.createReadStream('./dist/assets/customers/rockman.png'), {
    name: 'assets/customers/rockman.png'
  }
)
archive.append(
  fs.createReadStream('./dist/assets/customers/slug.png'), {
    name: 'assets/customers/slug.png'
  }
)
archive.append(
  fs.createReadStream('./dist/assets/customers/zoltan.png'), {
    name: 'assets/customers/zoltan.png'
  }
)

archive.finalize()
