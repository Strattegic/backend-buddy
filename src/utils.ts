import fs from 'fs'
import readable from 'readable-numbers'
import crypto from 'node:crypto'

function createTestFile(options: {lines: number, extension: string}) {
  const output = fs.createWriteStream(`${readable(options.lines)}${options.extension}`)
  for (let i = 0; i < options.lines; i++) {
    let line = `${crypto.randomUUID()}; ${crypto.randomUUID()}; ${crypto.randomUUID()}; ${crypto.randomUUID()}; ${crypto.randomUUID()}`
    if (i < options.lines - 1) line += '\n'
    output.write(line)
  }
  output.close()
}

createTestFile({
  lines: 1_000_000,
  extension: '.csv',
})
