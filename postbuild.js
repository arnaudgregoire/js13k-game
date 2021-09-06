const fs = require('fs')
const path = require('path')
const archiver = require('archiver')

if (!fs.existsSync('./build')) {
  fs.mkdirSync('./build')
}
let output = fs.createWriteStream('./build/build.zip')
let archive = archiver('zip', { zlib: { level: 9 } })

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

const addDirectoryToArchive = (directory) => {
  fs.readdirSync(directory).forEach(name => {
    const fullName = path.join(directory, name)
    if (fs.statSync(fullName).isDirectory()) {
      addDirectoryToArchive(fullName)
    } else {
      archive.append(fs.createReadStream(fullName), { name: fullName.split(path.sep).slice(1).join(path.sep) })
    }
  })
}

addDirectoryToArchive('./dist')

archive.finalize()
