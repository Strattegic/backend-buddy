// import lineReader from 'line-reader'
import fs from 'fs'
import crypto from 'node:crypto'

export default class ToolController {
  mergeFiles(files: string[], operation: string): void {
    // options?
    // a - b; b - a;

    const perLine = false
    const output = fs.createWriteStream(`out.txt`, { flags: 'w' })

    files.forEach((file) => {
      console.log(file)
      const reader = fs.createReadStream(file)
      reader.pipe(output)
    })

    return
  }

  private readFiles(files: string[]) {}
}
