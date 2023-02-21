import yargs, { ArgumentsCamelCase, Argv } from 'yargs'
import ToolController from './tool-controller'

const toolController = new ToolController()

yargs
  .command(
    'merge [file1] [file2] [operation]',
    'merge 2 files together',
    (yargs: Argv) => {
      return yargs
        .positional('file1', {
          describe: 'The first file to add',
        })
        .positional('file2', {
          describe: 'The second file to add',
        })
        .positional('operation', {
          describe: 'what merge option should be used?',
        })
        .option('verbose', {
          alias: 'v',
          default: false,
          boolean: true,
        })
    },
    ({
      verbose,
      file1,
      file2,
      operation,
    }: ArgumentsCamelCase<{
      verbose: boolean
      file1: string
      file2: string
      operation: string
    }>) => {
      console.log(verbose)
      if (verbose) console.info(`Generating merge for files [${file1}, ${file2}]`)
      toolController.mergeFiles([file1, file2], operation)
    }
  )
  .parse()
