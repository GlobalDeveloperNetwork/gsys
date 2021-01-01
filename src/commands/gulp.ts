import {Command, flags} from '@oclif/command'

export default class Gulp extends Command {
  static description = 'Interact with Gulp for task running operations.'

  static flags: any = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'Interact with Gulp for task running operations.'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args} = this.parse(Gulp)
    const name = Gulp.flags.name
    this.log(`npm ${name} from ./src/commands/gulp.ts`)
    if (args.file && Gulp.flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
