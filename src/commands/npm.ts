import {Command, flags} from '@oclif/command'

export default class Npm extends Command {
  static description = 'Interact with the npm registry in the scope of this CLI.  i.e.- not globally'

  static examples = [
    `$ gsys npm
Interact with the npm registry in the scope of this CLI.  i.e.- not globally
`,
  ]

  static flags: any = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'Interact with NPM for this CLI scope only!'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args} = this.parse(Npm)
    const name = Npm.flags.name
    this.log(`npm ${name} from ./src/commands/npm.ts`)
    if (args.file && Npm.flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
