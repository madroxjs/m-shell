import { Command } from 'commander';
// import { colors } from '../../lib/utils.mjs';
import { __projectroot, colors } from '../../lib/utils.mjs'
import { join } from 'path';
import fs from 'fs-extra';
import * as changeCase from "change-case";
import { componentTemplate, indexTemplate, variantsTemplate, storyTemplate } from '../../templates/index.mjs'
import { log } from 'console'

const program = new Command();

program
    .name('create')
    .description('CLI command to generate something for a madrox project.')
    .argument('type', 'type of component or w/e.')
    .argument('nameOfThing', 'Name of thing.')
    .version('0.9.0')
    .action(createCommand);

export default program;

export async function createCommand(type, nameOfThing) {

    let typeFolder = type.split('/');
    switch (typeFolder[0]) {
        case "atom":
            typeFolder[0] = "Atoms"
            break;
        case "molecule":
            typeFolder[0] = "Molecules"
            break;
        case "organism":
            typeFolder[0] = "Organisms"
            break;
        case "template":
            typeFolder[0] = "Templates"
            break;
        case "page":
            typeFolder[0] = "Pages"
            break;
        default:
            typeFolder[0] = changeCase.pascalCase(typeFolder[0])
            break;
    }

    const targetPath = join(__projectroot, 'src', 'components', ...typeFolder, changeCase.pascalCase(nameOfThing))
    await fs.ensureDir(targetPath)

    ;[
        ['component.tsx', componentTemplate(nameOfThing)],
        ['index.ts', indexTemplate()],
        ['story.tsx', storyTemplate(nameOfThing)],
        ['variants.tsx', variantsTemplate(nameOfThing)]
    ].forEach(async ([fileName, fileContents]) => {
        await fs.writeFile(join(targetPath, fileName), fileContents, 'utf-8')
        log(colors.blue(`<${changeCase.pascalCase(nameOfThing)} /> -->`), colors.yellow(fileName), colors.green(`created!`))
    })

}

program.parse();

createCommand.docs =  `# Init command documentation

The init command is used to initialize a new madrox project.

### Source Code

~~~javascript
${createCommand.toString()}
~~~
`;